import Image from "next/image"
import getAllFiles from "@/lib/getAllFiles"
import sortFolders from "@/utils/sortFolders"
import style from "./Collections.module.css"
import type { ImageType } from "@/types/ImageType"
import Link from "next/link"

const getFolders = async () => {
	const files = getAllFiles("images") as ImageType[]
	return sortFolders(files).map((folder) => ({
		folder,
		thumb: files.find((image) => image.folder === folder)?.path ?? "",
		path: `${process.env.NEXT_PUBLIC_URL}/categorie/${folder}`,
	}))
}

export default async function Collections({ categorie }: { categorie?: string }) {
	const folders = await getFolders()

	return (
		<section className={style.collections}>
			{folders.map(({ folder, thumb, path }, index) => (
				<Link
					key={index}
					className={`group ${style.card} ${categorie === folder ? style.active : ""}`}
					href={`${path}`}
				>
					<Image
						className={`${style.image} group-hover:opacity-100`}
						src={thumb}
						fill={true}
						sizes="30%"
						quality={50}
						alt={folder}
						priority={true}
					/>
					<div className={style.title}>
						<span>{folder}</span>
					</div>
				</Link>
			))}
		</section>
	)
}
