"use client"

import React from "react"
import Image from "next/image"
import style from "./Galerie.module.css"
import type { ImageType } from "@/types/ImageType"

export default function Picture({ image }: { image: ImageType }) {
	return <Image className={style.image} src={image.path} width={400} height={400} quality={50} alt={image.name} />
}
