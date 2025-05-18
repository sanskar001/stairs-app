import { Aperture, Building2, LucideIcon, Rocket } from "lucide-react";

interface Feature {
  id: string;
  label: string;
}

export enum PlanType {
  lite = "lite",
  pro = "pro",
  premium = "premium",
}

export interface Plan {
  icon: LucideIcon;
  type: PlanType;
  title: string;
  description: string;
  price: number;
  features: Feature[];
}

export const plans: Plan[] = [
  {
    icon: Aperture,
    type: PlanType.lite,
    title: "Lite",
    description: "Taste our product",
    price: 0,
    features: [
      {
        id: "feat-0",
        label: "Upto to 3 projects",
      },
      {
        id: "feat-1",
        label: "10 Tasks per Project",
      },
      {
        id: "feat-2",
        label: "Basic Task Management",
      },
    ],
  },
  {
    icon: Rocket,
    type: PlanType.pro,
    title: "Pro",
    description: "Make more projects",
    price: 50,
    features: [
      {
        id: "feat-0",
        label: "Upto to 5 projects",
      },
      {
        id: "feat-1",
        label: "100 Tasks per Project",
      },
      {
        id: "feat-2",
        label: "Task Labels & Priorities",
      },
      {
        id: "feat-3",
        label: "Team Collaboration (up to 5 users)",
      },
    ],
  },
  {
    icon: Building2,
    type: PlanType.premium,
    title: "Enterprise",
    description: "For big companies",
    price: 100,
    features: [
      {
        id: "feat-0",
        label: "Unlimited projects",
      },
      {
        id: "feat-1",
        label: " Unlimited Tasks",
      },
      {
        id: "feat-2",
        label: "Task Labels & Priorities",
      },
      {
        id: "feat-3",
        label: "Unlimited Team Members",
      },
      {
        id: "feat-4",
        label: "Role-Based Permissions",
      },
      {
        id: "feat-5",
        label: "Advanced Reports & Export",
      },
    ],
  },
];
