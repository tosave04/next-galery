import { Suspense } from "react"
import "./globals.css"
import Sidebar from "./layout/Sidebar"
import Navbar from "./layout/Navbar"
// import Ban from "./layout/Ban"
import Collections from "./common/Collections"
import UpButton from "./layout/UpButton"
import type { Folder } from "@/types/Folder"
import Loading from "./loading"

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	// On récupère dynamiquement la liste des dossiers
	const folders: Folder[] = await fetch(process.env.NEXT_PUBLIC_URL + "/api/folders", { cache: "no-store" }).then(
		(res) => res.json()
	)

	return (
		<html lang="fr">
			<head />
			<body>
				<Sidebar />
				<main>
					<Navbar />
					{/* <Ban /> */}
					<Collections folders={folders} />
					<Suspense fallback={<Loading />}>{children}</Suspense>
				</main>
				<UpButton />
			</body>
		</html>
	)
}
