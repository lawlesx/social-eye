import React, { FC } from 'react'
import Image from 'next/image'

const BgImages: FC<{
  hideArrow?: boolean
  hideDiamond?: boolean
}> = ({ hideArrow, hideDiamond }) => {
  return (
    <div className='w-full h-screen absolute'>
      <Image
        src="/images/sun.svg"
        alt="Sun"
        width={200}
        height={200}
        className="absolute left-20"
      />
      <Image
        src="/images/gear.svg"
        alt="Gear"
        width={65}
        height={65}
        className="absolute left-0 top-40"
      />
      <Image
        src="/images/FallingStar.svg"
        alt="Falling Star"
        width={200}
        height={200}
        className="absolute left-0 bottom-10"
      />
      <Image
        src="/images/ColourfulFire.svg"
        alt="Colourful Fire"
        width={50}
        height={50}
        className="absolute right-[12rem] top-4"
      />
      {!hideArrow && <Image
        src="/images/ColorArrow.svg"
        alt="Color Arrow"
        width={80}
        height={80}
        className="absolute left-[17rem] top-[50%]"
      />}
      {!hideDiamond && <Image
        src="/images/GoldDiamond.svg"
        alt="Gold Diamond"
        width={65}
        height={65}
        className="absolute right-[20rem] top-[40%]"
      />}
      <Image
        src="/images/BlueYellowFluffy.svg"
        alt="Blue Yellow Fluffy"
        width={45}
        height={45}
        className="absolute right-[2rem] top-40"
      />
      <Image
        src="/images/dreams.svg"
        alt="Dreams"
        width={120}
        height={120}
        className="absolute right-[2rem] top-10"
      />
    </div>
  )
}

export default BgImages
