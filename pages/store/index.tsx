import Link from "next/link";
import { useState, ChangeEvent, useEffect } from "react";

export default function Store() {
    const intitCount = 0;
    const [count, setCount] = useState<number>(intitCount);

    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
    }
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setCount(Number(e.target.value));
    }

    useEffect(() => {
        console.log("Store: useEffect");
        return () => {
            console.log("Store: useEffect cleanup");
        };
    }, [count]);

    return <div>
        <h1>Store: [{count}]</h1>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button><br />
        <input type="number" name="count" id="count" value={count} onChange={handleChange} /><br />
        <Link href="/">Back to Home</Link>
    </div>;
}