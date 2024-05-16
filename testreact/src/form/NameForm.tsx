import { useMemo, useState } from "react";
import '../App.css'

export default function NameForm() {
    const [color,setValue] = useState("")
    const UppercasedColor = useMemo(() => {
        return color.toUpperCase()
    }, [color])
    return (
        <>
        <div>
            <label htmlFor="Nom"></label>
            {/* <input id="Nom" type="text" value={value} onChange={(e)=> setValue(e.target.value)}/>
            <p>{value}</p> */}
            <input type="color" value={color} onChange={(e)=> setValue(e.target.value)}/>
            <p className="colorInput">{UppercasedColor}</p>
        </div>
        </>
    )
}