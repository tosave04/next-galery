import type { NextApiRequest, NextApiResponse } from "next"
import tags from "@/data/tags.json"

import ExifReader from "exifreader"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	// On vérifie si c'est bien un GET
	if (req.method !== "GET") {
		res.setHeader("Allow", ["GET"])
		res.status(405).end(`Method ${req.method} Not Allowed`)
		return
	}

	// On vérifie que le paramatre path est bien présent et que c'est bien une chaine de caractère
	if (!req.query.path || typeof req.query.path !== "string") {
		res.status(400).json({ error: "Bad request" })
		return
	}

	// On récupère le parametre path
	const path = req.query.path as string

	// On charge les données exif de l'image
	const exif = await ExifReader.load(path)

	// On vérifie que les données exif sont bien présentes
	if (!exif) {
		res.status(404).json({ error: "Not found" })
		return
	}

	// On récupère Parameters de exif
	const parameters = exif.parameters

	// On vérifie que les données Parameters sont bien présentes
	if (!parameters) {
		res.status(404).json({ error: "Not found" })
		return
	}

	// On filtre les données Parameters pour ne garder que les données qui nous intéresse
	const description = parameters.value
		.match(/.*/i)?.[0]
		.replaceAll(/[\(\),\.\[\]_\{\}\\!]/gi, "")
		.toLowerCase() as string

	// On récupère la liste de tags qui sont dans le string description (on utilise un espace avant et après pour éviter les faux positifs)
	const tagsInDescription = tags.filter((tag) => ` ${description} `.includes(` ${tag} `))

	res.status(200).json(tagsInDescription)
}
