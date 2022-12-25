import { PrismaClient } from '@prisma/client'
import { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <div className="container">
      <Head>
        <title>KDM Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Settlement Locations</h1>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const prisma = new PrismaClient()
  const settlementLocations = await prisma.settlementLocation.findMany()

  return {
    props: settlementLocations,
  }
}

export default Home
