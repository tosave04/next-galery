import "./globals.css"
// import { Providers } from "./providers"
import Ban from "./RootLayout/Ban"
import Navbar from "./RootLayout/Navbar"
import Sidebar from "./RootLayout/Sidebar"
import UpButton from "./RootLayout/UpButton"

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="fr">
			<head />
			<body>
				{/* <Providers> */}
				<Sidebar />
				<main>
					<Navbar />
					<Ban />
					{children}
				</main>
				<UpButton />
				{/* </Providers> */}
			</body>
		</html>
	)
}
