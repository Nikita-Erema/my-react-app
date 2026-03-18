import "./SearchNav.css";
export function SearchNavComponent() {
	return (
		<div className="box-checklist">
			<div
				className="item-checklist item-checklist-active"
				style={{ zIndex: 4 }}
			>
				Билеты
			</div>
			<div className="item-checklist" style={{ zIndex: 3 }}>
				Пассажиры
			</div>
			<div className="item-checklist" style={{ zIndex: 2 }}>
				Оплата
			</div>
			<div className="item-checklist" style={{ zIndex: 1 }}>
				Проверка
			</div>
		</div>
	);
}
