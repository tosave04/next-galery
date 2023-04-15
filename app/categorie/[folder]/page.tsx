import Galerie from "../../common/Galerie"
import type { File } from "@/types/File"

export default async function Categorie({ params }: { params: { folder: string } }) {
	// On récupère dynamiquement la liste des fichiers
	const images: File[] = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/images?cat=${params.folder}`, {
		cache: "no-store",
	}).then((res) => res.json())

	return <Galerie images={images} />
}
