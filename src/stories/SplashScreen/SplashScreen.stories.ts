import { Meta, StoryObj } from "@storybook/react";
import { StorySplashScreen } from "@/components/SplashScreen/StorySplashScreen";
import {
    storyDesktop4K,
    storyLaptop,
    storyLaptopL,
    storyMobileL,
    storyMobileM,
    storyMobileS,
    storyTablet,
} from "@/stories/utils/storybookViewports";

const meta: Meta<typeof StorySplashScreen> = {
    title: "components/SplashScreen",
    component: StorySplashScreen,
};

type Story = StoryObj<typeof StorySplashScreen>;


export const MobileS: Story = {
    ...(storyMobileS<Story>()),
    args: {
        themeMode: "dark",
        subtitle: "El poder del reconocimiento"
    },
}

export const MobileM: Story = {
    ...(storyMobileM<Story>()),
    args: {
        themeMode: "dark",
        subtitle: "El poder del reconocimiento"
    },
}

export const MobileL: Story = {
    ...(storyMobileL<Story>()),
    args: {
        themeMode: "dark",
        subtitle: "El poder del reconocimiento"
    },
}

export const Tablet: Story = {
    ...(storyTablet<Story>()),
    args: {
        themeMode: "dark",
        subtitle: "El poder del reconocimiento"
    },
}

export const Laptop: Story = {
    ...(storyLaptop<Story>()),
    args: {
        themeMode: "dark",
        subtitle: "El poder del reconocimiento"
    },
}

export const LaptopL: Story = {
    ...(storyLaptopL<Story>()),
    args: {
        themeMode: "dark",
        subtitle: "El poder del reconocimiento"
    },
}

export const Desktop4K: Story = {
    ...(storyDesktop4K<Story>()),
    args: {
        themeMode: "light",
        subtitle: "El poder del reconocimiento"
    },
}

export default meta;
