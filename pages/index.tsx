import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import create from 'zustand'
import { useBearStore } from '../store/state'
import Input from '../components/input'

export default function Home() {
  const test = useBearStore((state) => state.bears)
  const increasePopulation = useBearStore((state) => state.increasePopulation)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{test}</h1>
      <button onClick={increasePopulation}></button>

      <Input />
    </div>
  )
}

