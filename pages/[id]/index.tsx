import axios from 'axios'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import BgImages from '../../components/BgImages'
import CreatorsRing from '../../components/CreatorsRing'
import DazedText from '../../components/DazedText'
import NavArrowIcon from '../../components/NavArrowIcon'
import { Profile } from '../../helpers/interface'

const getProfile = async (handle: string) => {
  const { data } = await axios.get(`/api/profile`, { params: { handle } })
  return data
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const handle = query.id

  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['profile', handle], () =>
    getProfile(handle as string)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const Id: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  const { data, isLoading } = useQuery<{
    data: {
      profile: Profile
    }
  }>(['profile', id], () => getProfile(id as string))

  console.log(data)

  if (isLoading || !data) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <DazedText className="scale-[0.5]">Loading...</DazedText>
      </div>
    )
  }

  return (
    <div className='w-full bg-[url("/images/bg-dark.svg")] bg-fixed bg-no-repeat relative bg-cover'>
      <BgImages hideArrow hideDiamond />
      <div className="h-screen w-full flex items-center justify-center relative">
        <button onClick={() => router.back()} className="font-bold text-sm flex items-center gap-2 bg-[#F290E7] px-4 py-2 rounded-full absolute top-10 left-10">
          <NavArrowIcon className="w-6 h-6" direction="prev" />
          Back
        </button>
        <div>
          <CreatorsRing image={data.data.profile.picture.original.url} />
        </div>
      </div>
    </div>
  )
}

export default Id