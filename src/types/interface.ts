export interface Tickets {
	fromWhere: string;
	whereTo: string;
	fromWhereTime: string;
	whereToTime: string;
	seatedUp: number;
	reservedSeatUp: number;
	coupeUp: number;
	seatedDown: number;
	reservedSeatDown: number;
	coupeDown: number;
	number: string;
	back?: boolean;
}
