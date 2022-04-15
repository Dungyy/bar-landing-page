import Head from 'next/head'
import Hero from '../components/Hero/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dungys Liquor</title>
        <meta name="description" content="ABOUT DUNGYS LIQUOR" />
      </Head>
      <Hero />

    </div>
  )
}
