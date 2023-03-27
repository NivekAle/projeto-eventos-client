import React, { useState } from 'react';

import { Input, Space } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import PopularNowEvents, { data } from '../../components/PopularNowEvents/PopularNowEvents';
import ModalEvent from '../../components/ModalEvent/ModalEvent';

const { Search } = Input;

const { Header, Content, Footer, Sider } = Layout;


export default function HomePage() {

	const [openSidebar, setOpenSidebar] = useState<boolean>(false);
	const [currentIdCard, setCurrentIdCard] = useState<any>();

	const onSearch = (value: string) => console.log(value);

	const handleSelectCard = (id: number) => {
		const cardfind = data.find(item => item.id === Number(id));
		setOpenSidebar(true);
		setCurrentIdCard(cardfind);
	};

	return (
		<div className="h-screen py-6 px-3">
			<div className="bg-white h-full rounded-lg">
				<header className="py-6 px-4 border-b-2 border-solid border-b-slate-100 mb-3">
					<div className="flex flex-row items-center justify-between">
						<h1 className="text-2xl font-bold">
							Encontrar Eventos
						</h1>
						<div className="">
							<Search type="input" placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} className="bg-transparent flex items-center justify-center" />
						</div>
					</div>
				</header>
				<Content className="py-6 px-4 h-[80%] overflow-auto relative z-10">
					<ModalEvent open={openSidebar} card={currentIdCard} handleChangeModal={() => setOpenSidebar(false)} />
					<PopularNowEvents handleSidebar={(id) => handleSelectCard(id)} />
				</Content>
			</div>
		</div>
	)
}
