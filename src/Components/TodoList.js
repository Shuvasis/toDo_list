import React, { useState } from 'react';
import '../App.css';
import List from './List';

function TodoList() {

    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);

    const btnHandeler = (event) => {
        setInputList(event.target.value);
    }

    const listOfItem = () => {
        setItems((olditems) => {
            return [...olditems, inputList];
        })
        setInputList("");
    }
    
    const deleteItems = (id) => {
        console.log("deleted");
        setItems((olditems) => {
            return olditems.filter((Curarr, index) => {
                return index !== id;
            })
        })
    }

  return <div>
    
    
    <div className='divBox'>
        <h1 className='text'>ToDo List</h1>
        <input placeholder='Add new...' className='add' onChange={btnHandeler} value={inputList}/> 
        <button className='plus' onClick={listOfItem}>+</button>
        <hr style={{border: '1px solid red'}}/>

        <ul>

            {
                items.map((itemval, index) => {
                    return <List key={index} id={index} onSelect={deleteItems} text= {itemval}/>;
                })
            }
        </ul>
    </div>  
      
      
</div>
};

export default TodoList;
