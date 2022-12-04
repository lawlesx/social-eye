import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { Profile } from '../../helpers/interface'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Profile | { error: string }>
) => {
  if (req.method !== 'GET') {
    res.status(405).end()
    return
  }

  try {
    const { address } = req.query
    console.log('Address', address)

    const query = `{
      following(request: {address: "${address}", limit: 10 }) {
        items {
          profile {
            id
            name
            bio
            handle
            picture {
              ... on NftImage {
                contractAddress
                tokenId
                uri
                verified
              }
              ... on MediaSet {
                original {
                  url
                  width
                  height
                  mimeType
                }
              }
            }
            ownedBy
            stats {
              totalFollowers
              totalFollowing
            }
          }
        }
        pageInfo {
          prev
          next
          totalCount
        }
      }
    }`

    const response = await axios
      .post('https://api.lens.dev/', {
        query,
      })
      .then((res) => res.data)

    return res.status(200).json(response)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'Unxpected error occured' })
  }
}

export default handler
