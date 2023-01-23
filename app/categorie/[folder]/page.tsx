import React from "react"
import Collections from "../../common/Collections"
import Galerie from "../../common/Galerie"
import Loading from "../../loading"

export default function Categorie({ params }: { params: { folder: string } }) {
	return (
		<>
			<React.Suspense fallback={<Loading />}>
				{/* @ts-expect-error Server Component */}
				<Collections categorie={params.folder} />
			</React.Suspense>
			<React.Suspense fallback={<Loading />}>
				{/* @ts-expect-error Server Component */}
				<Galerie categorie={params.folder} />
			</React.Suspense>
		</>
	)
}
