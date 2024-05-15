import React from "react";

const Button = ({ text, bgColor, hexColorShadow, onClick, className }) => {
	return (
		<button
			onClick={onClick}
			className={`uppercase p-4 rounded-2xl ${bgColor} flex-grow font-yams-body font-extrabold [box-shadow:_0px_0px_15px_2px_${hexColorShadow};] hover:[box-shadow:_0px_0px_15px_6px_${hexColorShadow};] transition-all duration-200 ${className}`}
		>
			{text}
		</button>
	);
};

export default Button;
