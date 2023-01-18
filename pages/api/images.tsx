import type { NextApiRequest, NextApiResponse } from "next"
import fs from "fs"
import type { ImageType } from "@/types/ImageType"

export default function handler(req: NextApiRequest, res: NextApiResponse<ImageType[]>) {
	const folderName = "./public/images"
	const publicFolder = "/images"

	if (!fs.existsSync(folderName)) {
		res.status(200).json([])
		return
	}

	let index = 0
	const files = fs
		.readdirSync(folderName)
		.map((folder) => {
			const files = fs.readdirSync(`${folderName}/${folder}`)
			return files.map((file) => {
				return {
					id: index++,
					folder: folder,
					name: file,
					path: `${publicFolder}/${folder}/${file}`,
				}
			})
		})
		.flat()

	res.status(200).json(files)
}
