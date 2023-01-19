"use client"

import GallerieProvider from "./providers/GallerieProvider"

export function Providers({ children }: { children: React.ReactNode }) {
	return <GallerieProvider>{children}</GallerieProvider>
}
