import React from "react";
import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator";
import { useSelector } from "react-redux";
import CounterGroupSum from "./CounterGroupSum";


function MultipleCounter() {
    const counterList = useSelector(state => state.counter.counterList);

    return (
        <div>
            <CounterSizeGenerator />
            <CounterGroupSum sum={counterList.reduce((prev, count) => prev + count, 0)} />
            <CounterGroup counterList={counterList} />
        </div>
    );
}

export default MultipleCounter;
