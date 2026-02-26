import "./HeaderSearch.css";

function HeaderSearch() {
	return (
		<div className="header-search-box">
			<form className="header-search-form">
				<label className="form-group">
					<input
						type="text"
						className="input-form-search"
						placeholder="Откуда"
					/>
					<input type="text" className="input-form-search" placeholder="Куда" />
				</label>
				<label className="form-group">
					<input type="date" className="input-form-search" placeholder="Дата" />
					<input type="date" className="input-form-search" placeholder="Дата" />
				</label>
				<button type="submit" className="btn-tickets">
					НАЙТИ БИЛЕТЫ
				</button>
			</form>
		</div>
	);
}

export default HeaderSearch;
