import TextInput from "../components/text-input.tsx";
import {fn} from "@storybook/test";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title : "Input/textInput",
    component: TextInput,
    parameters:{
        layout:"centered",
    },
    tags:["autodocs"],
    argTypes:{
        placeholder:{control:"text",description:"텍스트 인풋의 placeholder",defaultValue:"텍스트 입력 "},
        value:{control:"text",description:"value",defaultValue:""},
        onChange:{ action: "change" , description:"click event"}
    },
    args:{
        onChange: fn(),
    },
} satisfies Meta<typeof TextInput>

export default meta ;

type Story = StoryObj<typeof  meta>


export const Default : Story = {
    args : {
        placeholder : '검색어 입력',
        value: "",
    }
}