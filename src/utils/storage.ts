import { create } from "zustand"
import { persist } from "zustand/middleware"


export const useAuthStore = create(
    persist(
        (setStore) => {
            return {
                authToken: null,
                setToken: (token: string) => setStore(() => ({ authToken: token }))
            }
        },
        { name: 'auth-storage' }
    )
)