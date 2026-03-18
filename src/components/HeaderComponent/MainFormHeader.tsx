import { useNavigate } from "react-router-dom";
import "./Header.css";
export function MainFormHeader() {
	const navigate = useNavigate();

	return (
		<form className="form-header">
			<div className="form-group">
				<label>
					Направление
					<div className="box-input-header">
						<input type="text" className="input-main-page" placeholder="" />
						<input type="text" className="input-main-page" placeholder="" />
					</div>
				</label>
			</div>
			<div className="form-group">
				<label>
					Дата
					<div className="box-input-header">
						<input type="date" className="input-main-page" placeholder="" />
						<input type="date" className="input-main-page" placeholder="" />
					</div>
				</label>
			</div>
			<button
				type="button"
				onClick={() => {
					navigate("/select");
				}}
				className="btn-tickets"
			>
				НАЙТИ БИЛЕТЫ
			</button>
		</form>
	);
}
