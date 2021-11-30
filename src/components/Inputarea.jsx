import React ,{ useState} from "react";

function InputArea(props){
    const [list,setList] = useState("");

    function handleChange(event){
        const newValue= event.target.value;
        setList(newValue);
        
        
    }
    return(
        <div>
           <input className = "input" onChange = {handleChange} type = "text" placeholder = "Enter" value ={list}></input>
           <button className = "button" 
           onClick = {()=>{props.addOn(list);
            setList("")}}
            type = "submit">ADD</button>
        </div>
    )
}
export default InputArea;