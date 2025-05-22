import { fetchUniquePokemon } from "../utils/api.js";
import { shuffle } from "../utils/helpers.js";
import { activatePowerUp } from "./powerup.js";

let firstCard = null;
let secondCard = null;
let clicks = 0;
let matched = 0;
let totalPairs = 0;

export async function initializeGame() {
	const difficulty = document.getElementById("difficulty").value;
	const pairCount = difficulty === "easy" ? 3 : difficulty === "hard" ? 9 : 6;
	totalPairs = pairCount;
	matched = 0;
	clicks = 0;
	updateStats();

	const pokemon = await fetchUniquePokemon(pairCount);
	const cards = shuffle([...pokemon, ...pokemon]);
	renderCards(cards);

	document.getElementById("reset-btn").onclick = initializeGame;
	document.getElementById("start-btn").onclick = initializeGame;
	document.getElementById("powerup-btn").onclick = () => activatePowerUp();
}

function renderCards(cards) {
	const grid = document.getElementById("card-grid");
	grid.innerHTML = "";
	cards.forEach((poke, index) => {
		const card = document.createElement("div");
		card.className = "card";
		card.dataset.name = poke.name;
		card.innerHTML = `
      <div class="front"></div>
      <div class="back"><img src="${poke.image}" alt="${poke.name}" /></div>
    `;
		card.addEventListener("click", () => handleCardClick(card));
		grid.appendChild(card);
	});
}

function handleCardClick(card) {
	if (card.classList.contains("matched") || card === firstCard || secondCard)
		return;
	card.classList.add("flipped");

	if (!firstCard) {
		firstCard = card;
	} else {
		secondCard = card;
		clicks++;
		updateStats();

		if (firstCard.dataset.name === secondCard.dataset.name) {
			firstCard.classList.add("matched");
			secondCard.classList.add("matched");
			matched++;
			resetTurn();
			checkWin();
		} else {
			setTimeout(() => {
				firstCard.classList.remove("flipped");
				secondCard.classList.remove("flipped");
				resetTurn();
			}, 1000);
		}
	}
}

function resetTurn() {
	firstCard = null;
	secondCard = null;
}

function updateStats() {
	document.getElementById("clicks").textContent = `Clicks: ${clicks}`;
	document.getElementById("pairs-left").textContent = `Pairs Left: ${
		totalPairs - matched
	}`;
	document.getElementById(
		"pairs-matched"
	).textContent = `Pairs Matched: ${matched}`;
}

function checkWin() {
	if (matched === totalPairs) {
		alert("You win!");
	}
}
