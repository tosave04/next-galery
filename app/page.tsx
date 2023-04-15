import Galerie from "./common/Galerie"
import type { File } from "@/types/File"

export default async function Home() {
	// return <pre>{JSON.stringify(folders, null, 1)}</pre>

	// On récupère dynamiquement la liste des fichiers
	const images: File[] = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/random`, {
		cache: "no-store",
	}).then((res) => res.json())

	return <Galerie images={images} />
}
