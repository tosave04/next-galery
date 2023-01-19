import getAllFiles from "@/lib/getAllFiles"
import type { NextApiRequest, NextApiResponse } from "next"
import type { ImageType } from "@/types/ImageType"

export default function handler(req: NextApiRequest, res: NextApiResponse<ImageType[]>) {
	const files = getAllFiles("images")

	if (!files) {
		res.status(200).json([])
		return
	}

	res.status(200).json(files)
}
