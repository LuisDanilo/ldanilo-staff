import { AuthStore, ThemeStore, UserStore } from "@/types/storage.types"
import { PaletteMode } from "@mui/material"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useAuthStore = create<AuthStore>()(
    persist(
        (setStore) => {
            return {
                authToken: null,
                setToken: (token) => setStore(() => ({ authToken: token }))
            }
        },
        { name: "auth-storage" }
    )
)

export const useThemeStore = create<ThemeStore>()(
    persist(
        (setStore) => {
            return {
                theme: "light",
                setTheme: (theme: PaletteMode) => setStore(() => ({ theme })),
                switchTheme: () => setStore((store) => store.theme === "light" ? { theme: "dark" } : { theme: "light" })
            }
        },
        { name: "theme" }
    )
)

export const useUserStore = create<UserStore>()(
    persist(
        (setStore) => {
            return {
                user: null,
                language: "es",
                setUser: (user: Record<string, any>) => setStore(() => ({ user })),
                setLanguage: (language) => setStore(() => ({ language }))
            }
        },
        { name: "user" }
    )
)
