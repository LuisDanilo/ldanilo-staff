import { PaletteMode } from "@mui/material"

export interface AuthStore {
    authToken: string | null
    setToken: (token: string | null) => void
}

export interface ThemeStore {
    theme: PaletteMode
    setTheme: (theme: PaletteMode) => void
    switchTheme: () => void
}

export type Lang = "es" | "en"

export interface UserStore {
    user: Record<string, any> | null
    language: Lang,
    setUser: (user: Record<string, any>) => void
    setLanguage: (language: Lang) => void
}
