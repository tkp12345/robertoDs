import IconButton from "../components/icon-button.tsx";
import {fn} from "@storybook/test";
import {Meta, StoryObj} from "@storybook/react";


const meta = {
    title : "Buttons/IconButton",
    component: IconButton,
    parameters:{
        layout: "centered",
    },
    tags:["autodocs"],
    argTypes:{
        alt:{
            control:"text",
            description:"이미지의 alt 속성",
            defaultValue:"icon"
        },
        icon:{
            control:"text",
            description: "이미지의 경로",
            defaultValue:"",
        },
        onClick: { action: "clicked" , description:"click event"}
    },
    args:{
        onClick: fn(),
    },
} satisfies  Meta<typeof IconButton>

export default meta ;

type Story = StoryObj<typeof  meta>

export const Default : Story = {
    args : {
        alt : 'icon',
        icon: "src/assets/ic-asset-delete-dark.svg",
    }
}