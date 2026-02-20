import plansData from "@/data/plans.json";

export interface Plan {
  id: string;
  code: string;
  name: string;
  speed_down: number;
  speed_up: number;
  price_monthly: number;
  price_display: string;
  description: string;
  use_case: string;
  features: string[];
  recommended: boolean;
}

export const plans: Plan[] = plansData;

export function getPlanById(id: string): Plan | undefined {
  return plans.find((p) => p.id === id);
}

export function getPlanByCode(code: string): Plan | undefined {
  return plans.find((p) => p.code === code);
}
