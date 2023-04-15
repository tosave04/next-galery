"use client"

import Link from "next/link"
import Image from "next/image"
import type { File } from "@/types/File"
import style from "./Galerie.module.css"

export default function GalerieImage({ image }: { image: File }) {
	const handleOnClick = () => null

	const MyImage = () => (
		<Link href={image.path} target={"_blank"}>
			<Image
				className={style.image}
				src={image.path}
				blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA"
				width={256}
				height={256}
				quality={60}
				alt={image.name}
				onClick={handleOnClick}
			/>
		</Link>
	)

	return <MyImage />
}
