export async function fetchUniquePokemon(count) {
	const ids = new Set();
	while (ids.size < count) {
		ids.add(Math.floor(Math.random() * 898) + 1);
	}
	const promises = Array.from(ids).map((id) =>
		axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
	);

	try {
		const responses = await Promise.all(promises);
		return responses.map((res) => ({
			name: res.data.name,
			image: res.data.sprites.front_default,
		}));
	} catch (error) {
		console.error("API error:", error);
		return [];
	}
}
