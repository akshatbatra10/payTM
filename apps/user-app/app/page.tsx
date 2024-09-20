"use client";

import { useBalance } from "@repo/store/useBalance";

export default function Home() {
  const balance = useBalance();

  return (
    <div className="flex justify-center">
      <div>Hi there {balance}</div>
    </div>
  );
}
