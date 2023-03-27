import React, { useLayoutEffect, useState } from 'react';
import { EventModel } from '../../types/EventModel';
import { data } from '../PopularNowEvents/PopularNowEvents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

type SidebarEventProps = {
	// eventCard: EventModel;
	open: boolean;
	card: EventModel;
	handleChangeModal: () => any;
}

export default function ModalEvent({ open, card, handleChangeModal }: SidebarEventProps) {

	open ? console.log("abrindo") : console.log("fechado");

	const handleCloseModal = () => handleChangeModal();

	const handleKeyDownCloseModal = (event: any) => event.keyCode === 27 ? handleChangeModal() : "";

	const getMonthName = (monthNumber: any) => {
		const date = new Date();
		date.setMonth(monthNumber + 1);

		return date.toLocaleString('en-US', { month: 'short' });
	}

	return (
		<>
			{
				open ? <div tabIndex={0} onKeyDown={(e) => handleKeyDownCloseModal(e)} className="bg-bg-opacity fixed top-[50%] left-[50%] w-screen h-screen -translate-x-2/4 -translate-y-2/4 flex items-center justify-center z-10">
					<div className="h-[80%] w-[80%] sticky top-4 r-0 bg-white shadow-lg p-6 rounded-lg">
						<div className="absolute top-4 right-3">
							<button className="py-1 px-2 rounded-lg hover:text-primary-500" onClick={handleCloseModal}>
								<FontAwesomeIcon icon={faClose} />
							</button>
						</div>
						<div className="grid grid-cols-12 gap-4 h-full">
							<div className="col-span-4">
								<div className="h-full l-w-full bg-slate-200 rounded-2xl"></div>
							</div>
							<div className="col-span-8">
								<h4 className="text-2xl font-bold">
									{card?.title}
								</h4>
								<span className="flex flex-row items-center my-4">
									{card.date ?
										<>
											<span className="flex flex-col items-center text-base font-medium">
												<p className="text-slate-700">{new Date(card.date).toLocaleDateString().slice(0, 2)}</p>
												<p className="text-slate-400">{getMonthName(new Date(card.date).getMonth())}</p>
											</span>
											&nbsp;
											|
											&nbsp;
											<p>{new Date(card.date).toLocaleDateString()}</p>
										</>
										: "Data não definida"
									}
								</span>
								<h5 className="font-bold text-lg">Sobre este Evento</h5>
								<span className="my-3 block">
									{
										card.description
											?
											<p>{card.description}</p>
											:
											<p className="text-slate-400">Este evento não contém descrição!</p>
									}
								</span>
							</div>
						</div>
					</div>
				</div> : ""
			}
		</>
	);
};
