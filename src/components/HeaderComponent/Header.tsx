import { NavHeader } from "./NavHeader";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export function Header() {

	const navigate = useNavigate();

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

					<form className="form-header">
						<div className="form-group">
							<label>
								Направление
								<div className="box-input-header">
									<input type="text" placeholder="" />
									<input type="text" placeholder="" />
								</div>
							</label>
						</div>

						<div className="form-group">
							<label>
								Дата
								<div className="box-input-header">
									<input type="date" placeholder="" />
									<input type="date" placeholder="" />
								</div>
							</label>
						</div>

						<button type="button" onClick={() => { navigate("/select"); }} className="btn-tickets">
							НАЙТИ БИЛЕТЫ
						</button>
					</form>
				</div>
			</div>
		</header>
	);
}
