
import { useState, useEffect } from "react";
import Counter from "./counter";


function CounterGroup(props){
    const [counterList, setCounterList] = useState([]);
    
    useEffect(() => {
        const sizeMap = Array(parseInt(props.size)).fill(Date.now());
        setCounterList(sizeMap);
      }, [props.size]);
    return (
        <div>
            {counterList.map((item,index) => 
            <Counter  
                key={index}/>)}
        </div>
  );

}

export default CounterGroup;