import GalerieImage from "./GalerieImage"
import type { File } from "@/types/File"
import style from "./Galerie.module.css"

export default function Galerie({ images }: { images: File[] }) {
	return (
		<section className={style.grille}>
			{images.map((image, index) => (
				<GalerieImage key={index} image={image} />
			))}
		</section>
	)
}
