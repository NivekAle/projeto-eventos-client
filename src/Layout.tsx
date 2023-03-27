import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

export default function Layout() {
	return (
		<div className="grid grid-cols-12 bg-slate-100">
			<div className="col-span-1">
				<Navbar />
			</div>
			<div className="col-span-11">
				<Outlet />
			</div>
		</div>
	)
}
