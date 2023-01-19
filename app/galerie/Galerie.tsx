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
	const images = getRandomElements(await getImages(), 20)

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

// Fonction qui retourne des éléments aléatoires d'un tableau
// https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
function getRandomElements<T>(arr: T[], n: number): T[] {
	const result = new Array(n)
	let len = arr.length
	const taken = new Array(len)
	if (n > len) throw new RangeError("getRandomElements: more elements taken than available")
	while (n--) {
		const x = Math.floor(Math.random() * len)
		result[n] = arr[x in taken ? taken[x] : x]
		taken[x] = --len in taken ? taken[len] : len
	}
	return result
}
