import {Meta, StoryObj} from "@storybook/react";
import TagButton from "../components/tag-button.tsx";
import {fn} from "@storybook/test";

const meta = {
    title : "Buttons/tagButton",
    component: TagButton,
    parameters:{
        layout:"centered",
    },
    tags:["autodocs"],
    argTypes:{
        value:{control:"text",description:"value",defaultValue:""},
        isChecked:{control:"boolean",description:"checked",defaultValue:false},
        onClick:{ action: "click" , description:"click event"}
    },
    args:{
        onClick: fn(),
    },
} satisfies Meta<typeof TagButton>

export default meta ;

type Story = StoryObj<typeof  meta>


export const Default : Story = {
    args : {
        value: "text",
        isChecked:false,
    }
}