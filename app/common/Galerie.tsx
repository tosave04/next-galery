import Image from "next/image"
import type { File } from "@/types/File"
import style from "./Galerie.module.css"

export default function Galerie({ images }: { images: File[] }) {
	return (
		<section className={style.grille}>
			{images.map((image, index) => (
				<Image
					key={index}
					className={style.image}
					src={image.path}
					width={256}
					height={256}
					quality={50}
					alt={image.name}
				/>
			))}
		</section>
	)
}
