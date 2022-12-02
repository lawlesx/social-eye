import React, { FC, ReactNode } from 'react'

const DazedText: FC<{
  className?: string, children: ReactNode
}> = ({ className, children }) => {
  return (
    <div className={`relative ${className}`}>
      <h1 className='text-[8rem] text-[#D2F916] translate-y-6'>{children}</h1>
      <h1 className='text-[8rem] text-[#FF90E8] absolute top-4'>{children}</h1>
      <h1 className='text-[8rem] text-[#B18CEA] absolute top-2'>{children}</h1>
      <h1 className='text-[8rem] text-[#36028F] absolute top-0'>{children}</h1>
    </div>
  )
}

export default DazedText