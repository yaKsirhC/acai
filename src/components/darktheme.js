import React, { useEffect, useState } from 'react'

const setToogleSwitch = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isDark, setIsDark] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [theme, setTheme] = useState(localStorage.theme);
    const colorTheme = theme === "dark" ? "light" : "dark";
  
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme, colorTheme]);
    const toggleTheme = () => {
        setTheme(colorTheme);
        setIsDark(!isDark);
    }
  return (
    {isDark, toggleTheme,theme}
  )
}

export {setToogleSwitch}