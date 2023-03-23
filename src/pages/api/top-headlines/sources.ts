// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import newsApiHandler from "@/utilities";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  newsApiHandler(req, res, "top-headlines/sources");
}
