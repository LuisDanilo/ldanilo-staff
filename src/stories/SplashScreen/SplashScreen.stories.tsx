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

export const MobileS = storyMobileS<Story>();
export const MobileM = storyMobileM<Story>();
export const MobileL = storyMobileL<Story>();
export const Tablet = storyTablet<Story>();
export const Laptop = storyLaptop<Story>();
export const LaptopL = storyLaptopL<Story>();
export const Desktop4K = storyDesktop4K<Story>();

export default meta;
