import React from "react";
function Counter({ increase, decrease,count }) {
 
    return (
        <div>
            <button onClick={increase}>+</button>
            <span>{count}</span>
            <button onClick={decrease}>-</button>
        </div>
    );
}

export default Counter;
