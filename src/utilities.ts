import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";

export async function allowCors(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });
}

export default async function newsApiHandler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
  path: string
) {
  const API_KEY = process.env.NEWS_API_KEY;

  const params = {
    apiKey: API_KEY,
    ...(req.query || {}),
  };

  void (await allowCors(req, res));

  try {
    const { data } = await axios.get(`https://newsapi.org/v2/${path}`, {
      params,
    });
    res.status(200).json(data);
  } catch (err: any) {
    const errorData = err?.response.data;
    res.status(500).json(errorData || { error: "failed to load data" });
  }
}
