import { ImageType } from "@/types/ImageType"

const sortImagesByRows = (images: ImageType[], cols: number) => {
	const rows = Math.ceil(images.length / cols)
	return images.reduce((acc, image, index) => {
		const row = Math.floor(index / cols)
		const col = index % cols
		acc[col][row] = image
		return acc
	}, Array.from({ length: cols }, () => Array.from({ length: rows })) as ImageType[][])
}

export default sortImagesByRows
