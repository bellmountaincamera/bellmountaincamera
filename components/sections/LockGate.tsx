"use client";

import { ReactNode, useEffect, useState } from "react";
import { LockScreen } from "@/components/sections/LockScreen";

const storageKey = "bmc-site-unlocked";

type LockGateProps = {
  children: ReactNode;
};

export function LockGate({ children }: LockGateProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    setIsUnlocked(window.localStorage.getItem(storageKey) === "true");
  }, []);

  function unlock() {
    window.localStorage.setItem(storageKey, "true");
    setIsUnlocked(true);
  }

  if (!isUnlocked) {
    return <LockScreen onUnlock={unlock} />;
  }

  return children;
}
