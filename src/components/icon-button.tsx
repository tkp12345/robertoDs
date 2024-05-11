interface IconButtonProps {
    alt:string
    icon : string
    onClick: (e:React.MouseEvent<HTMLButtonElement>)=>void;
}

export default function IconButton({alt, icon,onClick}:IconButtonProps){
    return <button onClick={onClick}>
        <img alt={alt} src={icon}/>
    </button>
}