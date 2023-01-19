"use client"

import React from "react"
import Picture from "./Picture"
import style from "./Galerie.module.css"
import { GallerieContext } from "../providers/GallerieProvider"
import Loading from "../loading"

export default function Galerie() {
	const { images, error, isLoading } = React.useContext(GallerieContext)

	if (isLoading) return <Loading />
	if (error) return <div className="text-white">Une erreur est survenue !</div>

	return (
		<section className={style.grille}>
			{images.map((images, index) => (
				<div key={index} className={style.colonne}>
					{images.map((image, index) => image && <Picture key={index} image={image} />)}
				</div>
			))}
		</section>
	)
}
