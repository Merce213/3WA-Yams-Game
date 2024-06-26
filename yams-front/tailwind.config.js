/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"yams-blue": "#38ACDE",
				"yams-green": "#0AD48C",
				"yams-yellow": "#FFB801",
				"yams-purple": "#605CA8",
				"yams-active-link": "#554BFF",
				"yams-disabled": "#8C8C8C",
				"yams-bg-disabled": "#626262",
			},
			fontFamily: {
				"yams-title": ["Amita", "serif"],
				"yams-body": ["Inter", "sans-serif"],
				"yams-cherry": ["Cherry Bomb One", "system-ui"],
			},
			fontSize: {
				sm: "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
				base: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
				lg: "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
				xl: "clamp(1.56rem, 1vw + 1.31rem, 2.11rem)",
				"2xl": "clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)",
				"3xl": "clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)",
				"4xl": "clamp(3.05rem, 3.54vw + 2.17rem, 5rem)",
				"5xl": "clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)",
				"6xl": "clamp(4.77rem, 7.48vw + 2.9rem, 8.88rem)",
			},
			backgroundImage: {
				"yams-dice": "url('/background-yams.jpg')",
			},
			animation: {
				"background-shine": "background-shine 2s linear infinite",
				"slide-down": "slideDown 0.5s forwards",
			},
			keyframes: {
				"background-shine": {
					from: {
						backgroundPosition: "0 0",
					},
					to: {
						backgroundPosition: "-200% 0",
					},
				},
				slideDown: {
					"0%": { transform: "translateY(-100%)" },
					"100%": { transform: "translateY(0)" },
				},
			},
		},
	},
	plugins: [],
};
