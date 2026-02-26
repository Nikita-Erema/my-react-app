import { NavHeader } from "./NavHeader";
import "./Header.css";

export function Header({ children }: { children: React.ReactNode }) {
	return (
		<header className="header-main">
			<NavHeader></NavHeader>
			<div className="header-box">
				<div className="box-quote-form-header">
					<div className="quote-section">
						<h1 className="quote-header">
							<span className="quote-slim-header">Вся жизнь -</span>
							<span className="quote-bolder-header">путешествие!</span>
						</h1>
					</div>
					{children}
				</div>
			</div>
		</header>
	);
}
