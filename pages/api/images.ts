import getAllFolders from "@/lib/getAllFolders"
import getFolderFiles from "@/lib/getFolderFiles"
import type { NextApiRequest, NextApiResponse } from "next"
import type { File } from "@/types/File"

export default function handler(req: NextApiRequest, res: NextApiResponse<File[]>) {
	const category = req.query.cat as string
	const folders = getAllFolders().map((folder) => folder.folder)

	// Si la catégorie n'existe pas, on retourne un tableau vide
	if (!folders.includes(category)) return res.status(200).json([])

	const files = getFolderFiles(category)

	// Si la catégorie n'a pas de fichiers, on retourne un tableau vide
	if (!files) return res.status(200).json([])

	res.status(200).json(files)
}
