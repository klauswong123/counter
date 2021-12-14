import { useState } from "react";
import { useDispatch } from "react-redux";
import { RESET } from "../redux/constants.js";
function CounterSizeGenerator(props){
    const [size, setSize] = useState(0);
    const dispatch = useDispatch();
    function inputSize(value){
        if (value>=0){
            setSize(value);
            props.updateSize(parseInt(value));
            dispatch({type: RESET})
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