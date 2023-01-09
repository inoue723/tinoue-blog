"use client";
import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export const countContext = createContext<number>(0);
export const setCountContext = createContext<Dispatch<SetStateAction<number>>>(
  () => undefined
);

export default function CountProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState<number>(0);

  return (
    <countContext.Provider value={count}>
      <setCountContext.Provider value={setCount}>
        {children}
      </setCountContext.Provider>
    </countContext.Provider>
  );
}
