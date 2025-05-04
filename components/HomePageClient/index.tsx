"use client";
import React from "react";
import Form1 from "../Form1";
import Form2 from "../Form2";
import { useAppSelector } from "@/redux/hooks";
import Form3 from "../Form3";

const HomePageClient = () => {
  const slideNumber = useAppSelector((state) => state.slideNumber.value);

  return (
    <div className="relative h-[400px] w-[800px] overflow-x-hidden rounded-3xl bg-gray-900/90 backdrop-blur-3xl">
      {slideNumber === 1 && <Form1 />}
      {slideNumber === 2 && <Form2 />}
      {slideNumber === 3 && <Form3 />}
    </div>
  );
};

export default HomePageClient;
