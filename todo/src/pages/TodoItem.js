import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

export default function TodoItem() {
    const [task, setTask] = useState({})
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://nztodo.herokuapp.com/api/task/${id}/?format=json`)
            .then(res => res.json())
            .then(data => setTask(data));
    }, [id]);

    return (
        <div>
            <h1>
                {
                    task.title
                }
            </h1>
            <p>
                {
                    task.description
                }
            </p>
        </div>
    )
}