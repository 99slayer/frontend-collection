import { Outlet, useLocation } from "react-router";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import useResizeObserver from "@react-hook/resize-observer";

export default function App() {
	const location = useLocation();
	const navRef = useRef<HTMLDivElement>(null);
	const [displayHeight, setDisplayHeight] = useState<number>(0);
	const [theme, setTheme] = useState<string>('default');
	const [mode, setMode] = useState<string>('default');
	const [layoutTagVis, setLayoutTagVis] = useState<boolean>(true);

	useLayoutEffect(() => {
		setDisplayHeight(navRef.current!.offsetHeight);
	}, []);

	useResizeObserver(navRef, () => {
		setDisplayHeight(navRef.current!.offsetHeight);
	});

	useEffect(() => {
		setLayoutTagVis(true);
		const timeout = setTimeout(() => {
			setLayoutTagVis(false);
		}, 3000);

		return () => clearTimeout(timeout);
	}, [location]);

	return (
		<div
			id="app"
			data-theme={theme}
			data-mode={mode}
			className="flex flex-col relative bg-bg font-mode-reg"
		>
			<div
				ref={navRef}
				className="flex justify-center sticky top-0 flex-wrap bg-bg border-mode-sm border-b-only"
			>
				<Navbar
					theme={theme}
					setTheme={setTheme}
					mode={mode}
					setMode={setMode}
				/>
			</div>
			<div className="flex-1 flex">
				<div
					className="flex-1 flex overflow-y-auto"
					style={{
						height: `calc(100vh - ${displayHeight}px)`
					}}
				>
					<Outlet />
				</div>
			</div>
			<div
				className={`px-2 absolute bottom-1 left-1 text-text font-mode-header bg-primary rounded-mode-sm border-mode-sm shadow-mode-sm mode-transform ${layoutTagVis ? 'block' : 'hidden'}`}
			>
				{location.pathname.slice(1) + ' layout'}
			</div>
		</div>
	);
}
