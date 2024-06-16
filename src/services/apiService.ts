import getThemeColorsMock from "@/services/mocks/getThemeColors.json"

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
        if (Math.random() > 0.5) {
            resolve(getThemeColorsMock)
        } else {
            reject(null)
        }
    })
    // return new Promise((resolve, reject) => {
    //     axios({
    //         url: "",
    //         method: "GET"
    //     }).then(response => {
    //         if(response.status === 200) {
    //             resolve(response.data)
    //         } else {
    //             reject(response)
    //         }
    //     }).catch(e => reject(e))
    // })
}