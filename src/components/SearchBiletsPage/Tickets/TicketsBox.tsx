import "./Tickets.css";
import type { Tickets } from "../../../types/interface";
import { Ticket } from "./Ticket";

export function TicketBox() {
	const filterCount = (e: React.MouseEvent<HTMLParagraphElement>) => {
		if (e.currentTarget.classList.contains("active-filter")) {
			return;
		} else {
			const a = e.currentTarget.parentElement?.querySelector(".active-filter");
			a?.classList.remove("active-filter");

			e.currentTarget.classList.add("active-filter");
		}
	};

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
		},
	];

	return (
		<div className="box-ticket">
			<div className="filter">
				<p>
					найдено <span className="count-ticket">20</span>
				</p>
				<div className="filter-box">
					<div className="filter-box">
						<p>сортировать по:</p>
						<p className="filter-count-ticket active-filter">времени</p>
					</div>
					<div className="filter-box">
						<p>показывать по:</p>
						<p
							onClick={filterCount}
							className="filter-count-ticket active-filter"
						>
							5
						</p>
						<p onClick={filterCount} className="filter-count-ticket">
							10
						</p>
						<p onClick={filterCount} className="filter-count-ticket">
							20
						</p>
					</div>
				</div>
			</div>
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
					back={e?.back}
				></Ticket>
			))}
		</div>
	);
}
