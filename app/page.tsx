import React from "react"
import Collections from "./common/Collections"
import Galerie from "./common/Galerie"
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
