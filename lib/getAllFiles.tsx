import fs from "fs"
import type { ImageType } from "@/types/ImageType"

export default function getAllFiles(folder: string): ImageType[] | false {
	const folderName = `./public/${folder}`
	const publicFolder = `${process.env.NEXT_PUBLIC_URL}/${folder}`

	if (!fs.existsSync(folderName)) return false

	let index = 0
	const files = fs
		.readdirSync(folderName)
		.map((folder) => {
			const files = fs.readdirSync(`${folderName}/${folder}`)
			return files
			.filter((file) => file.endsWith(".jpg") || file.endsWith(".png"))
			.map((file) => {
				return {
					id: index++,
					folder: folder,
					name: file,
					path: `${publicFolder}/${folder}/${file}`,
				}
			})
		})
		.flat()

	return files
}
