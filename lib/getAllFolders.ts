import fs from "fs"
import type { Folder } from "@/types/Folder"

export default function getAllFolders(): Folder[] {
	const folder = process.env.NEXT_PUBLIC_FOLDER as string
	const folderName = `./public/${folder}`
	const publicFolder = `${process.env.NEXT_PUBLIC_URL}/${folder}`

	if (!fs.existsSync(folderName)) return []

	const folders = fs
		.readdirSync(folderName)
		.map((folder) => {
			const path = `${process.env.NEXT_PUBLIC_URL}/categorie/${folder}`
			const thumb = fs
				.readdirSync(`${folderName}/${folder}`)
				.filter((file) => file.match(/\.(jpg|jpeg|png|gif)$/i) !== null)
				.pop()
			if (!thumb) return undefined
			return { folder, thumb: `${publicFolder}/${folder}/${thumb}`, path }
		})
		.filter((folder) => folder !== undefined)

	return folders as Folder[]
}
