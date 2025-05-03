import React, { useState } from "react";
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
  const [error, setError] = useState(false);

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

  return (
    <div className="flex h-[400px] w-[800px] flex-col items-center justify-between bg-gray-900 p-12 rounded-xl shadow-md animate-fade-in">
      <div className="w-full">
        <h2 className="text-3xl font-serif font-bold text-gray-100 tracking-tight">Permit Number</h2>
      </div>
      <div className={`flex items-center justify-center ${error ? 'animate-shake-error' : ''}`}>
        <InputOTP maxLength={3} value={permitNumber} onChange={handleOtpChange} aria-label="Permit number">
          <InputOTPGroup className="gap-3">
            <InputOTPSlot index={0} className={`h-14 w-14 rounded-lg border border-gray-700 bg-gray-850 text-center text-2xl font-sans font-medium text-gray-100 shadow-sm focus:border-navy-600 focus:ring-2 focus:ring-navy-600/50 transition-all duration-200 ${error ? 'border-red-500/50' : ''}`} />
            <InputOTPSlot index={1} className={`h-14 w-14 rounded-lg border border-gray-700 bg-gray-850 text-center text-2xl font-sans font-medium text-gray-100 shadow-sm focus:border-navy-600 focus:ring-2 focus:ring-navy-600/50 transition-all duration-200 ${error ? 'border-red-500/50' : ''}`} />
            <InputOTPSlot index={2} className={`h-14 w-14 rounded-lg border border-gray-700 bg-gray-850 text-center text-2xl font-sans font-medium text-gray-100 shadow-sm focus:border-navy-600 focus:ring-2 focus:ring-navy-600/50 transition-all duration-200 ${error ? 'border-red-500/50' : ''}`} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <div className="flex w-full justify-between gap-6">
        <Button onClick={handlePreviousClick} className="flex h-12 w-36 items-center justify-center gap-2 rounded-lg bg-gray-700 text-gray-100 text-base font-sans font-medium hover:bg-gray-600 hover:scale-105 transition-all duration-200" aria-label="Go to previous step">
          <ArrowRight className="h-5 w-5 rotate-180" />
          <span>Previous</span>
        </Button>
        <Button onClick={handleResetPermitNumber} className="flex h-12 w-36 items-center justify-center gap-2 rounded-lg bg-gray-600 text-gray-100 text-base font-sans font-medium hover:bg-gray-500 hover:scale-105 transition-all duration-200" aria-label="Reset permit number">
          <span>Reset</span>
          <RotateCcw className="h-5 w-5" />
        </Button>
        <Button onClick={handleNextClick} disabled={permitNumber.length !== 3} className="flex h-12 w-36 items-center justify-center gap-2 rounded-lg bg-navy-600 text-gray-100 text-base font-sans font-medium hover:bg-navy-700 hover:scale-105 transition-all duration-200 disabled:bg-gray-800 disabled:opacity-50" aria-label="Proceed to next step">
          <span>Next</span>
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Form2;