import getRandomFiles from "@/lib/getRandomFiles"
import type { NextApiRequest, NextApiResponse } from "next"
import type { File } from "@/types/File"

export default function handler(req: NextApiRequest, res: NextApiResponse<File[]>) {
	const files = getRandomFiles(10)

	// Si la catégorie n'a pas de fichiers, on retourne un tableau vide
	if (!files) return res.status(200).json([])

	res.status(200).json(files)
}
