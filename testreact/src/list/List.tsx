let arr=["Thomas", "Yoann", "Aly", "Jeremy"];
import '../App.css'
export default function List(){
    return(
        <>
        <div className="list">
            {arr.map((e,i)=> <li key={i}>{e}</li>)}
        </div>
        </>
    )
}