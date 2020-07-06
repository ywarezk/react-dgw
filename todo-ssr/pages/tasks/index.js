import Link from 'next/link';

export default function Tasks({tasks}) {
    return (
        <ul className="list-group">
            {
                tasks.map(singleTask => 
                    <li className="list-group-item list-group-item-action p-0" key={singleTask.id}>
                        <Link href="/tasks/[id]" as={`/tasks/${singleTask.id}`}>
                            <a className="d-block p-3">
                                {
                                    singleTask.title
                                }
                            </a>

                        </Link>
                    </li>
                )
            }
        </ul>
    )
}

export async function getStaticProps(context) {
    const res = await fetch('https://nztodo.herokuapp.com/api/task/?format=json');
    const tasks = await res.json();
    return {
        props: {
            tasks
        }
    }
}