"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import type { Folder } from "@/types/Folder"
import style from "./Collections.module.css"

export default function CollectionsThumb({ folder }: { folder: string }) {
	const params = useParams()
	const infos: Folder = JSON.parse(folder)

	return (
		<Link
			className={`group ${style.card} ${decodeURI(params?.folder as string) === infos.folder ? style.active : ""}`}
			href={`${infos.path}`}
		>
			<Image
				className={`${style.image} group-hover:opacity-100`}
				src={infos.thumb}
				fill={true}
				sizes="30%"
				quality={50}
				alt={infos.folder}
				priority={true}
			/>
			<div className={style.title}>
				<span>{infos.folder}</span>
			</div>
		</Link>
	)
}
