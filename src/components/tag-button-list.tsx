import TagButton from "./tag-button.tsx";
import {useState} from "react";

interface TagButtonListProps<T extends string>{
    tags : T[];

    onTagClick: (tag: T)=>void
}

 const TagButtonList = <T extends string> ({tags,onTagClick}:TagButtonListProps<T>) => {
    const [selected , setSelected] = useState<T>(tags[0])

     const onChangeTag = (e:React.MouseEvent<HTMLDivElement>)=>{
        const eventTarget = e.target as HTMLButtonElement
         const tagText = eventTarget.textContent as T;
        onTagClick(tagText)
     }

    return (
        <div className='flex gap-x-4' onClick={onChangeTag}>
            {tags.map(tag=>(
                <TagButton
                    key={tag}
                    isChecked={tag === selected}
                    onClick={()=> setSelected(tag)}
                >
                    {tag}
                </TagButton>
            ))}
            </div>
    );
};

export default TagButtonList