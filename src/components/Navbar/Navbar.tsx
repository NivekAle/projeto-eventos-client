import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { faCalendar, faCog, faComments, faHome, faInbox, faTicket, faSignOut, faFaceSmile, faLaugh, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Tooltip } from 'antd';


type NavItemProps = {
	to: string;
	label?: string;
	icon: IconProp;
};

const NavItem = (prop: NavItemProps) => (
	<li>
		<Tooltip placement="right" title={prop.label}>
			<NavLink to={prop.to} className="flex flex-col items-center justify-center gap-2 text-center text-slate-500 hover:text-primary-500" id="navitem">
				<FontAwesomeIcon icon={prop.icon} fontSize={20} />
			</NavLink>
		</Tooltip>
	</li>
);

const links_for_navigation: NavItemProps[] = [
	{
		icon: faHome,
		label: "Home",
		to: "/home"
	},
	{
		icon: faInbox,
		label: "Buscar Eventos",
		to: "/search-events"
	},
	{
		icon: faComments,
		label: "Mensagens",
		to: "/inbox"
	},
	{
		icon: faTicket,
		label: "Convites",
		to: "/invites"
	},
	{
		icon: faCalendar,
		label: "Meu Calendário",
		to: "/my-calendar"
	},
	{
		icon: faCog,
		label: "Configurações",
		to: "/settings"
	},
];

export default function Navbar() {

	return (
		<nav className="h-screen py-6 px-3">
			<div className="flex flex-col items-center justify-between h-full py-6 bg-white rounded-lg">
				<div className="h-max flex flex-col gap-3">
					<a href="#" className="text-4xl">
						<FontAwesomeIcon icon={faLaugh} />
					</a>
					<hr className="border border-solid border-slate-200" />
					<Tooltip placement="right" title="Meu Perfil">
						<NavLink to="/profile" className="block text-center text-2xl text-primary-600">
							<img src="avatar.jpg" alt="" className="w-10 h-10 rounded-full" />
						</NavLink>
					</Tooltip>
					<hr className="border border-solid border-slate-200" />
					<ul className="flex flex-col items-center justify-center gap-y-8 mt-3">
						{
							links_for_navigation.map((item) => (
								<NavItem icon={item.icon} label={item.label} to={item.to} key={item.to} />
							))
						}
					</ul>
				</div>
				<div className="h-max">
					<NavLink to="/auth" className="text-red-500">
						<FontAwesomeIcon icon={faSignOut} />
					</NavLink>
				</div>
			</div>
		</nav>
	)
}
