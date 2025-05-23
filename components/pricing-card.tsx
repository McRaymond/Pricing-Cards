"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Plan {
  name: string
  price: number
  period: string
  features: string[]
  featured?: boolean
}

interface PricingCardProps {
  plan: Plan
  onSelect: () => void
}

export function PricingCard({ plan, onSelect }: PricingCardProps) {
  return (
    <div
      className={cn(
        "bg-zinc-900 border rounded-lg p-6 space-y-4",
        plan.featured ? "border-purple-500" : "border-zinc-800",
      )}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
        {plan.featured && (
          <span className="text-xs font-bold bg-white text-black px-2 py-1 rounded-full">Featured</span>
        )}
      </div>
      <div className="text-3xl font-bold text-white">
        €{plan.price}
        <span className="text-sm font-normal text-zinc-400">/{plan.period}</span>
      </div>
      <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={onSelect}>
        Get {plan.name}
      </Button>
      <ul className="text-sm text-zinc-300 list-disc pl-5 space-y-1">
        {plan.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
    </div>
  )
}
