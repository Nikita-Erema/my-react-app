import "./Tickets.css";
import { time } from "../../functions";

interface TicketDiection {
	fromWhere: string;
	whereTo: string;
	reverse?: boolean;
	whereToTime: string;
	fromWhereTime: string;
}

export function TicketDiection({
	fromWhere,
	whereTo,
	reverse,
	whereToTime,
	fromWhereTime,
}: TicketDiection) {
	return (
		<div className="ticket-direction-container">
			<div className="ticket-direction-time">
				<p className="ticket-direction-time-text">{fromWhereTime}</p>
				<span>{fromWhere}</span>
			</div>
			<div className="ticket-direction">
				<p className="ticket-direction-time-text">
					{time(fromWhereTime, whereToTime)}
				</p>
				{reverse ? (
					<span className="arrow">⬅</span>
				) : (
					<span className="arrow">⮕</span>
				)}
			</div>
			<div className="ticket-direction-time">
				<p className="ticket-direction-time-text">{whereToTime}</p>
				<span>{whereTo}</span>
			</div>
		</div>
	);
}
