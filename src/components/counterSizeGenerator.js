import { useState } from "react";


function CounterSizeGenerator(props){
    const [size, setSize] = useState(0);

    function inputSize(value){
        if (value>=0){
            setSize(value);
            props.updateSize(parseInt(value));
        }
    }
    return(
        <div>
            <span>Input Size: </span>
            <input value={size} type="number" onChange={e => inputSize(e.target.value)}></input>
        </div>
    );
}

export default CounterSizeGenerator;