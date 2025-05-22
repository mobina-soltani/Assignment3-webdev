export function setupDifficultySelector() {
	document.getElementById("game-controls").innerHTML = `
    <button id="start-btn">Start</button>
    <button id="reset-btn">Reset</button>
    <select id="difficulty">
      <option value="easy">Easy</option>
      <option value="medium" selected>Medium</option>
      <option value="hard">Hard</option>
    </select>
    <button id="powerup-btn">Use Power-Up</button>
  `;
}
