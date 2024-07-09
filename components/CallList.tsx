"use client";

import { useGetCalls } from "@/hooks/useGetCalls";
import React from "react";

const CallList = ({ type }: { type: "upcoming" | "ended" | "recordings" }) => {
  const { endedCalls, upcomingCalls, callRecordings, isLoading } =
    useGetCalls(); //custom hook

  return <div>CallList</div>;
};

export default CallList;
