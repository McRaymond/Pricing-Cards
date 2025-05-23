"use client"

import { useState } from "react"
import { plans } from "@/lib/plans"
import { PricingCard } from "@/components/pricing-card"
import { PaymentModal } from "@/components/payment-modal"

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (plan: typeof plans[0]) => {
    setSelectedPlan(plan)
    setIsOpen(true)
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h2 className="text-4xl font-bold text-center mb-4">Simple pricing for advanced people</h2>
      <p className="text-center text-zinc-400 mb-10">
        Our pricing is designed for advanced people who need more features and more flexibility.
      </p>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} onSelect={() => handleSelect(plan)} />
        ))}
      </div>
      <PaymentModal isOpen={isOpen} onClose={() => setIsOpen(false)} plan={selectedPlan ?? undefined} />
    </div>
  )
}
