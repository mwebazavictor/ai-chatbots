"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Home: React.FC = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push("/agents/owned");
    };
    return (
    <>
      <div>
        <div>
        <h1>Welcome to Tubayo Chatbots Manager</h1>
        </div>
        <button onClick={handleClick}>
            View and Manage Chatbots
        </button>
      </div>
    </>
  );
};

export default Home;