import { loadTheme, saveTheme } from "../utils/helpers.js";

export function setupThemeToggle() {
	const container = document.getElementById("theme-toggle-container");
	container.innerHTML = `
    <label>
      Dark Mode:
      <input type="checkbox" id="theme-toggle">
    </label>
  `;
	const toggle = document.getElementById("theme-toggle");
	toggle.checked = loadTheme() === "dark";
	applyTheme(toggle.checked);
	toggle.addEventListener("change", () => {
		applyTheme(toggle.checked);
		saveTheme(toggle.checked ? "dark" : "light");
	});
}

function applyTheme(isDark) {
	document.body.className = isDark ? "dark" : "light";
}
