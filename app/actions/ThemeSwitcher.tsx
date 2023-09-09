import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { BsFillBrightnessHighFill } from "react-icons/bs"

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const themeSelection = () => {
    if (theme === "light" || theme === "system") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("light")
    }
  }

  return (
    <div>
      <BsFillBrightnessHighFill onClick={themeSelection} />
    </div>
  )
}

export default ThemeSwitcher
