import getThemeColorsMock from "@/services/mocks/getThemeColors.json"
import performLoginMock from "@/services/mocks/performLogin.json"

interface GetThemeColors {
    light: {
        primary: string
        background: string
    }
    dark: {
        primary: string
        background: string
    }
}

export function getThemeColors(): Promise<GetThemeColors | null> {
    return new Promise((resolve, reject) => {
        const status = Math.random() > 0.5 ? 200 : 500
        if (status === 200) {
            resolve(getThemeColorsMock.data)
        } else {
            reject(null)
        }
    })
}

interface PerformLogin {
    token: string
}

export function performLogin(_email: string): Promise<PerformLogin | null> {
    return new Promise((resolve, reject) => {
        const status = Math.random() > 0.5 ? 200 : 500
        setTimeout(() => {
            if (status === 200) {
                resolve(performLoginMock.data)
            } else {
                reject(null)
            }
        }, 500)

    })
} 
