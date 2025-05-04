"use client";
import React, { useEffect, useState } from "react";
import Form1 from "../Form1";
import Form2 from "../Form2";
import { useAppSelector } from "@/redux/hooks";
import Form3 from "../Form3";
import toast from "react-hot-toast";

const HomePageClient = () => {
  const slideNumber = useAppSelector((state) => state.slideNumber.value);
  const [left, setLeft] = useState<number>(0)

  useEffect(() => {
    setLeft(slideNumber * 800)
    toast(slideNumber.toString())
  }, [slideNumber])
  return (
    <div className="relative h-[400px] w-[800px] overflow-hidden rounded-3xl bg-gray-900/90 backdrop-blur-3xl">
      <div
        className="absolute flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${left}px)` }}
      >
        <Form1 />
        <Form2 />
        <Form3 />
      </div>
    </div>
  );
};

export default HomePageClient;
