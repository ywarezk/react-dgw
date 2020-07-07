/**
 * /tasks/:hello
 */

import {useRouter} from 'next/router';
import { GetStaticPaths} from 'next';

export default function TaskItem({task}) {
    // const router = useRouter();

    return (
        <div>
            <h1>This is a single task {task.title}</h1>
        </div>
    )
}

export async function getStaticProps({params}) {
    const res = await fetch(`https://nztodo.herokuapp.com/api/task/${params.id}/?format=json`);
    const task = await res.json();
    return {
        props: {
            task
        }
    }
}

export async function getStaticPaths() {
    const res = await fetch(`https://nztodo.herokuapp.com/api/task/?format=json`);
    const tasks = await res.json();
    return {
        // paths: [
        //     {
        //         params: {
        //             id: 9855
        //         }
        //     },
        //     {
        //         params: {
        //             id: 9856
        //         }
        //     }
        // ],
        paths: tasks.map(singleTask => ({
            params: {
                id: singleTask.id.toString()
            }
        })),
        fallback: false
    }
}