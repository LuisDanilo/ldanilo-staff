import { Meta, StoryObj } from "@storybook/react";
import { StorySplashScreen } from "@/components/SplashScreen";

const meta: Meta<typeof StorySplashScreen> = {
    title: "components/SplashScreen",
    component: StorySplashScreen,
};

export default meta;

type Story = StoryObj<typeof StorySplashScreen>;

export const Primary: Story = {
    args: {
        themeMode: "light",
    },
    parameters: {
        layout: "fullscreen",
    },
};
