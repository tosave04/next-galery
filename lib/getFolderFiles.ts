import fs from "fs"
import type { File } from "@/types/File"

export default function getFolderFiles(folder: string): File[] {
	const folderName = `./public/${process.env.NEXT_PUBLIC_FOLDER}/${folder}`
	const publicFolder = `${process.env.NEXT_PUBLIC_URL}/${process.env.NEXT_PUBLIC_FOLDER}/${folder}`

	if (!fs.existsSync(folderName)) return []

	let index = 0
	const files = fs
		.readdirSync(folderName)
		.filter((file) => file.match(/\.(jpg|jpeg|png|gif)$/i) !== null)
		.map((file) => {
			return {
				id: index++,
				folder: folder,
				name: file,
				path: `${publicFolder}/${file}`,
			}
		})

	return files
}
