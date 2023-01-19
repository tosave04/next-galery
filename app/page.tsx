import React from "react"
import Collections from "./Collections/Collections"
import Galerie from "./Galerie/Galerie"
import Loading from "./loading"

export default function Home() {
	return (
		<>
			<React.Suspense fallback={<Loading />}>
				{/* @ts-expect-error Server Component */}
				<Collections />
			</React.Suspense>
			<React.Suspense fallback={<Loading />}>
				{/* @ts-expect-error Server Component */}
				<Galerie />
			</React.Suspense>
		</>
	)
}

const Cache = () => {}

// Si on utilise <Suspense> pour attendre le chargement d'un composant
// On peut corriger l'erreur "Server Component" en utilisant {/* @ts-expect-error Server Component */} ou <Cache>
