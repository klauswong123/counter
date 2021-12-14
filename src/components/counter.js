import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT, DECREMENT } from "../redux/constants.js";

function Counter(){
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const counter = useSelector((state) => state);
    useEffect(()=>{
        if (parseInt(counter)===0){
            setCount(0);
        }
    },[counter])
    
    function addCount(){
        setCount(count+1);
        dispatch({type: INCREMENT});
    }
    function minusCount(){
        setCount(count -1 );
        dispatch({type: DECREMENT});
    }

    return(
        <div>
            <button onClick={addCount}> + </button>
            <span>{count}</span> 
            <button onClick={minusCount}> - </button>
        </div>
    );

}

export default Counter;