export function activatePowerUp() {
	const cards = document.querySelectorAll(".card");
	cards.forEach((card) => card.classList.add("flipped"));
	setTimeout(() => {
		cards.forEach((card) => {
			if (!card.classList.contains("matched")) {
				card.classList.remove("flipped");
			}
		});
	}, 3000);
}
