import {Meta, StoryObj} from "@storybook/react";
import {fn} from "@storybook/test";
import TagButtonList from "../components/tag-button-list.tsx";

const meta = {
    title : "Buttons/tagButtonList",
    component: TagButtonList,
    parameters:{
        layout:"centered",
    },
    tags:["autodocs"],
    argTypes:{
        tags:{
            control:"array",
            description:"테그 리스트",
            defaultValue:['태그1','태그2','태그3']
        },
        onTagClick:{action:"clicked",description:"클릭 이벤트 "}
    },
    args:{
        onTagClick: fn(),
    },
} satisfies Meta<typeof TagButtonList>

export default meta ;

type Story = StoryObj<typeof  meta>


export const Default : Story = {
    args : {
        tags:['태그1','태그2','태그3']
    }
}