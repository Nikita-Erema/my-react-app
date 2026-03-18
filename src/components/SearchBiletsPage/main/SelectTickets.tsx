import "./SelectTickets.css";
import { TicketBox } from "../Tickets/TicketsBox";
import { Details } from "./SearchDetails";

export function MainSelectTickets() {
	return (
		<div className="main-tickets-box">
			<Details></Details>
			<TicketBox></TicketBox>
		</div>
	);
}
