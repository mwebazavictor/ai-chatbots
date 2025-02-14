"use client";
import dynamic from "next/dynamic";
import React from "react";
import Home from "../home"

const HomePage: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 min-h-screen md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
         <Home />
      </div>
    </>
  );
};

export default HomePage;
