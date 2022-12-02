import Head from 'next/head'
import Image from 'next/image'
import DazedText from '../components/DazedText'

export default function Home() {
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
      <div className='w-full h-screen flex flex-col items-center gap-10 justify-center'>
        <div className='w-40 h-40 relative'>
          <Image src="/images/eye.svg" alt="Eye" fill style={{ objectFit: 'contain' }} />
        </div>
        {/* <h1 className='text-[8rem] text-[#36028F]'>Social Eye</h1> */}
        <DazedText>Social Eye</DazedText>
      </div>
    </div>
  )
}
