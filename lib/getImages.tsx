import "server-only"

import fs from "fs"
import type { ImageType } from "@/types/ImageType"

const getImages = (): ImageType[] => {
	const folderName = "./public/images"
	const publicFolder = "/images"

	if (!fs.existsSync(folderName)) return []

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

	// const res = await fetch(process.env.URL + "/api/images", { cache: "no-store" })
	// if (!res.ok) throw new Error("Failed to fetch data")

	return files
}

export default getImages
