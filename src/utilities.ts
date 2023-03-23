import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";


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
  