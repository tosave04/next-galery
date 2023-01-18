import { headers } from "next/headers"
import Picture from "./Picture"
import getImages from "@/lib/getImages"
import sortImagesByRows from "@/utils/sortImagesByRows"
import style from "./galerie.module.css"

export default function Galerie() {
	const headersList = headers()
	const images = getImages()

	return (
		<>
			<section className={style.grille}>
				{sortImagesByRows(images, 6).map((images, index) => (
					<div key={index} className={style.colonne}>
						{images.map((image, index) => image && <Picture key={index} image={image} />)}
					</div>
				))}
			</section>
		</>
	)
}
