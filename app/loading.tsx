"use client";

import LoadingBar from "react-top-loading-bar";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-full min-h-screen max-w-md mx-auto relative bg-white">
      <LoadingBar color="#4F45E4" height={5} progress={80} />
    </div>
  );
}
