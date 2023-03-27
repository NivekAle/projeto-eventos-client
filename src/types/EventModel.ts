import { LocationType } from "./Location.type";

export type EventModel = {
	id: number;
	title: string;
	description: string;
	price: number;
	// on_sale?: boolean; // se caso esta em desconto;
	// on_sale_price?: number;
	date: string | undefined; // ver se vale apena guardar o dia do evento e a data no mesmo input;
	// time: number;
	author_name: string; // uum nome ou o  objeto author com as props, ex : name, id, email;
	location: LocationType;
	thumb: string;
}


export type CardPopularProps = {

}