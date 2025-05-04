import React, { useEffect, useRef } from "react";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "../ui/input-otp";
import { Button } from "../ui/button";
import { ArrowRight, RotateCcw } from "lucide-react";
import { slideReset, slideSet } from "@/redux/slices/slideNumberSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { resetParkingDetails } from "@/redux/slices/parkingDetailesSlice";

const Form3 = () => {
  const dispatch = useAppDispatch();
  const parkingDetails = useAppSelector((state) => state.parkingDetails);
  const { carPlate, permitNumber } = parkingDetails;
  const submitBtn = useRef<HTMLButtonElement | null>(null);
  const formElem = useRef<HTMLDivElement | null>(null);

  const handlePreviousClick = () => {
    dispatch(slideSet(2));
  };

  const handleSubmit = () => {
    dispatch(slideReset());
    dispatch(resetParkingDetails());
  };

  const handleEditCarPlate = () => {
    dispatch(slideSet(1));
  };

  const handleEditPermitNumber = () => {
    dispatch(slideSet(2));
  };

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submitBtn.current?.click();
    }
  };

  useEffect(() => {
    if (formElem.current) formElem.current.focus();
  }, []);

  return (
    <div
      className="animate-fade-in flex h-[400px] w-[800px] flex-col items-center justify-between rounded-xl bg-gray-900 p-12 shadow-md"
      ref={formElem}
      onKeyDown={handlePressEnter}
    >
      <div className="w-full">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-100">Review Details</h2>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center gap-4">
          <InputOTP maxLength={6} value={carPlate} aria-label="Car plate number (read-only)">
            <InputOTPGroup className="gap-3">
              <InputOTPSlot
                index={0}
                className="bg-gray-850 h-14 w-14 rounded-lg border border-gray-700 text-center font-sans text-2xl font-medium text-gray-100 shadow-sm"
              />
              <InputOTPSlot
                index={1}
                className="bg-gray-850 h-14 w-14 rounded-lg border border-gray-700 text-center font-sans text-2xl font-medium text-gray-100 shadow-sm"
              />
              <InputOTPSlot
                index={2}
                className="bg-gray-850 h-14 w-14 rounded-lg border border-gray-700 text-center font-sans text-2xl font-medium text-gray-100 shadow-sm"
              />
            </InputOTPGroup>
            <InputOTPSeparator className="mx-2 text-gray-500" />
            <InputOTPGroup className="gap-3">
              <InputOTPSlot
                index={3}
                className="bg-gray-850 h-14 w-14 rounded-lg border border-gray-700 text-center font-sans text-2xl font-medium text-gray-100 shadow-sm"
              />
              <InputOTPSlot
                index={4}
                className="bg-gray-850 h-14 w-14 rounded-lg border border-gray-700 text-center font-sans text-2xl font-medium text-gray-100 shadow-sm"
              />
              <InputOTPSlot
                index={5}
                className="bg-gray-850 h-14 w-14 rounded-lg border border-gray-700 text-center font-sans text-2xl font-medium text-gray-100 shadow-sm"
              />
            </InputOTPGroup>
          </InputOTP>
          <Button
            onClick={handleEditCarPlate}
            className="hover:bg-navy-600 h-10 w-24 rounded-lg bg-gray-700 font-sans text-base font-medium text-gray-100 transition-all duration-200 hover:scale-105"
            aria-label="Edit car plate number"
          >
            Edit
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <InputOTP maxLength={3} value={permitNumber} aria-label="Permit number (read-only)">
            <InputOTPGroup className="gap-3">
              <InputOTPSlot
                index={0}
                className="bg-gray-850 h-14 w-14 rounded-lg border border-gray-700 text-center font-sans text-2xl font-medium text-gray-100 shadow-sm"
              />
              <InputOTPSlot
                index={1}
                className="bg-gray-850 h-14 w-14 rounded-lg border border-gray-700 text-center font-sans text-2xl font-medium text-gray-100 shadow-sm"
              />
              <InputOTPSlot
                index={2}
                className="bg-gray-850 h-14 w-14 rounded-lg border border-gray-700 text-center font-sans text-2xl font-medium text-gray-100 shadow-sm"
              />
            </InputOTPGroup>
          </InputOTP>
          <Button
            onClick={handleEditPermitNumber}
            className="h-10 w-24 rounded-lg bg-gray-700 font-sans text-base font-medium text-gray-100 transition-all duration-200 hover:scale-105 hover:bg-gray-600"
            aria-label="Edit permit number"
          >
            Edit
          </Button>
        </div>
      </div>
      <div className="flex w-full justify-between gap-6">
        <Button
          onClick={handlePreviousClick}
          className="flex h-12 w-36 items-center justify-center gap-2 rounded-lg bg-gray-700 font-sans text-base font-medium text-gray-100 transition-all duration-200 hover:scale-105 hover:bg-gray-600"
          aria-label="Go to previous step"
        >
          <ArrowRight className="h-5 w-5 rotate-180" />
          <span>Previous</span>
        </Button>
        <Button
          onClick={handleSubmit}
          className="invisible flex h-12 w-36 items-center justify-center gap-2 rounded-lg bg-gray-600 font-sans text-base font-medium text-gray-100 transition-all duration-200 hover:scale-105 hover:bg-gray-500"
          aria-label="Reset all details"
        >
          <span>Reset</span>
          <RotateCcw className="h-5 w-5" />
        </Button>
        <Button
          onClick={handleSubmit}
          className="flex h-12 w-36 items-center justify-center gap-2 rounded-lg bg-blue-800 font-sans text-base font-medium text-gray-100 transition-all duration-200 hover:scale-105 hover:bg-blue-700"
          aria-label="Submit details"
          ref={submitBtn}
        >
          <span>Submit</span>
        </Button>
      </div>
    </div>
  );
};

export default Form3;
