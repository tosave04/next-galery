import Image from "next/image"
import getAllFiles from "@/lib/getAllFiles"
import sortImagesByRows from "@/utils/sortImagesByRows"
import style from "./Galerie.module.css"
import type { ImageType } from "@/types/ImageType"

const getImages = async () => {
	const files = getAllFiles("images") as ImageType[]
	return sortImagesByRows(files, 6)
}

export default async function Galerie() {
	const images = await getImages()

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
									width={400}
									height={400}
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
