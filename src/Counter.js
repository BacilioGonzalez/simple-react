import React from "react";
import { useCounter } from "./useCounter";

function Counter() {
    const { count, decrement, increment } = useCounter()

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
        }}>
            <div>
                <h1>Simple React App</h1>
                {(count >= 10) && <h2>Count is too high! 🙀</h2>}
                <p>Count: {count}</p>
                <button onClick={decrement}>Decrement</button>
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    );
}

export default Counter;
