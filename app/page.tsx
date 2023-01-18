import React from "react"
import styles from "./page.module.css"
import Galerie from "./galerie/Galerie"

export default function Home() {
	return (
		<main className={styles.main}>
			<Galerie />
		</main>
	)
}

const Cache = () => {}
