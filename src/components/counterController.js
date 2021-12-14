import { useState } from "react";
import CounterSizeGenerator from "./counterSizeGenerator";
import CounterGroup from "./counterGroup";
import { useSelector } from "react-redux";


function CounterController(){
    const[size, setSize] = useState(0);
    const counter = useSelector((state) => state);
    function updateSize(value){
        setSize(value);
    }

    return(
        <div>
            <CounterSizeGenerator updateSize={updateSize}></CounterSizeGenerator>
            <CounterGroup size={size}></CounterGroup>
            <span>sum: {counter}</span>
        </div>
    );
}

export default CounterController;