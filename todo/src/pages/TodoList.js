import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://nztodo.herokuapp.com/api/task/?format=json')
            .then(res => {
                return res.json()
            })  
            .then(tasks => setTodos(tasks))
    }, [])

    return (
        <ul>
            {
                todos.map(singleTask => (
                    <li key={singleTask.id}>
                        <Link to={`/tasks/${singleTask.id}`}>
                            {
                                singleTask.title
                            }
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}