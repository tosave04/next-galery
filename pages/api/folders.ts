import getAllFolders from "@/lib/getAllFolders"
import type { NextApiRequest, NextApiResponse } from "next"
import type { Folder } from "@/types/Folder"

export default function handler(_: NextApiRequest, res: NextApiResponse<Folder[]>) {
	const folders = getAllFolders()

	// S'il n'y a pas de dossier, on retourne un tableau vide
	if (!folders) return res.status(200).json([])

	res.status(200).json(folders)
}
