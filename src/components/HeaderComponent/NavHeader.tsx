import "./NavHeader.css";

export function NavHeader() {
	return (
		<>
			<h1 className="title-logo">Лого</h1>
			<nav className="navigation-box">
				<a className="navigation-item" href="/#about-us">
					O нас
				</a>
				<a className="navigation-item" href="/#how-it-works">
					Как это работает
				</a>
				<a className="navigation-item" href="/#reviews">
					Отзывы
				</a>
				<a className="navigation-item" href="/#contacts">
					Контакты
				</a>
			</nav>
		</>
	);
}
