import "./Tickets.css";
import type { Tickets } from "../../../types/interface";
import { Ticket } from "./Ticket";

export function TicketBox() {
	const TicketMock: Tickets[] = [
		{
			fromWhere: "Москва",
			whereTo: "Санкт-Питербург",
			fromWhereTime: "00:10",
			whereToTime: "09:15",
			seatedUp: 12,
			reservedSeatUp: 14,
			coupeUp: 8,
			seatedDown: 11,
			reservedSeatDown: 10,
			coupeDown: 12,
			number: "906A",
			back: true,
		},
		{
			fromWhere: "Москва",
			whereTo: "Санкт-Питербург",
			fromWhereTime: "00:10",
			whereToTime: "09:15",
			seatedUp: 12,
			reservedSeatUp: 14,
			coupeUp: 8,
			seatedDown: 11,
			reservedSeatDown: 10,
			coupeDown: 12,
			number: "906A",
			back: true,
		},
		{
			fromWhere: "Москва",
			whereTo: "Санкт-Питербург",
			fromWhereTime: "00:10",
			whereToTime: "09:15",
			seatedUp: 12,
			reservedSeatUp: 14,
			coupeUp: 8,
			seatedDown: 11,
			reservedSeatDown: 10,
			coupeDown: 12,
			number: "906A",
			back: true,
		}
	];

	return (
		<div className="box-ticket">
			{TicketMock.map((e) => (
				<Ticket
					key={e.number}
					number={e.number}
					fromWhere={e.fromWhere}
					whereTo={e.whereTo}
					fromWhereTime={e.fromWhereTime}
					whereToTime={e.whereToTime}
					seatedUp={e.seatedUp}
					reservedSeatUp={e.reservedSeatUp}
					coupeUp={e.coupeUp}
					seatedDown={e.seatedDown}
					reservedSeatDown={e.reservedSeatDown}
					coupeDown={e.coupeDown}
					back={true}
				></Ticket>
			))}
		</div>
	);
}
