import {useState} from "react";

interface TextInputProps {
    placeholder:string
    value:string
    onChange:(e:React.ChangeEvent<HTMLInputElement>) => void
}
export default function TextInput({placeholder,value,onChange}:TextInputProps){
    const [focus , setFocus] = useState(false)
 const borderColor = focus ? 'border-2 border-black ': value?'black':'light_grey'

    return(
        <div  onBlur={()=>setFocus(false)} onFocus={()=>setFocus(true)} className={`border text-black bg-white rounded-lg ${borderColor}`}>
        <input
            className={`outline-none bg-white w-full p-2`}
            type="text"   aria-label={placeholder}
                value={value} placeholder={placeholder} onChange={onChange}  />
</div>
    )
}