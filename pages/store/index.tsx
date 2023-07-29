import { RootState } from "@/store";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { decrement, increment, update } from "@/store/slice";
import Link from "next/link";

export default function Store(): JSX.Element {
    const counter = useAppSelector((state: RootState) => state.counter.value);
    const dispath = useAppDispatch();

    return <div>
        <h1>Store: [{counter}]</h1>
        <button onClick={() => dispath(decrement())}>-</button>
        <button onClick={() => dispath(increment())}>+</button><br />
        <input type="number" name="count" value={counter} onChange={(e) => dispath(update(Number(e.target.value)))} /><br />
        <Link href="/">Back to Home</Link>
    </div>;
}