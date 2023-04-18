"use client"

import { Elements } from "@stripe/react-stripe-js"
import Stripe from "stripe"

interface StripeProviderProps {
  stripePromise: Stripe | null | PromiseLike<Stripe | null>
}

const StripeProvider: React.FC<StripeProviderProps> = ({ stripePromise }) => {
  return <Elements stripe={stripePromise} />
}

export default StripeProvider
