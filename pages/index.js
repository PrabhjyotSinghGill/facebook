import Head from 'next/head'
import Image from "next/image"
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

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
        <Sidebar></Sidebar>
        {/*Feed*/}
        {/*Widgets*/}
      </main>
    </div>
  )
}
