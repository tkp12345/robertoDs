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
    //props에 대한 정보 정의
    argTypes:{
        tags:{
            Control:"array",
            description:"테그 리스트",
            defaultValue:['태그1','태그2','태그3']
        },
        onTagClick:{action:"clicked",description:"클릭 이벤트 "}
    },
    //스토리 초기 상태를 설정 및 시뮬레이터
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