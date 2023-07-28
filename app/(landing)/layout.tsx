import React from "react";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full bg-[#111827] overflow-auto">
      <div className="mx-auto max-w-sreen-xl h-full w-full">{children}</div>
    </main>
  );
};

export default LandingPageLayout;
