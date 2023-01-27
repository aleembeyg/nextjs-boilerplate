// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getUsersRequest } from "@/services/user.service";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const response = await getUsersRequest();
    return res.status(200).json(response);
  } catch (e: any) {
    return res.status(e.code).json({});
  }
}
