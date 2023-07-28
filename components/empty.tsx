"use client";

import Image from "next/image";
import React from "react";
interface EmptyProps {
  label: string;
}
const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image fill src="/empty.png" alt="empty" />
      </div>
      <div className="text-muted-forground text-sm text-center">{label}</div>
    </div>
  );
};

export default Empty;
