import React from "react"
import "./globals.css"
// import { Providers } from "./providers"
import Ban from "./layout/Ban"
import Navbar from "./layout/Navbar"
import Sidebar from "./layout/Sidebar"
import UpButton from "./layout/UpButton"

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="fr">
			<head />
			<body>
				{/* <Providers> */}
				<Sidebar />
				<main>
					<Navbar />
					{/* <Ban /> */}
					{children}
				</main>
				<UpButton />
				{/* </Providers> */}
			</body>
		</html>
	)
}

// Si on utilise <Suspense> pour attendre le chargement d'un composant
// On peut corriger l'erreur "Server Component" en utilisant {/* @ts-expect-error Server Component */} ou <Cache>
