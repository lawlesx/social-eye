import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(405).end()
    return
  }

  try {
    const query = `{
      nft(request: {ownerAddress: "0x54be3a794282c030b15e43ae2bb182e14c409c5e", limit: 10, chainIds: [1] }) {
        items {
            contractName
            contractAddress
            symbol
            tokenId
            owners {
              amount
              address
            }
            name
            description
            contentURI
            originalContent {
              uri
              metaType
            }
            chainId
            collectionName
            ercType
          }
          pageInfo {
            prev
            next
            totalCount
          }
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
