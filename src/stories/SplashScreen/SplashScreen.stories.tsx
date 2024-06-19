import { Meta, StoryObj } from "@storybook/react";
import { StorySplashScreen } from "@/components/SplashScreen";
import {
    INITIAL_VIEWPORTS,
    MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";

const meta: Meta<typeof StorySplashScreen> = {
    title: "components/SplashScreen",
    component: StorySplashScreen,
};

export default meta;

type Story = StoryObj<typeof StorySplashScreen>;

export const MobileS: Story = {
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
    },
};

export const MobileM: Story = {
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
};

export const MobileL: Story = {
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
};

export const Tablet: Story = {
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
};

export const Laptop: Story = {
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
};

export const LaptopL: Story = {
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
};

export const Desktop4K: Story = {
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
};
