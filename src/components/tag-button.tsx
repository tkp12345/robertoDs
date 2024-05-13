
interface  TagButtonProps{
    value:string
    isChecked:boolean
    onClick :()=>void
}
export const TagButton = ({value,isChecked,onClick}:TagButtonProps) => {
    const checkedButton = isChecked?     "bg-white text-black"
        : "text-white bg-dark-opacity";

    return (
        <button onClick={onClick}
             className={`px-[10px]
          h-[33px]
        text-sm
        font-medium rounded-tag-button border border-white ${checkedButton}`}>
            {value}
        </button>
    );
};

export default  TagButton;