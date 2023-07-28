"use client";

import Heading from "../heading";
import React from "react";
import { Settings } from "lucide-react";

const SettingsHeading = () => {
  return (
    <Heading
      title="Settings"
      description="Manage account settings"
      icon={Settings}
      iconColor="text-gray-700"
      bgColor="bg-gray-700/10"
    />
  );
};

export default SettingsHeading;
