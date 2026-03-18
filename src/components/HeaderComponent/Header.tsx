import { NavHeader } from "./NavHeader";
import "./Header.css";

export function Header({
	children,
	backgroundImageUrl,
	text,
}: {
	children: React.ReactNode;
	backgroundImageUrl?: string;
	text?: boolean;
}) {
	return (
		<header
			className="header-main"
			style={{
				backgroundImage: backgroundImageUrl
					? `url(${backgroundImageUrl})`
					: undefined,
			}}
		>
			<NavHeader></NavHeader>
			<div className="header-box">
				<div className="box-quote-form-header">
					{text && (
						<div className="quote-section">
							<h1 className="quote-header">
								<span className="quote-slim-header">Вся жизнь -</span>
								<span className="quote-bolder-header">путешествие!</span>
							</h1>
						</div>
					)}
					{children}
				</div>
			</div>
		</header>
	);
}
