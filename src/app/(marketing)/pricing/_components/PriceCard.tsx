"use client";

import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, CheckCircle } from "lucide-react";
import { PlanType, type Plan } from "../_repo/plans";
import { cn } from "@/lib/utils";

interface PriceCardProps {
  selected: boolean;
  onSelect: () => void;
  plan: Plan;
}

const PriceCard: FC<PriceCardProps> = ({ selected, onSelect, plan }) => {
  return (
    <Card
      className={cn(
        "w-full hover:bg-slate-50 flex flex-col",
        selected ? "bg-red-100 hover:bg-red-100" : ""
      )}
    >
      <CardHeader>
        <plan.icon className="text-red-500" />
        <CardTitle className="mt-2">{plan.title}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <h1 className="text-2xl font-bold mb-2">${plan.price}</h1>
        <ul className="text-sm text-slate-500 space-y-2">
          {plan.features.map((feature) => (
            <li key={feature.id} className="flex items-center gap-2">
              <Check size={16} />
              {feature.label}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          size="lg"
          onClick={onSelect}
          className="w-full flex items-center gap-2 cursor-pointer"
        >
          {selected && <CheckCircle />}
          {selected ? "Subscribed" : "Subscribe"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PriceCard;
