import Head from 'next/head'
import Header from '../components/layout/Header/Header'
import Footer from '../components/layout/Footer/Footer'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    console.log(window.document.getElementById);
  }, []);

  return (
    <div className="container">
      <Header />

      <h1>
        Hello world
      </h1>

      <img src="/img/vercel.svg" />

      <Footer />
    </div>
  )
}
