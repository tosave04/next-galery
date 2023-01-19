import React from "react"
import styles from "./page.module.css"
import Collections from "./Collections/Collections"
import Galerie from "./Galerie/Galerie"
import Loading from "./loading"

export default function Home() {
	return (
		<main className={styles.main}>
			<React.Suspense fallback={<Loading />}>
				{/* @ts-expect-error Server Component */}
				<Collections />
			</React.Suspense>
			<Galerie />
		</main>
	)
}

const Cache = () => {}

// Si on utilise <Suspense> pour attendre le chargement d'un composant
// On peut corriger l'erreur "Server Component" en utilisant {/* @ts-expect-error Server Component */} ou <Cache>
