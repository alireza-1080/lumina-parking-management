"use client";
import React, { useEffect, useRef } from "react";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "../ui/input-otp";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setCarPlate } from "@/redux/slices/parkingDetailesSlice";
import { ArrowRight, RotateCcw } from "lucide-react";
import { slideIncrement } from "@/redux/slices/slideNumberSlice";

const Form1 = () => {
  const dispatch = useAppDispatch();
  const carDetails = useAppSelector((state) => state.parkingDetails);
  const { carPlate } = carDetails;
  const otp = useRef<HTMLInputElement | null>(null)

  const handleOtpChange = (value: string) => {
    dispatch(setCarPlate(value.toUpperCase()));
  };

  const handleResetPlateNumber = () => {
    dispatch(setCarPlate(""));
  };

  const handleNextClick = () => {
    dispatch(slideIncrement());
  };

  useEffect(() => {
    if (otp.current) otp.current.focus()
  }, [])

  return (
    <div className="flex h-[400px] w-[800px] flex-col items-center justify-between bg-gray-900 p-12 rounded-xl shadow-md animate-fade-in">
      <div className="w-full">
        <h2 className="text-3xl font-serif font-bold text-gray-100 tracking-tight">Plate Number</h2>
      </div>
      <div className="flex items-center justify-center">
        <InputOTP maxLength={6} value={carPlate} onChange={handleOtpChange} aria-label="Car plate number" ref={otp}>
          <InputOTPGroup className="gap-3">
            <InputOTPSlot index={0} className="h-14 w-14 rounded-lg border border-gray-700 bg-gray-850 text-center text-2xl font-sans font-medium text-gray-100 shadow-sm focus:border-navy-600 focus:ring-2 focus:ring-navy-600/50 transition-all duration-200" />
            <InputOTPSlot index={1} className="h-14 w-14 rounded-lg border border-gray-700 bg-gray-850 text-center text-2xl font-sans font-medium text-gray-100 shadow-sm focus:border-navy-600 focus:ring-2 focus:ring-navy-600/50 transition-all duration-200" />
            <InputOTPSlot index={2} className="h-14 w-14 rounded-lg border border-gray-700 bg-gray-850 text-center text-2xl font-sans font-medium text-gray-100 shadow-sm focus:border-navy-600 focus:ring-2 focus:ring-navy-600/50 transition-all duration-200" />
          </InputOTPGroup>
          <InputOTPSeparator className="text-gray-500 mx-2" />
          <InputOTPGroup className="gap-3">
            <InputOTPSlot index={3} className="h-14 w-14 rounded-lg border border-gray-700 bg-gray-850 text-center text-2xl font-sans font-medium text-gray-100 shadow-sm focus:border-navy-600 focus:ring-2 focus:ring-navy-600/50 transition-all duration-200" />
            <InputOTPSlot index={4} className="h-14 w-14 rounded-lg border border-gray-700 bg-gray-850 text-center text-2xl font-sans font-medium text-gray-100 shadow-sm focus:border-navy-600 focus:ring-2 focus:ring-navy-600/50 transition-all duration-200" />
            <InputOTPSlot index={5} className="h-14 w-14 rounded-lg border border-gray-700 bg-gray-850 text-center text-2xl font-sans font-medium text-gray-100 shadow-sm focus:border-navy-600 focus:ring-2 focus:ring-navy-600/50 transition-all duration-200" />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <div className="flex w-full justify-between gap-6">
        <Button className="flex h-12 w-36 items-center justify-center gap-2 rounded-lg bg-gray-700 text-gray-100 text-base font-sans font-medium hover:bg-gray-600 hover:scale-105 transition-all duration-200 disabled:bg-gray-800 disabled:opacity-50" disabled aria-disabled="true">
          <ArrowRight className="h-5 w-5 rotate-180" />
          <span>Previous</span>
        </Button>
        <Button onClick={handleResetPlateNumber} className="flex h-12 w-36 items-center justify-center gap-2 rounded-lg bg-gray-600 text-gray-100 text-base font-sans font-medium hover:bg-gray-500 hover:scale-105 transition-all duration-200" aria-label="Reset plate number">
          <span>Reset</span>
          <RotateCcw className="h-5 w-5" />
        </Button>
        <Button onClick={handleNextClick} disabled={carPlate.length !== 6} className="flex h-12 w-36 items-center justify-center gap-2 rounded-lg bg-navy-600 text-gray-100 text-base font-sans font-medium hover:bg-navy-700 hover:scale-105 transition-all duration-200 disabled:bg-gray-800 disabled:opacity-50" aria-label="Proceed to next step">
          <span>Next</span>
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Form1;