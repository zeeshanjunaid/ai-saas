import LandingHero from "@/components/landing-hero";
import LandingNavbar from "@/components/landing-navbar";
import React from "react";

const LandingPage = () => {
  return (
    <div className="h-full relative">
      <LandingNavbar />
      <LandingHero />
      <div className="text-muted-foreground absolute bottom-4 left-4 text-sm">
        &copy; 2023, All rights reserved
      </div>
    </div>
  );
};

export default LandingPage;
