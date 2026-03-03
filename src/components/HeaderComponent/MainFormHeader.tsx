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
