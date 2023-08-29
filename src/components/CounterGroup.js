import React from "react";
import Counter from "./Counter";
import { useDispatch } from "react-redux";
import {updateCount} from './counterSlice'

function CounterGroup({ counterList }) {
    const dispatch = useDispatch()
    const handleConstChange = (index,diff) =>()=> {
        const newList = [...counterList]
        newList[index] += diff;
        dispatch(updateCount(newList));
    }
 return (
        <div>
            {counterList.map((count, index) => (
                <Counter key={index} 
                count={count} 
                index={index} 
                increase= {handleConstChange(index, 1)}
                decrease= {handleConstChange(index, -1)}/>
            ))}
        </div>
    );
}    
export default CounterGroup;
