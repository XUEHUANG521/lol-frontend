import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "POST") {
		return res.status(405).send({ message: "Only POST requests allowed" });
	}

	const { gameName, tagLine, region } = req.body;

	try {
		const response = await axios.post("api/summoner/by-riot-id", { gameName, tagLine, region });
		const data = await response.data;
		res.status(200).json(data);
	} catch (error) {
		console.error(error);
		res.status(500).send({ message: "Internal server error" });
	}
}