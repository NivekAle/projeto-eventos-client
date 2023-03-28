import { Input, Layout } from 'antd';
import React from 'react'
import InviteCard from '../../components/InviteCard/InviteCard';
import { data } from '../../components/PopularNowEvents/PopularNowEvents';

const { Search } = Input;

const { Header, Content, Footer, Sider } = Layout;

export default function InvitesPage() {

	const onSearch = (value: string) => console.log(value);

	return (
		<div className="h-screen py-6 px-3">
			<div className="bg-white h-full rounded-lg">
				<header className="py-6 px-4 border-b-2 border-solid border-b-slate-100 mb-3">
					<div className="flex flex-row items-center justify-between">
						<h1 className="text-2xl font-bold">
							Convites
						</h1>
						<div className="">
							<Search type="input" placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} className="bg-transparent flex items-center justify-center" />
						</div>
					</div>
				</header>
				<Content className="py-6 px-4 h-[80%] overflow-auto relative z-10">
					<div className="grid grid-cols-12 gap-4">
						{
							data.map(ticket => (
								<div className="col-span-3">
									<InviteCard />
								</div>
							))
						}
					</div>
				</Content>
			</div>
		</div>
	)
}
