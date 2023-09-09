"use client"

import { ThemeProvider as NextTheme } from "next-themes"
import { ReactNode, useEffect, useState } from "react"

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return <NextTheme attribute="class">{children}</NextTheme>
}

export default ThemeProvider
