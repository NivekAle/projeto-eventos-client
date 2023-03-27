import React from 'react';
import { EventModel } from '../../types/EventModel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaugh, faCircle, faMarker, faMapLocation } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Tooltip } from 'antd';


export const data: EventModel[] = [
	{
		author_name: "Admin",
		date: "2023-04-01",
		description: "O melhor de SP!!",
		location: {
			country: "Brazil",
			number: 143,
			state: "São Paulo",
			street: "Av 1",
			reference_point: "Ao lado do Instituto UF"
		},
		price: 120.22,
		title: "Virada Cultural",
		id: 1,
		thumb: "image-2.jpg"
	},
	{
		author_name: "Admin",
		date: undefined,
		description: "O melhor evento de Trap!! em Zona de competição do Carnaval no Sambódromo do Anhembi",
		location: {
			country: "Brazil",
			number: 152,
			state: "São Paulo",
			street: "Av 1",
			reference_point: "Dentro do Sambódromo do Anhembi"
		},
		price: 15.00,
		title: "CENA 2K23",
		id: 2,
		thumb: "image-cena.jpg"
	},
	{
		author_name: "Admin",
		date: undefined,
		description: "O melhor evento de Trap!! em Zona de competição do Carnaval no Sambódromo do Anhembi",
		location: {
			country: "Brazil",
			number: 152,
			state: "São Paulo",
			street: "Av 1",
			reference_point: "Dentro do Sambódromo do Anhembi"
		},
		price: 15.00,
		title: "Bloco 1",
		id: 3,
		thumb: "image-cena.jpg"
	},
	{
		author_name: "Admin",
		date: undefined,
		description: "O melhor evento de Trap!! em Zona de competição do Carnaval no Sambódromo do Anhembi",
		location: {
			country: "Brazil",
			number: 152,
			state: "São Paulo",
			street: "Av 1",
			reference_point: "Dentro do Sambódromo do Anhembi"
		},
		price: 15.00,
		title: "Bloco 2",
		id: 4,
		thumb: "image-cena.jpg"
	},
	{
		author_name: "Admin",
		date: undefined,
		description: "",
		location: {
			country: "Brazil",
			number: 152,
			state: "São Paulo",
			street: "Av 1",
			reference_point: "Dentro do Sambódromo do Anhembi"
		},
		price: 15.00,
		title: "Bloco 3",
		id: 5,
		thumb: "image-cena.jpg"
	},

];

type PopularNowEventsProps = {
	handleSidebar: (id: number) => any;
}

export default function PopularNowEvents({ handleSidebar }: PopularNowEventsProps) {

	const handleDataforSidebar = ({ target }: any) => {
		console.log("clickadop no content PopularNowEvents");
		handleSidebar(target.getAttribute("data-card"));
	}

	const Card = ({ id, title, date, location, price }: EventModel) => {
		return (
			// <Tooltip placement="top" title="Veja Mais">
			<div className="border border-slate-100 py-3 px-4 bg-white shadow-sm rounded-xl hover:shadow-md transition-all">
				<div className="h-32 bg-slate-100 rounded-lg mb-2"></div>
				<p className="text-slate-400 mb-1">
					{date ? new Date(date).toLocaleDateString() : "Data não definida"}
					-
					{date ? new Date(date).getHours() : "Horario não definido"}
				</p>
				<h6 className="text-base font-medium mb-2 hover:text-primary-500 cursor-pointer">
					<span onClick={handleDataforSidebar} className="" data-card={id}>
						{title}
					</span>
				</h6>
				<span className="flex flex-row items-center justify-between">
					<p className="text-slate-400 mb-1 font-medium">
						<FontAwesomeIcon icon={faMapLocation} /> {location.street}, {location.state}
					</p>
					<p className="bg-primary-100 py-2 px-4 rounded-lg font-semibold text-primary-500">
						R$ {price}
					</p>
				</span>
			</div>
		)
	};

	return (
		<section>
			<h3 className="relative ml-4 text-xl font-medium before:bg-primary-500 before:rounded-full before:w-2 before:h-full before:absolute before:-left-4 before:top-0 mb-4">
				Populares
			</h3>
			<div className="grid grid-cols-12 gap-4">
				{
					data.map(card => (
						<div className="col-span-3">
							<Card
								key={card.id}
								author_name={card.author_name}
								date={card.date}
								description={card.description}
								thumb={card.thumb}
								location={{
									country: card.location.country,
									number: card.location.number,
									state: card.location.state,
									street: card.location.street
								}}
								price={card.price}
								title={card.title}
								id={card.id}
							/>
						</div>
					))
				}
			</div>

		</section>
	)
}
