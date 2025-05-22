export function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

export function saveTheme(theme) {
	localStorage.setItem("theme", theme);
}

export function loadTheme() {
	return localStorage.getItem("theme") || "light";
}
