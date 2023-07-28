import Heading from "@/components/heading";
import React from "react";
import { Settings } from "lucide-react";
import SettingsHeading from "@/components/settings/settings-heading";
import SubscriptionButton from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";

const SettingsPage = async () => {
  const isPro = await checkSubscription();
  return (
    <div>
      <SettingsHeading />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro
            ? "You're currently on pro plan"
            : "You're currently on free plan"}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
};

export default SettingsPage;
