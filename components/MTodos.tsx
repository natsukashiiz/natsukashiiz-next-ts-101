export interface TODO {
    id: string;
    content: string;
    completed: boolean;
}

interface MTodosProps {
    todos: TODO[];
    edit: (todo: TODO) => void;
}

export default function MTodos({ todos, edit }: MTodosProps) {
    return <>
        <ul>
            {todos.map(todo => <li key={todo.id}>{todo.content}-[{todo.completed ? `💯` : `❎`}]({todo.id}).<span onClick={() => edit(todo)} style={{ cursor: 'pointer' }}>✏️</span></li>)}
        </ul>
    </>;
}; 