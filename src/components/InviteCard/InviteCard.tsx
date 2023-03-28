import React from 'react';

export default function InviteCard() {
	return (
		<div className="rounded-xl py-6 px-4 shadow-md border-slate-100 bg-white border overflow-hidden hover:scale-105 transition-all">
			<div className="flex flex-row items-center justify-between">
				<button className="py-1 px-3 text-[11px] rounded-full hover:bg-blue-200">
					Ver Evento
				</button>
				<button className="bg-primary-100 text-primary-500 font-bold py-1 px-3 text-[11px] rounded-full">
					Mais detalhes
				</button>
			</div>
			<span className="text-center mb-4 block relative">
				<div className="absolute top-2/4 left-2/4 bg-slate-100 h-[2px] w-full -translate-x-2/4 -translate-y-2/4"></div>
				<h6 className="font-bold text-xl relative">
					<span className="inline-block bg-white w-max p-2">TITULO</span>
				</h6>
			</span>
			<div className="grid grid-cols-12 gap-4">
				<div className="col-span-6">
					<div className="flex flex-col items-start justify-start">
						<p className="text-slate-400 text-[12px]">
							City
						</p>
						<p className='text-slate-800 text-[13px]'>
							Name of City
						</p>
					</div>
				</div>
				<div className="col-span-6">
					<div className="flex flex-col items-start justify-start">
						<p className="text-slate-400 text-[12px]">
							Date
						</p>
						<p className='text-slate-800 text-[13px]'>
							00/00/0000 00:00
						</p>
					</div>
				</div>
				<div className="col-span-6">
					<div className="flex flex-col items-start justify-start">
						<p className="text-slate-400 text-[12px]">
							Código
						</p>
						<p className='text-slate-800 text-[13px]'>
							8AF41L42R
						</p>
					</div>
				</div>
				<div className="col-span-6">
					<div className="flex flex-col items-start justify-start">
						<p className="text-slate-400 text-[12px]">
							Portão
						</p>
						<p className='text-slate-800 text-[13px]'>
							Z-2
						</p>
					</div>
				</div>
				<div className="col-span-12 relative border-t-2 border-slate-100 border-dashed">
					<div className="absolute -top-3 -left-6 w-6 h-6 rounded-full bg-slate-200"></div>
					<img src="barcode.png" className="object-cover w-full h-12 mt-3" alt="" />
					<div className="absolute -top-3 -right-6 w-6 h-6 rounded-full bg-slate-200"></div>
				</div>
			</div>
		</div>
	)
}
