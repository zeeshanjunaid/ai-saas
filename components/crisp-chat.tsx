"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("21fa94ee-d01b-4b24-9057-f7b5f1eb52e5");
  }, []);

  return null;
};

export default CrispChat;
