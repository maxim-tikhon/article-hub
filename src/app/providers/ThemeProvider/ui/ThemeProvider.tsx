import { FC, ReactNode, useState,  } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext"

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps  {
    children: ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState(defaultTheme );

    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme 
        }}>{children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;