import React, { useState } from "react";

const TodoApplication = () =>{

    const [textValue, updateTextValue] = useState ("");

    const [listText, updateListText] = useState([]);

    const getTargetValue = (event) =>{
        updateTextValue(event.target.value)
    }

    const submitValue = () =>{
        updateListText([...listText, textValue]);
        updateTextValue("");

    }

    const todoList = listText.map((value, index) =>{
        return(
            <li key={index}>{value}</li>
        )
    })

    return(
        <div>
            <h2>Todo App</h2>
            <div>
                <input type="text" value={textValue} placeholder="todo list..." onChange={getTargetValue}></input>
                <button onClick={()=>submitValue()}>Add</button>
                <ol>{todoList}</ol>
            </div>
        </div>
    )
}
export default TodoApplication;