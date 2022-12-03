/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react'

const FollowersRing: FC<{ image: string }> = ({ image }) => {
  const imageUrl = 'https://ipfs.io/ipfs/' + image.split('//')[1]

  return (
    <div className='relative'><svg className="w-[12rem] h-[12rem]" viewBox="0 0 200 200" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g style={{ mixBlendMode: 'hard-light' }} filter="url(#filter0_f_38_340)">
        <circle cx="100" cy="100" r="60" fill="#33E9C6" fill-opacity="0.119" />
      </g>
      <g style={{ mixBlendMode: 'hard-light' }} filter="url(#filter1_f_38_340)">
        <circle cx="100" cy="100" r="48.6458" stroke="#00A8A8" stroke-width="2.70833" />
      </g>
      <g style={{ mixBlendMode: 'hard-light' }} filter="url(#filter2_f_38_340)">
        <circle cx="100" cy="100" r="48.2292" stroke="#00A8A8" stroke-width="3.54167" />
      </g>
      <g style={{ mixBlendMode: 'hard-light' }} filter="url(#filter3_ddi_38_340)">
        <circle cx="100" cy="100" r="48.6458" stroke="#33E9C6" stroke-opacity="0.2" stroke-width="2.70833" />
      </g>
      <g filter="url(#filter4_f_38_340)">
        <circle cx="100" cy="100" r="49.1667" stroke="#33E9E9" stroke-width="1.66667" />
      </g>
      <g filter="url(#filter5_f_38_340)">
        <circle cx="100" cy="100" r="49.5833" stroke="white" stroke-width="0.833333" />
      </g>
      <defs>
        <filter id="filter0_f_38_340" x="25.125" y="25.125" width="149.75" height="149.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="7.4375" result="effect1_foregroundBlur_38_340" />
        </filter>
        <filter id="filter1_f_38_340" x="35.125" y="35.125" width="129.75" height="129.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="7.4375" result="effect1_foregroundBlur_38_340" />
        </filter>
        <filter id="filter2_f_38_340" x="45.0417" y="45.0417" width="109.917" height="109.917" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="2.47917" result="effect1_foregroundBlur_38_340" />
        </filter>
        <filter id="filter3_ddi_38_340" x="43.5542" y="48.5125" width="112.892" height="112.892" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="2.70833" />
          <feGaussianBlur stdDeviation="1.04167" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.3 0 0 0 0 0.275 0 0 0 0.7 0" />
          <feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow_38_340" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4.95833" />
          <feGaussianBlur stdDeviation="3.22292" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.6 0 0 0 0 0.6 0 0 0 1 0" />
          <feBlend mode="color-dodge" in2="effect1_dropShadow_38_340" result="effect2_dropShadow_38_340" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_38_340" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="-0.270833" dy="0.541667" />
          <feGaussianBlur stdDeviation="0.135417" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="shape" result="effect3_innerShadow_38_340" />
        </filter>
        <filter id="filter4_f_38_340" x="49.5833" y="49.5833" width="100.833" height="100.833" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="0.208333" result="effect1_foregroundBlur_38_340" />
        </filter>
        <filter id="filter5_f_38_340" x="49.7222" y="49.7222" width="100.556" height="100.556" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="0.138889" result="effect1_foregroundBlur_38_340" />
        </filter>
      </defs>
    </svg>
      <div className='w-full h-full flex items-center justify-center absolute top-0'>
        <div className='w-[4.8rem] h-[4.8rem] border-8 border-[#D3EBFD] rounded-full relative overflow-hidden'>
          <img src={imageUrl} alt='Profile' style={{ objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  )
}

export default FollowersRing