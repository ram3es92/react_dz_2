import { useState } from 'react';
import AddTodo from './components/AddTodo.js';
import TaskList from './components/TaskList.js';

let nextId = 3;
const initialTodos = [
    { id: 0, title: 'Коммент 1'},
    { id: 1, title: 'Коммент 2'},
    { id: 2, title: 'Коммент 3' },
];

export default function TaskApp() {
    const [todos, setTodos] = useState(initialTodos);

    function handleAddTodo(title) {
        setTodos([
            ...todos,
            {
                id: nextId++,
                title: title,
            },
        ]);
    }


    function handleDeleteTodo(todoId) {
        setTodos(todos.filter((t) => t.id !== todoId));
    }

    return (
        <>
            <AddTodo onAddTodo={handleAddTodo} />
            <TaskList
                todos={todos}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
}