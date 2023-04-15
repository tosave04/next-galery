import CollectionsThumb from "./CollectionsThumb"
import type { Folder } from "@/types/Folder"
import style from "./Collections.module.css"

export default function Collections({ folders }: { folders: Folder[] }) {
	return (
		<section className={style.collections}>
			{folders?.map((folder, index) => (
				<CollectionsThumb key={index} folder={JSON.stringify(folder)} />
			))}
		</section>
	)
}
