import Head from 'next/head'
import Image from 'next/image'
import React, { FC } from 'react'
import NavArrowIcon from '../components/NavArrowIcon'

const Nft: FC = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Social Eye | NFT</title>
        <meta name="description" content="NFTs of Lens Profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-1/4 bg-purple-400 border-b-4 border-black relative">
        <Image
          src="/images/cover.png"
          alt="Cover"
          fill
          style={{ objectFit: 'cover' }}
        />
        <button className="absolute font-bold text-sm flex items-center gap-2 mt-6 ml-6">
          <NavArrowIcon className="w-6 h-6" direction="prev" />
          Go back
        </button>
      </div>
    </div>
  )
}

export default Nft
