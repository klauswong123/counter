import React, { useState } from "react";


function Counter(props){
    const [count, setCount] = useState(0);

    function addCount(){
        setCount(count+1);
        props.updateTotal(1)
    }
    function minusCount(){
        setCount(count -1 );
        props.updateTotal(-1)
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