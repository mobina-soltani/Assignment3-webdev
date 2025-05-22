export function createHeader() {
	document.getElementById("game-header").innerHTML = `
    <h1>Pokémon Memory Game</h1>
    <div>
      <span id="clicks">Clicks: 0</span>
      <span id="pairs-left">Pairs Left: 0</span>
      <span id="pairs-matched">Pairs Matched: 0</span>
      <span id="timer">Time: 0</span>
    </div>
    <div id="theme-toggle-container"></div>
  `;
}
