import getAllFiles from "./getAllFiles"
import getRandomElements from "@/utils/getRandomElements"
import type { File } from "@/types/File"

export default function getRandomFiles(n: number): File[] {
	const allFiles = getAllFiles() as File[]

	return getRandomElements(allFiles, n)
}
