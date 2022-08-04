import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import Layout from "../components/layout"
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, height=device-height ,initial-scale=1, maximum-scale=5.0, minimum-scale=0.86"></meta>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Genos:wght@400;500;600&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
