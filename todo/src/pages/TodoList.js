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
        <ul className="list-group">
            {
                todos.map(singleTask => (
                    <li className="list-group-item list-group-item-action p-0" key={singleTask.id}>
                        <Link className="d-block p-3 text-left" to={`/tasks/${singleTask.id}`}>
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