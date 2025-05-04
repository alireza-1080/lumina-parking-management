import React, { useEffect, useRef, useState } from "react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "../ui/button";
import { slideIncrement, slideDecrement } from "@/redux/slices/slideNumberSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setPermitNumber } from "@/redux/slices/parkingDetailesSlice";
import toast from "react-hot-toast";

const Form2 = () => {
  const dispatch = useAppDispatch();
  const permitNumber = useAppSelector((state) => state.parkingDetails.permitNumber);
  const slideNumber = useAppSelector(state => state.slideNumber.value)
  const [error, setError] = useState(false);
  const nextBtn2 = useRef<HTMLButtonElement | null>(null)
  const otp2 = useRef<HTMLInputElement | null>(null)

  const handleOtpChange = (value: string) => {
    if (!Boolean(Number(value))) {
      toast.error("Only numbers allowed.");
      setError(true);
      setTimeout(() => setError(false), 500);
      return;
    }
    setError(false);
    dispatch(setPermitNumber(value));
  };

  const handleResetPermitNumber = () => {
    dispatch(setPermitNumber(""));
    setError(false);
  };

  const handleNextClick = () => {
    dispatch(slideIncrement());
  };

  const handlePreviousClick = () => {
    dispatch(slideDecrement());
  };

  useEffect(() => {
    if (slideNumber === 1 && otp2.current) otp2.current.focus()
  }, [slideNumber])

  return (
    <div className="animate-fade-in flex h-[400px] w-[800px] flex-col items-center justify-between rounded-xl bg-gray-900 p-12 shadow-md">
      <div className="w-full">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-100">Permit Number</h2>
      </div>
      <div className={`flex items-center justify-center ${error ? "animate-shake-error" : ""}`}>
        <InputOTP ref={otp2} maxLength={3} value={permitNumber} onChange={handleOtpChange} aria-label="Permit number">
          <InputOTPGroup className="gap-3">
            <InputOTPSlot
              index={0}
              className={`bg-gray-850 focus:border-navy-600 focus:ring-navy-600/50 h-14 w-14 rounded-lg border border-gray-700 text-center font-sans text-2xl font-medium text-gray-100 shadow-sm transition-all duration-200 focus:ring-2 ${error ? "border-red-500/50" : ""}`}
            />
            <InputOTPSlot
              index={1}
              className={`bg-gray-850 focus:border-navy-600 focus:ring-navy-600/50 h-14 w-14 rounded-lg border border-gray-700 text-center font-sans text-2xl font-medium text-gray-100 shadow-sm transition-all duration-200 focus:ring-2 ${error ? "border-red-500/50" : ""}`}
            />
            <InputOTPSlot
              index={2}
              className={`bg-gray-850 focus:border-navy-600 focus:ring-navy-600/50 h-14 w-14 rounded-lg border border-gray-700 text-center font-sans text-2xl font-medium text-gray-100 shadow-sm transition-all duration-200 focus:ring-2 ${error ? "border-red-500/50" : ""}`}
            />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <div className="flex w-full justify-between gap-6">
        <Button
          onClick={handlePreviousClick}
          className="flex h-12 w-36 items-center justify-center gap-2 rounded-lg bg-gray-700 font-sans text-base font-medium text-gray-100 transition-all duration-200 hover:scale-105 hover:bg-gray-60000"
          aria-label="Go to previous step"
        >
          <ArrowRight className="h-5 w-5 rotate-180" />
          <span>Previous</span>
        </Button>
        <Button
          onClick={handleResetPermitNumber}
          className="flex h-12 w-36 items-center justify-center gap-2 rounded-lg bg-gray-600 font-sans text-base font-medium text-gray-100 transition-all duration-200 hover:scale-105 hover:bg-gray-500"
          aria-label="Reset permit number"
        >
          <span>Reset</span>
          <RotateCcw className="h-5 w-5" />
        </Button>
        <Button
          onClick={handleNextClick}
          disabled={permitNumber.length !== 3}
          className="bg-blue-800 hover:bg-blue-700 flex h-12 w-36 items-center justify-center gap-2 rounded-lg font-sans text-base font-medium text-gray-100 transition-all duration-200 hover:scale-105 disabled:bg-gray-800 disabled:opacity-50"
          aria-label="Proceed to next step"
          ref={nextBtn2}
        >
          <span>Next</span>
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Form2;
