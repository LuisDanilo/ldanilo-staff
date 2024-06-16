import { PaletteMode } from "@mui/material"
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface AuthStore {
    authToken: string | null
    setToken: (token: string | null) => void
}

export const useAuthStore = create<AuthStore>()(
    persist(
        (setStore) => {
            return {
                authToken: null,
                setToken: (token) => setStore(() => ({ authToken: token }))
            }
        },
        { name: 'auth-storage' }
    )
)

interface ThemeStore {
    theme: PaletteMode
    setTheme: (theme: PaletteMode) => void
    switchTheme: () => void
}

export const useThemeStore = create<ThemeStore>()(
    persist(
        (setStore) => {
            return {
                theme: "light",
                setTheme: (theme: PaletteMode) => setStore(() => ({ theme })),
                switchTheme: () => setStore((store) => store.theme === "light" ? { theme: "dark" } : { theme: "light" })
            }
        },
        { name: 'theme' }
    )
)