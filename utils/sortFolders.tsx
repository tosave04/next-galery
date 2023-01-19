import { ImageType } from "@/types/ImageType"

export default function sortFolders(images: ImageType[]) {
	// fonction qui groupe les folders pour en afficher la liste
	const folders = images.reduce((acc, image) => {
		if (!acc.includes(image.folder)) acc.push(image.folder)
		return acc
	}, [] as string[])
	return folders
}
