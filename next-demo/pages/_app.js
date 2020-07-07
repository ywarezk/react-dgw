/**
 * This component Next will use to wrap
 * the components in the pages directory
 */

import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import '../styles/main.scss';
import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps}) {
    return (
        <div>
            <Header />

                <Component {...pageProps} />

            <Footer />
        </div>
    )
}