"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <motion.h2 
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          >
            Simple, honest pricing
          </motion.h2>
          <motion.p 
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          >
            No hidden fees. No surprise charges. Just the features you need to empower your team.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-border bg-card shadow-sm sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight">Team Plan</h3>
            <p className="mt-6 text-base leading-7 text-muted-foreground">
              Unlock powerful synergy and seamless collaboration across all your projects. Includes all standard features required to keep your team in sync.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-brand-primary">What's included</h4>
              <div className="h-px flex-auto bg-border" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-muted-foreground sm:grid-cols-2 sm:gap-6"
            >
              {['Unlimited projects', 'Real-time collaboration', 'Custom domain', 'Basic integrations', 'Slack & Teams sync'].map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-brand-primary" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <motion.div 
              className="rounded-2xl bg-muted py-10 text-center ring-1 ring-inset ring-border lg:flex lg:flex-col lg:justify-center lg:py-16"
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            >
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold">Pay once, own it forever</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight">$349</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">USD</span>
                </p>
                <Button className="mt-10 w-full" size="lg" asChild>
                  <Link href="/signup">Get access</Link>
                </Button>
                <p className="mt-6 text-xs leading-5 text-muted-foreground">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
