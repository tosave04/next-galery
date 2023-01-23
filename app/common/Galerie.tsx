import Image from "next/image"
import getAllFiles from "@/lib/getAllFiles"
import sortImagesByRows from "@/utils/sortImagesByRows"
import getRandomElements from "@/utils/getRandomElements"
import style from "./Galerie.module.css"
import type { ImageType } from "@/types/ImageType"

const getImages = async (folder?: string) => {
	const files = getAllFiles("images") as ImageType[]
	return sortImagesByRows(
		folder ? files.filter((file) => file.folder === decodeURI(folder)) : getRandomElements(files, 50),
		6
	)
}

export default async function Galerie({ categorie }: { categorie?: string }) {
	const images = await getImages(categorie)

	return (
		<section className={style.grille}>
			{images.map((images, index) => (
				<div key={index} className={style.colonne}>
					{images.map(
						(image, index) =>
							image && (
								<Image
									key={index}
									className={style.image}
									src={image.path}
									width={256}
									height={256}
									quality={50}
									alt={image.name}
								/>
							)
					)}
				</div>
			))}
		</section>
	)
}
