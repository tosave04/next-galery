// Fonction qui retourne des éléments aléatoires d'un tableau
// https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array
export default function getRandomElements<T>(arr: T[], n: number): T[] {
	const result = new Array(n)
	let len = arr.length
	const taken = new Array(len)
	if (n > len) return arr
	while (n--) {
		const x = Math.floor(Math.random() * len)
		result[n] = arr[x in taken ? taken[x] : x]
		taken[x] = --len in taken ? taken[len] : len
	}
	return result
}
