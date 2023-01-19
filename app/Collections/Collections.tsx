import Image from "next/image"
import getAllFiles from "@/lib/getAllFiles"
import sortFolders from "@/utils/sortFolders"
import style from "./Collections.module.css"
import type { ImageType } from "@/types/ImageType"

const getFolders = async () => {
	const files = getAllFiles("images") as ImageType[]
	return sortFolders(files).map((folder) => ({
		folder,
		thumb: files.find((image) => image.folder === folder)?.path ?? "",
	}))
}

export default async function Collections() {
	const folders = await getFolders()

	return (
		<section className={style.collections}>
			{folders.map(({ folder, thumb }, index) => (
				<div key={index} className={`${style.card} group`}>
					<Image
						className={`${style.image} group-hover:opacity-100`}
						src={thumb}
						fill={true}
						sizes="30%"
						quality={50}
						alt={folder}
					/>
					<div className={style.title}>
						<span>{folder}</span>
					</div>
				</div>
			))}
		</section>
	)
}
