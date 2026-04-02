import Stripe from "stripe"

let _stripe: Stripe | null = null

function getStripe(): Stripe {
  if (!_stripe) {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY
    if (!stripeSecretKey) {
      throw new Error("STRIPE_SECRET_KEY is not set")
    }
    _stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2025-05-28.basil",
      appInfo: {
        name: "Team Pulse",
        version: "0.1.0"
      }
    })
  }
  return _stripe
}

export const stripe = new Proxy({} as Stripe, {
  get(_target, prop) {
    const instance = getStripe()
    const value = (instance as unknown as Record<string, unknown>)[prop as string]
    if (typeof value === "function") {
      return (value as (...args: unknown[]) => unknown).bind(instance)
    }
    return value
  }
})
