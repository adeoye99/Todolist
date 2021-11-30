import React,{ useState } from "react";

function Todoitems(props){
    return(
        <div>
        <li className = "listitems"
        onClick ={()=>{
            props.unCheck(props.id)
        }}>{props.text}</li>
        </div>
    )
}
export default Todoitems;