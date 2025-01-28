import { useState } from "react";

export default function MyCounterButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <>
            <h2>Counter</h2>
            <button onClick={handleClick}>Count: {count}</button>
        </>
    );
}