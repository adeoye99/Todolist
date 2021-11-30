import  React, { useState} from "react";
import "../styles.css";
import Todoitems from "./Todoitems";
import Heading from "./Heading";
import InputArea from "./Inputarea";


function App(){
    const[newList, setNewList] = useState([]);
   
    function handleClick(list){
        setNewList((prevvalue)=>{
           return [list,...prevvalue];
        });

    
    }
    function deleteItem(id){
        setNewList((prevalue)=>{
           return prevalue.filter((item,index)=>{
            return index != id
           }
            )
        })

    }
    return (
       

        <div>
             <div  className = "form">
                 <div className ="heading">
                          <Heading/>
                 </div>
                 <div>
                        <InputArea addOn = {handleClick}/>
                 <div >                    
                    <ul>
                       {newList.map((todoitems,index) => <Todoitems  className = "listitems" key ={index} id = {index} unCheck={deleteItem} text ={todoitems}/>)}
                     </ul>
                  </div>   
                   </div>
                  
               </div>
        </div>

    )
}

export default App;