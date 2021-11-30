import React from "react";
import "../styles.css";

function Button(props){
    return (
        <div>
              <button  onClick = {props.onClick} type = {props.type}>Add</button>
        </div>
    )
}
export default Button;