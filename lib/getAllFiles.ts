import fs from "fs"
import type { File } from "@/types/File"

export default function getAllFiles(): File[] | false {
	const folder = process.env.NEXT_PUBLIC_FOLDER as string
	const folderName = `./public/${folder}`
	const publicFolder = `${process.env.NEXT_PUBLIC_URL}/${folder}`

	if (!fs.existsSync(folderName)) return false

	let index = 0
	const files = fs
		.readdirSync(folderName)
		.map((folder) => {
			const files = fs.readdirSync(`${folderName}/${folder}`)
			return files
				.filter((file) => file.match(/\.(jpg|jpeg|png|gif)$/i) !== null)
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
