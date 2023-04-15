import Link from "next/link"

export default function Navbar() {
	return (
		<nav className="h-24 bg-neutral-600">
			<Link className="w-full h-full" href={"/"}>
				Accueil
			</Link>
		</nav>
	)
}
