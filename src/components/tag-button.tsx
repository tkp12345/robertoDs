
interface  TagButtonProps{
    children:string
    isChecked:boolean
    onClick :()=>void
}
export const TagButton = ({children,isChecked,onClick}:TagButtonProps) => {
    const checkedButton = isChecked
        ? "bg-white text-black"
        : "text-white bg-dark-opacity";

    return (
        <button onClick={onClick}
             className={`
                px-[10px]
                h-[33px]
                text-sm
                flex
                items-center
                font-medium rounded-tag-button border border-white ${checkedButton}`}>
            {children}
        </button>
    );
};

export default  TagButton;