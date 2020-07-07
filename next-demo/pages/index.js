import Head from 'next/head'
import Header from '../components/layout/Header/Header'
import Footer from '../components/layout/Footer/Footer'
import { useEffect } from 'react'
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    console.log(window.document.getElementById);
  }, []);

  return (
    <div className="container">
      <Link href="/tasks">
        <a>
          Tasks
        </a>
      </Link>
      <h1>
        Hello world
      </h1>

      <img src="/img/vercel.svg" />
    </div>
  )
}
