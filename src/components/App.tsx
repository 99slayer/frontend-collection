import { Outlet } from "react-router";
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function App() {
	const [theme, setTheme] = useState<string>('default');
	const [mode, setMode] = useState<string>('default');

	return (
		<div
			id="app"
			data-theme={theme}
			data-mode={mode}
			className="flex flex-col bg-bg"
		>
			<Navbar />
			<div className="flex-1 flex">
				<Sidebar setTheme={setTheme} setMode={setMode} />
				{/* the subtrahend needs to be equal to the height of the navbar */}
				<div className="flex-1 flex h-[calc(100vh-72px)] overflow-y-auto">
					<Outlet />
				</div>
			</div>
		</div>
	);
}
