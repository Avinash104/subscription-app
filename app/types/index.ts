import { Subscription, Tiers, User } from "@prisma/client"

export type SafeListing = Omit<Tiers, "createdAt"> & {
  createdAt: string
}

export type SafeReservation = Omit<
  Subscription,
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string
  startDate: string
  endDate: string
  listing: SafeListing
}

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string
  updatedAt: string
  emailVerified: string | null
}
