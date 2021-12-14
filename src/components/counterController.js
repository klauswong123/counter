import { useState } from "react";
import CounterSizeGenerator from "./counterSizeGenerator";
import CounterGroup from "./counterGroup";
function CounterController(){
    const[size, setSize] = useState(0);
    const[sum, setSum] = useState(0);
    function updateSize(value){
        setSize(value);
        setSum(0);
    }
    function updateSum(value){
        setSum(value);
    }

    return(
        <div>
            <CounterSizeGenerator updateSize={updateSize}></CounterSizeGenerator>
            <CounterGroup size={size} updateSum={updateSum}></CounterGroup>
            <span>sum: {sum}</span>
        </div>
    );
}

export default CounterController;