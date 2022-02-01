import React from "react";

const List = (props) => {
    return(
        <>
            <div>
                
                <li> <i className="fas fa-trash-alt fal" 
                onClick={() => {
                    props.onSelect(props.id)
                }}
                /> {props.text}</li> 
            </div>
        </>
    )
} 

export default List;