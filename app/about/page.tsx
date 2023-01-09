"use client";

import { useCallback, useContext } from "react";
import { countContext, setCountContext } from "../../context/context";

export default function About() {
  const setCount = useContext(setCountContext);
  const count = useContext(countContext);
  const onClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [setCount]);

  return (
    <div className="flex flex-col h-screen bg-slate-700 text-white justify-center items-center">
      <h1 className="text-3xl">井上です</h1>
      <button onClick={onClick}>increment</button>
      count: {count}
    </div>
  );
}
