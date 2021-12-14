
import { useState, useEffect } from "react";
import Counter from "./counter";

function CounterGroup(props){
    const [total, setTotal] = useState(0);
    const [counterList, setCounterList] = useState([])

    useEffect(() => {
        const sizeMap = Array(parseInt(props.size)).fill(Date.now());
        setCounterList(sizeMap);
      }, [props.size]);

    function updateTotal(value){
        setTotal(parseInt(total)+parseInt(value));
        props.updateSum(parseInt(total)+parseInt(value)); 
    }

    return (
        <div>
            {counterList.map((item,index) => <Counter key={item+index} updateTotal={updateTotal}/>)}
        </div>
  );

}

export default CounterGroup;