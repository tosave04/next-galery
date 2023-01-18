import React from "react"
import Image from "next/image"
import type { ImageType } from "@/types/ImageType"

export default function Picture({ image }: { image: ImageType }) {
	return <Image src={image.path} width={400} height={400} alt={image.name} />
}
