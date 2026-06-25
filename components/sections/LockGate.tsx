"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LockScreen } from "@/components/sections/LockScreen";

const storageKey = "bmc-site-unlocked";

type LockGateProps = {
  children: ReactNode;
};

export function LockGate({ children }: LockGateProps) {
  const pathname = usePathname();
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    setIsUnlocked(window.localStorage.getItem(storageKey) === "true");
  }, []);

  function unlock() {
    window.localStorage.setItem(storageKey, "true");
    setIsUnlocked(true);
  }

  if (pathname === "/") {
    return children;
  }

  if (!isUnlocked) {
    return <LockScreen onUnlock={unlock} />;
  }

  return children;
}
