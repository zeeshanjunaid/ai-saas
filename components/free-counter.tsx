"use client";

import { Card, CardContent } from "./ui/card";
import React, { useEffect, useState } from "react";

import { Button } from "./ui/button";
import { MAX_FREE_COUNTS } from "@/constants";
import { Progress } from "./ui/progress";
import { Zap } from "lucide-react";
import { useProModal } from "@/hooks/use-pro-modal";

interface FreeCounterProps {
  apiLimitCount: number;
  isPro: boolean;
}
const FreeCounter = ({ apiLimitCount, isPro = false }: FreeCounterProps) => {
  const [mounted, setMounte] = useState(false);
  const proModal = useProModal();
  useEffect(() => {
    setMounte(true);
  }, []);
  if (!mounted || isPro) {
    return null;
  }

  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white space-y-2 mb-4">
            <p>
              {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
            </p>
            <Progress
              className="h-3"
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
            />
          </div>

          <Button
            onClick={proModal.onOpen}
            className="w-full"
            variant="premium"
          >
            Upgrade <Zap className="w-4 h-4 mal-2 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreeCounter;
