import Image from "next/image"
import style from "./Collections.module.css"
import getAllFiles from "@/lib/getAllFiles"
import sortFolders from "@/utils/sortFolders"
import type { ImageType } from "@/types/ImageType"

const getFolders = async () => {
	const files = getAllFiles("images") as ImageType[]

	// Attendre 1 seconde
	await new Promise((resolve) => setTimeout(resolve, 1000))

	return sortFolders(files).map((folder) => ({
		folder,
		thumb: files.find((image) => image.folder === folder)?.path ?? "",
	}))
}

export default async function Collections() {
	const folders = await getFolders()

	return (
		<section className="grid grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-4">
			{folders.map(({ folder, thumb }, index) => (
				<div key={index} className={"bg-white"}>
					{folder}
					<Image src={thumb} width={400} height={400} quality={50} alt={folder} />
				</div>

				// <Image className={style.image} src={image.path} width={400} height={400} quality={50} alt={image.name} />

				// <div key={index} className={style.colonne}>
				// 	<h2 className={style.titre}>{folder.name}</h2>
				// 	{folder.images.map((image, index) => image && <Picture key={index} image={image} />)}
				// </div>
			))}
		</section>
	)
}
