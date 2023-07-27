import { PROJECTS } from '@/data/constant';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProjectItem[]>
) {
  res.status(200).json(PROJECTS);
}
