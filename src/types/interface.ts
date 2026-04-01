export interface Tickets {
	fromWhere: string;
	whereTo: string;
	fromWhereTime: string;
	whereToTime: string;
	seatedUp?: number;
	reservedSeatUp?: number;
	coupeUp?: number;
	seatedDown?: number;
	reservedSeatDown?: number;
	coupeDown?: number;
	number: string;
	back?: boolean;
}

export interface price {
	count: number
	type: string
	price: number
}

export interface TicketType {
	luxury?: boolean
	express?: boolean
	wifi?: boolean
}

export interface TimeDirectionInt {
	direction: string
}

export interface ActiveNav {
	name: string
	class: string
}