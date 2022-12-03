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
      <div className="grid grid-cols-7 w-full h-3/4">
        {/* ------------------------------ Profile Image ----------------------------- */}
        <div className="col-span-2 flex flex-col items-center">
          <div className="w-[14rem] h-[18rem] rounded-xl border-4 border-black -translate-y-[5rem] relative overflow-hidden">
            <Image
              src="/images/profile.png"
              alt="Profile"
              fill
              style={{ objectFit: 'cover' }}
              className="scale-105"
            />
          </div>
        </div>
        <div className="col-span-5 flex flex-wrap items-start justify-center gap-14 py-14 w-2/3 mx-auto overflow-y-auto">
          {[0, 1, 2, 3].map((_, i) => (
            <div
              className="rounded-xl border-2 border-black w-[18rem] overflow-hidden"
              style={{ aspectRatio: '1/1' }}
              key={i}
            >
              <div className="w-full h-[85%] relative">
                <Image
                  src="/images/BoredApe.png"
                  alt="Bored Apes"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h1 className="w-full h-[15%] bg-[#C6C1FF] px-2 text-sm font-bold flex items-center border-t-2 border-black truncate">
                Invisible Friends{' '}
              </h1>
            </div>
          ))}
          <div className="flex items-center justify-between px-10 w-full">
            <button className="font-bold text-sm flex items-center gap-2 bg-[#F290E7] px-4 py-2 rounded-full">
              <NavArrowIcon className="w-6 h-6" direction="prev" />
              Previous
            </button>
            <button className="font-bold text-sm flex items-center gap-2 bg-[#F290E7] px-4 py-2 rounded-full">
              Next
              <NavArrowIcon className="w-6 h-6" direction="next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nft
