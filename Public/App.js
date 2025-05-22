import { createHeader } from "./components/Header.js";
import { setupThemeToggle } from "./components/ThemeToggle.js";
import { setupDifficultySelector } from "./components/DifficultySelect.js";
import { initializeGame } from "./game/gameState.js";

export default function App() {
	createHeader();
	setupThemeToggle();
	setupDifficultySelector();
	initializeGame();
}
