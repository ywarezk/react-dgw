import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 pl-0 pr-0">
                        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                            <Link href="/">
                                <a class="navbar-brand text-light">Server Side Rendering</a>
                            </Link>

                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item">
                                    <Link href="/tasks">
                                        <a className="nav-link text-light">
                                            Todo list
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="row justify-content-center mt-5">
                    <div className="col-3">
                        <Component {...pageProps} />
                    </div>
                </div>
            </div>
            
        </>
    )
}