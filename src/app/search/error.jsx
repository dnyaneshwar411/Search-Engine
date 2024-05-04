"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(function () {
    console.log(error)
  }, [error]);

  return <div className="flex flex-col justify-center items-center gap-4 mt-10">
    <h1 className="text-3xl">Something went wrong</h1>
    <button onClick={reset}>Try again</button>
  </div>
}