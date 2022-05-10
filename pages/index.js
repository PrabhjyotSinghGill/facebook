import Head from 'next/head'
import Image from "next/image"
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="fb.webp" />
        <title >Facebook</title>
      </Head>
      {/*Header */}
      <Header></Header>
      <main>
        {/*Sidebar*/}
        {/*Feed*/}
        {/*Widgets*/}
      </main>
    </div>
  )
}
