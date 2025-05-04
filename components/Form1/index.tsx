"use client";
import React, { useEffect, useRef } from "react";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "../ui/input-otp";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setCarPlate } from "@/redux/slices/parkingDetailesSlice";
import { ArrowRight, RotateCcw } from "lucide-react";
import { slideIncrement } from "@/redux/slices/slideNumberSlice";
import toast from "react-hot-toast";

const Form1 = () => {
  const dispatch = useAppDispatch();
  const carDetails = useAppSelector((state) => state.parkingDetails);
  const slideNumber = useAppSelector((state) => state.slideNumber.value);
  const { carPlate } = carDetails;
  const otp1 = useRef<HTMLInputElement | null>(null);
  const nextBtn1 = useRef<HTMLButtonElement | null>(null);

  const handleOtpChange = (value: string) => {
    if (!/^[a-zA-Z0-9]+$/.test(value)) {
      toast.error("Only alphabets and numbers are allowed");
      return;
    }
    dispatch(setCarPlate(value.toUpperCase()));
  };

  const handleResetPlateNumber = () => {
    dispatch(setCarPlate(""));
  };

  const handleNextClick = () => {
    dispatch(slideIncrement());
  };

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      nextBtn1.current?.click();
    }
  };

  useEffect(() => {
    if (slideNumber === 0 && otp1.current) otp1.current.focus();
  }, [slideNumber]);

  return (
    <div className="animate-fade-in flex h-[400px] w-[800px] flex-col items-center justify-between rounded-xl bg-gray-900 p-12 shadow-md">
      <div className="w-full">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-100">Plate Number</h2>
      </div>
      <div className="flex items-center justify-center">
        <InputOTP
          maxLength={6}
          value={carPlate}
          onKeyDown={handlePressEnter}
          onChange={handleOtpChange}
          aria-label="Car plate number"
          ref={otp1}
        >
          <InputOTPGroup className="gap-3">
            <InputOTPSlot
              index={0}
              className="bg-gray-850 focus:border-navy-600 focus:ring-navy-600/50 h-14 w-14 rounded-lg border border-gray-700 text-center font-sans text-2xl font-medium text-gray-100 shadow-sm transition-all duration-200 focus:ring-2"
            />
            <InputOTPSlot
              index={1}
              className="bg-gray-850 focus:border-navy-600 focus:ring-navy-600/50 h-14 w-14 rounded-lg border border-gray-700 text-center font-sans text-2xl font-medium text-gray-100 shadow-sm transition-all duration-200 focus:ring-2"
            />
            <InputOTPSlot
              index={2}
              className="bg-gray-850 focus:border-navy-600 focus:ring-navy-600/50 h-14 w-14 rounded-lg border border-gray-700 text-center font-sans text-2xl font-medium text-gray-100 shadow-sm transition-all duration-200 focus:ring-2"
            />
          </InputOTPGroup>
          <InputOTPSeparator className="mx-2 text-gray-500" />
          <InputOTPGroup className="gap-3">
            <InputOTPSlot
              index={3}
              className="bg-gray-850 focus:border-navy-600 focus:ring-navy-600/50 h-14 w-14 rounded-lg border border-gray-700 text-center font-sans text-2xl font-medium text-gray-100 shadow-sm transition-all duration-200 focus:ring-2"
            />
            <InputOTPSlot
              index={4}
              className="bg-gray-850 focus:border-navy-600 focus:ring-navy-600/50 h-14 w-14 rounded-lg border border-gray-700 text-center font-sans text-2xl font-medium text-gray-100 shadow-sm transition-all duration-200 focus:ring-2"
            />
            <InputOTPSlot
              index={5}
              className="bg-gray-850 focus:border-navy-600 focus:ring-navy-600/50 h-14 w-14 rounded-lg border border-gray-700 text-center font-sans text-2xl font-medium text-gray-100 shadow-sm transition-all duration-200 focus:ring-2"
            />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <div className="flex w-full justify-between gap-6">
        <Button
          className="invisible flex h-12 w-36 items-center justify-center gap-2 rounded-lg bg-gray-700 font-sans text-base font-medium text-gray-100 transition-all duration-200 hover:scale-105 hover:bg-gray-600 disabled:bg-gray-800 disabled:opacity-50"
          disabled
          aria-disabled="true"
        >
          <ArrowRight className="h-5 w-5 rotate-180" />
          <span>Previous</span>
        </Button>
        <Button
          onClick={handleResetPlateNumber}
          className="flex h-12 w-36 items-center justify-center gap-2 rounded-lg bg-gray-600 font-sans text-base font-medium text-gray-100 transition-all duration-200 hover:scale-105 hover:bg-gray-500"
          aria-label="Reset plate number"
        >
          <span>Reset</span>
          <RotateCcw className="h-5 w-5" />
        </Button>
        <Button
          onClick={handleNextClick}
          disabled={carPlate.length !== 6}
          className="hover:bg-navy-700 flex h-12 w-36 items-center justify-center gap-2 rounded-lg bg-blue-800 font-sans text-base font-medium text-gray-100 transition-all duration-200 hover:scale-105 hover:bg-blue-700 disabled:bg-gray-800 disabled:opacity-50"
          aria-label="Proceed to next step"
          ref={nextBtn1}
        >
          <span>Next</span>
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Form1;
