import { useState } from 'react'

export default function () {
  const [darkTheme, setDarkTheme] = useState(true)

  const setTheme = () => {
    const theme = !darkTheme
    setDarkTheme(theme)
  }

  return {
    darkTheme,
    setTheme
  }
}
