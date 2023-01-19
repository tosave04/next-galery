import React from "react"
import useSWR from "swr"
import sortImagesByRows from "@/utils/sortImagesByRows"
import type { ImageType } from "@/types/ImageType"

export const GallerieContext = React.createContext<GallerieType>({} as GallerieType)

export default function GallerieProvider({ children }: { children: React.ReactNode }) {
	// Gestion de la liste des images
	const fetcher = (url: string) => fetch(url).then((res) => res.json())
	const { data: images, error, isLoading } = useSWR<ImageType[]>("/api/images", fetcher)

	return (
		<GallerieContext.Provider value={{ images: sortImagesByRows(images ?? [], 6), error, isLoading }}>
			{children}
		</GallerieContext.Provider>
	)
}

type GallerieType = {
	images: ImageType[][]
	error: any
	isLoading: boolean
}
