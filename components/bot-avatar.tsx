'use client'

import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

const BotAvatar = () => {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage className="p-1" src="/logo.png" />
    </Avatar>
  );
};

export default BotAvatar;
