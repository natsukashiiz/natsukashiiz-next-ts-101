import MTodos, { TODO } from "@/components/MTodos";
import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export default function Todos() {
    const initTodo: TODO = { id: "?", content: "", completed: false };
    const [todo, setTodo] = useState<TODO>(initTodo);
    const [todos, setTodos] = useState<TODO[]>([]);
    const [update, setUpdate] = useState<boolean>(false);

    function clear() {
        setTodo({
            ...initTodo
        });
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (update) {
            setTodos(todos.map(t => t.id === todo.id ? todo : t));
            setUpdate(false);
        } else {
            console.log("create");
            setTodos([...todos, todo]);
        }
        clear();
    }

    function handleContentChange(e: ChangeEvent<HTMLInputElement>) {
        setTodo({
            ...todo,
            content: e.target.value
        });
    }

    function handleCompleteChange(e: ChangeEvent<HTMLInputElement>) {
        setTodo({
            ...todo,
            completed: e.target.checked
        });
    }

    function handleEdit(todo: TODO) {
        setUpdate(true);
        setTodo({
            ...todo
        });
    }

    useEffect(() => {
        setTodo({
            ...todo,
            id: uuidv4()
        });
    }, [todos]);

    return (
        <>
            <h1>Todos</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                {update ? <>id: {todo.id}<br /></> : ''}
                content: <input type="text" name="content" id="content" value={todo.content} onChange={handleContentChange} /><br />
                completed: <input type="checkbox" name="completed" id="completed" checked={todo.completed} onChange={handleCompleteChange} /><br />
                <button type="submit">Save</button>
            </form>
            <hr />
            <MTodos todos={todos} edit={handleEdit} />
        </>
    );
};