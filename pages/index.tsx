import Head from 'next/head'
import Image from 'next/image'
import DazedText from '../components/DazedText'
import { useState } from 'react'
import Link from 'next/link'
import BgImages from '../components/BgImages'

export default function Home() {
  const [handle, setHandle] = useState('')

  return (
    <div className='w-full'>
      <Head>
        <title>Social Eye</title>
        <meta
          name="description"
          content="Social graph based on Lens protocol"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BgImages />
      <div className='w-full h-screen flex flex-col items-center gap-4 justify-start pt-10 relative'>
        <div className='w-[15rem] h-[15rem] relative'>
          <Image src="/images/eye.svg" alt="Eye" fill style={{ objectFit: 'contain' }} />
        </div>
        <DazedText>Social Eye</DazedText>
        <p className='font-light text-2xl w-2/3 text-center text-gray-800 py-4'>{`Would you like to know how you can visualize your connections? Well, now you can. It's as simple as entering your Len's ID.`}</p>
        <div className='w-3/5 h-14 rounded-full flex items-center justify-between border-2 border-black my-4'>
          <input onChange={(e) => setHandle(e.target.value)} className='outline-none h-full font-light text-gray-600 text-2xl placeholder:text-gray-500 w-full bg-transparent px-8' placeholder='e.g adam.lens' />
          <Link href={`/${handle}`} className='w-1/3 flex items-center justify-center h-full bg-[#B39AFF] text-black font-normal hover:bg-[#a384fe] hover:text-white transition-colors ease-in-out text-xl rounded-full outline outline-2 outline-black'>Search</Link>
        </div>
      </div>
    </div>
  )
}
