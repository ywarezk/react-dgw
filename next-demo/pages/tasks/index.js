/**
 * /tasks/
 * we want to display the list of tasks
 * https://nztodo.herokuapp.com/api/task/?format=json
 */

export default function TaskList({tasks}) {
    return (
        <div>
            <h1>The list of tasks will be here</h1>

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
        </div>
    )
}

// 1. do we need static?
// 2. do we need SSR?

// 1.
// 
// export async function getStaticProps() {
//     const res = await fetch('https://nztodo.herokuapp.com/api/task/?format=json');
//     const tasks = await res.json();
//     return {
//         props: {
//             tasks
//         }
//     }
// }

// 2.
export async function getServerSideProps() {
    const res = await fetch('https://nztodo.herokuapp.com/api/task/?format=json');
    const tasks = await res.json();
    return {
        props: {
            tasks
        }
    }
}