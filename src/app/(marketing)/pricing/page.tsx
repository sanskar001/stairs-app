"use client";

import React, { useState } from "react";
import PriceCard from "./_components/PriceCard";
import { plans, type PlanType } from "./_repo/plans";

const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<null | PlanType>(null);

  const selectPriceHandle = (plan: PlanType) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="flex flex-col items-center space-y-10 pt-10">
      <h1 className="text-3xl font-semibold text-center max-w-md">
        A Simple plan for every company
      </h1>

      <div className="w-full sm:max-w-5xl p-4 flex flex-col md:flex-row gap-4">
        {plans.map((plan) => (
          <PriceCard
            plan={plan}
            key={plan.type}
            selected={plan.type === selectedPlan}
            onSelect={selectPriceHandle.bind(null, plan.type)}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
