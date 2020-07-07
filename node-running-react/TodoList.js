/**
 * create react component
 * fetch('https://nztodo.herokuapp.com/api/task/?format=json')
 * get array of elements
 * display them in ul-li
 */

import React from 'react';
import { renderToString } from 'react-dom/server';
import fetch from 'isomorphic-fetch';

function Todo({ tasks }) {
    return (
        <ul>
            {
                tasks.map(singleTask => (
                    <li key={singleTask.id}>
                        {
                            singleTask.title
                        }
                    </li>
                ))
            }
        </ul>
    )
}

fetch('https://nztodo.herokuapp.com/api/task/?format=json')
    .then(res => res.json())
    .then(tasks => {
        const html = renderToString(<Todo tasks={tasks} />);
        console.log(html);
    })

