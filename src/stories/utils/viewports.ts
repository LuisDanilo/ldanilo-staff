import {
    INITIAL_VIEWPORTS,
    MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";

export function storyMobileS<T>() {
    return {
        args: {
            themeMode: "light",
        },
        parameters: {
            layout: "fullscreen",
            viewport: {
                viewports: {
                    ...INITIAL_VIEWPORTS,
                    ...MINIMAL_VIEWPORTS,
                },
                defaultViewport: "iphone5",
            },
        }
    } as T
}

export function storyMobileM<T>() {
    return {
        args: {
            themeMode: "light",
        },
        parameters: {
            layout: "fullscreen",
            viewport: {
                viewports: {
                    ...INITIAL_VIEWPORTS,
                    ...MINIMAL_VIEWPORTS,
                },
                defaultViewport: "iphonex",
            },
        },
    } as T
}

export function storyMobileL<T>() {
    return {
        args: {
            themeMode: "light",
        },
        parameters: {
            layout: "fullscreen",
            viewport: {
                viewports: {
                    ...INITIAL_VIEWPORTS,
                    ...MINIMAL_VIEWPORTS,
                },
                defaultViewport: "iphone14promax",
            },
        },
    } as T
}

export function storyTablet<T>() {
    return {
        args: {
            themeMode: "light",
        },
        parameters: {
            layout: "fullscreen",
            viewport: {
                viewports: {
                    ...INITIAL_VIEWPORTS,
                    ...MINIMAL_VIEWPORTS,
                },
                defaultViewport: "ipad",
            },
        },
    } as T
}

export function storyLaptop<T>() {
    return {
        args: {
            themeMode: "light",
        },
        parameters: {
            layout: "fullscreen",
            viewport: {
                viewports: {
                    MacBookAir: {
                        name: "MacBook Air",
                        styles: {
                            width: "1280px",
                            height: "832px",
                        },
                    },
                },
                defaultViewport: "MacBookAir",
            },
        },
    } as T
}

export function storyLaptopL<T>() {
    return {
        args: {
            themeMode: "light",
        },
        parameters: {
            layout: "fullscreen",
            viewport: {
                viewports: {
                    Desktop: {
                        name: "Desktop",
                        styles: {
                            width: "1440px",
                            height: "1024px",
                        },
                    },
                },
                defaultViewport: "Desktop",
            },
        },
    } as T
}

export function storyDesktop4K<T>() {
    return {
        args: {
            themeMode: "light",
        },
        parameters: {
            layout: "fullscreen",
            viewport: {
                viewports: {
                    Desktop4K: {
                        name: "Desktop4K",
                        styles: {
                            width: "1920px",
                            height: "1080px",
                        },
                    },
                },
                defaultViewport: "Desktop4K",
            },
        },
    } as T
}
