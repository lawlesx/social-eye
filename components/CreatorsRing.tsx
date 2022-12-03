/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react'

const CreatorsRing: FC<{ image: string }> = ({ image }) => {
  const imageUrl = 'https://ipfs.io/ipfs/' + image.split('//')[1]

  return (
    <div className='relative'><svg className="w-40 h-40" viewBox="0 0 154 154" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g style={{ mixBlendMode: 'hard-light' }} filter="url(#filter0_f_38_433)">
        <circle cx="77" cy="77" r="60" fill="#8F00FF" fill-opacity="0.263" />
      </g>
      <g style={{ mixBlendMode: 'hard-light' }} filter="url(#filter1_f_38_433)">
        <circle cx="77" cy="77" r="48.6458" stroke="#CC00FF" stroke-width="2.70833" />
      </g>
      <g style={{ mixBlendMode: 'hard-light' }} filter="url(#filter2_f_38_433)">
        <circle cx="77" cy="77" r="48.2292" stroke="#CC00FF" stroke-width="3.54167" />
      </g>
      <g style={{ mixBlendMode: 'hard-light' }} filter="url(#filter3_ddi_38_433)">
        <circle cx="77" cy="77" r="48.6458" stroke="#6100FF" stroke-opacity="0.2" stroke-width="2.70833" />
      </g>
      <g filter="url(#filter4_f_38_433)">
        <circle cx="77" cy="77" r="49.1667" stroke="#C882FF" stroke-width="1.66667" />
      </g>
      <g filter="url(#filter5_f_38_433)">
        <circle cx="77" cy="77" r="49.5833" stroke="white" stroke-width="0.833333" />
      </g>
      <defs>
        <filter id="filter0_f_38_433" x="0.5625" y="0.5625" width="152.875" height="152.875" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="8.21875" result="effect1_foregroundBlur_38_433" />
        </filter>
        <filter id="filter1_f_38_433" x="10.5625" y="10.5625" width="132.875" height="132.875" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="8.21875" result="effect1_foregroundBlur_38_433" />
        </filter>
        <filter id="filter2_f_38_433" x="21.5208" y="21.5208" width="110.958" height="110.958" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="2.73958" result="effect1_foregroundBlur_38_433" />
        </filter>
        <filter id="filter3_ddi_38_433" x="19.8771" y="25.3562" width="114.246" height="114.246" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="2.70833" />
          <feGaussianBlur stdDeviation="1.04167" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.055 0 0 0 0 0 0 0 0 0 0.082 0 0 0 0.7 0" />
          <feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow_38_433" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="5.47917" />
          <feGaussianBlur stdDeviation="3.56146" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.514 0 0 0 0 0 0 0 0 0 0.756 0 0 0 1 0" />
          <feBlend mode="color-dodge" in2="effect1_dropShadow_38_433" result="effect2_dropShadow_38_433" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_38_433" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="-0.270833" dy="0.541667" />
          <feGaussianBlur stdDeviation="0.135417" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0" />
          <feBlend mode="normal" in2="shape" result="effect3_innerShadow_38_433" />
        </filter>
        <filter id="filter4_f_38_433" x="26.5833" y="26.5833" width="100.833" height="100.833" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="0.208333" result="effect1_foregroundBlur_38_433" />
        </filter>
        <filter id="filter5_f_38_433" x="26.7222" y="26.7222" width="100.556" height="100.556" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="0.138889" result="effect1_foregroundBlur_38_433" />
        </filter>
      </defs>
    </svg>
      <div className='w-full h-full flex items-center justify-center absolute top-0'>
        <div className='w-1/2 h-1/2 border-8 border-[#D2F916] rounded-full relative overflow-hidden'>
          <img src={imageUrl} alt='Profile' style={{ objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  )
}

export default CreatorsRing