import Head from 'next/head'
// import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full bg-[url("/images/bg.svg")] bg-fixed bg-no-repeat'>
      <Head>
        <title>Social Eye</title>
        <meta
          name="description"
          content="Social graph based on Lens protocol"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className='w-full h-full fixed top-0' style={{ zIndex: -1 }}>
        <Image
          src="/images/noise.png"
          alt="noise"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div> */}
      <h1 className="text-fuchsia-300 text-[10rem] font-black z-10">Social Eye</h1>
      <h1 className="text-fuchsia-300 text-[10rem] font-black">Social Eye 2</h1>
      <h1 className="text-fuchsia-300 text-[10rem] font-black">Social Eye 3</h1>
      <h1 className="text-fuchsia-300 text-[10rem] font-black">Social Eye 4</h1>
      <h1 className="text-fuchsia-300 text-[10rem] font-black">Social Eye 5</h1>
      <h1 className="text-fuchsia-300 text-[10rem] font-black">Social Eye 6</h1>
      <h1 className="text-fuchsia-300 text-[10rem] font-black">Social Eye 7</h1>
      <h1 className="text-fuchsia-300 text-[10rem] font-black">Social Eye 8</h1>
    </div >
  )
}
