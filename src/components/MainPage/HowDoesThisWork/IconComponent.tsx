interface IconComponentProps {
	svgPath: string;
	text: string;
}

export function IconComponent({ svgPath, text }: IconComponentProps) {
	return (
		<div className="how-work-step">
			<svg
				width="162"
				height="162"
				viewBox="0 0 162 162"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>{text}</title>
				<circle cx="81" cy="81" r="81" fill="#E5E5E5" fillOpacity="0.2" />
				<path d={svgPath} fill="white" fillRule="evenodd" clipRule="evenodd" />
			</svg>
			<p className="how-work-text">{text}</p>
		</div>
	);
}
