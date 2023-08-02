import { useState } from "react"
import './Counter.scss'

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
    )
}