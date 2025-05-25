
export default function TaskList({
    todos,

    onDeleteTodo,
}) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <Task
                        todo={todo}
                        onDelete={onDeleteTodo}
                    />
                </li>
            ))}
        </ul>
    );
}

function Task({ todo,  onDelete }) {

    let todoContent  = (
            <>
                {todo.title}
            </>
        );
 
    return (
        <label>
            {todoContent}
            <button onClick={() => onDelete(todo.id)}>
                Delete
            </button>
        </label>
    );
}