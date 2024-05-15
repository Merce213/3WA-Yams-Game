import React from "react";

const Button = ({ text, bgColor, onClick, styles }) => {
	return (
		<button
			onClick={onClick}
			className={`uppercase p-4 rounded-2xl ${bgColor} flex-grow font-yams-body font-extrabold transition-all duration-200 ${
				styles ? styles : ""
			}`}
		>
			{text}
		</button>
	);
};

export default Button;
