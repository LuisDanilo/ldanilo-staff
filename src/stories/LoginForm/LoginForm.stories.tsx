import { Meta, StoryObj } from "@storybook/react";
import { StoryLoginForm } from "@/components/LoginForm/StoryLoginForm";
import {
    storyDesktop4K,
    storyLaptop,
    storyLaptopL,
    storyMobileL,
    storyMobileM,
    storyMobileS,
    storyTablet,
} from "@/stories/utils/viewports";

const meta: Meta<typeof StoryLoginForm> = {
    title: "components/LoginForm",
    component: StoryLoginForm,
};

type Story = StoryObj<typeof StoryLoginForm>;

export const MobileS = storyMobileS<Story>();
export const MobileM = storyMobileM<Story>();
export const MobileL = storyMobileL<Story>();
export const Tablet = storyTablet<Story>();
export const Laptop = storyLaptop<Story>();
export const LaptopL = storyLaptopL<Story>();
export const Desktop4K = storyDesktop4K<Story>();

export default meta;
