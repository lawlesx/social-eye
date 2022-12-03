import Head from 'next/head'
import Image from 'next/image'
import DazedText from '../components/DazedText'
import { useState } from 'react'
import Link from 'next/link'

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
      <Image src="/images/sun.svg" alt="Sun" width={200} height={200} className="absolute left-20" />
      <Image src="/images/gear.svg" alt="Gear" width={65} height={65} className="absolute left-0 top-40" />
      <Image src="/images/FallingStar.svg" alt="Falling Star" width={200} height={200} className="absolute left-0 bottom-10" />
      <Image src="/images/ColourfulFire.svg" alt="Colourful Fire" width={50} height={50} className="absolute right-[12rem] top-4" />
      <Image src="/images/ColorArrow.svg" alt="Color Arrow" width={80} height={80} className="absolute left-[17rem] top-[55%]" />
      <Image src="/images/GoldDiamond.svg" alt="Gold Diamond" width={65} height={65} className="absolute right-[20rem] top-[40%]" />
      <Image src="/images/BlueYellowFluffy.svg" alt="Blue Yellow Fluffy" width={45} height={45} className="absolute right-[2rem] top-40" />
      <Image src="/images/dreams.svg" alt="Dreams" width={120} height={120} className="absolute right-[2rem] top-10" />
      <div className='w-full h-screen flex flex-col items-center gap-4 justify-start pt-10'>
        <div className='w-[15rem] h-[15rem] relative'>
          <Image src="/images/eye.svg" alt="Eye" fill style={{ objectFit: 'contain' }} />
        </div>
        <DazedText>Social Eye</DazedText>
        <p className='font-light text-2xl w-2/3 text-center text-gray-800 py-4'>Integer tincidunt amet integer nunc sit pellentesque urna vestibulum. Enim amet sit sagittis lacus.</p>
        <div className='w-3/5 h-14 rounded-full flex items-center justify-between border-2 border-black my-4'>
          <input onChange={(e) => setHandle(e.target.value)} className='outline-none h-full font-light text-gray-600 text-2xl placeholder:text-gray-500 w-full bg-transparent px-8' placeholder='e.g adam.lens' />
          <Link href={`/${handle}`} className='w-1/3 flex items-center justify-center h-full bg-[#B39AFF] text-black font-normal hover:bg-[#a384fe] hover:text-white transition-colors ease-in-out text-xl rounded-full outline outline-2 outline-black'>Search</Link>
        </div>
      </div>
    </div>
  )
}
