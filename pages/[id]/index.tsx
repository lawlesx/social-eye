import axios from 'axios'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import DazedText from '../../components/DazedText'
import { Profile } from '../../helpers/interface'

const getProfile = async (handle: string) => {
  const { data } = await axios.get(`/api/profile`, { params: { handle } })
  return data
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const handle = query.id

  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['profile', handle], () => getProfile(handle as string))

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
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

  if (isLoading) {
    return <div className='h-screen w-full flex items-center justify-center'>
      <DazedText className='scale-[0.5]'>Loading...</DazedText>
    </div>
  }

  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <DazedText className='scale-[0.5]'>Loading...</DazedText>
    </div>
  )
}

export default Id