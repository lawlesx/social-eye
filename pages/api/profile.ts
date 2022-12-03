import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Profile>
) {
  if (req.method !== 'GET') {
    res.status(405).end()
    return
  }

  try {
    const { handle } = req.query

    const res = await axios.get('').then((res) => res.data)

    return res.status(200).json(res)
  } catch (error) {
   console.log(error);
  }

  res.status(200).json({})
}

export interface Attribute {
  displayType?: any;
  traitType: string;
  key: string;
  value: string;
}

export interface Original {
  url: string;
  mimeType?: any;
}

export interface Picture {
  original: Original;
  __typename: string;
}

export interface Original2 {
  url: string;
  mimeType?: any;
}

export interface CoverPicture {
  original: Original2;
  __typename: string;
}

export interface Stats {
  totalFollowers: number;
  totalFollowing: number;
  totalPosts: number;
  totalComments: number;
  totalMirrors: number;
  totalPublications: number;
  totalCollects: number;
}

export interface Profile {
  id: string;
  name: string;
  bio: string;
  attributes: Attribute[];
  followNftAddress: string;
  metadata: string;
  isDefault: boolean;
  picture: Picture;
  handle: string;
  coverPicture: CoverPicture;
  ownedBy: string;
  dispatcher?: any;
  stats: Stats;
  followModule?: any;
}
