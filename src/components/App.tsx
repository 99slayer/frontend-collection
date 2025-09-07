import { Outlet } from "react-router";
import { useLayoutEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import useResizeObserver from "@react-hook/resize-observer";

export default function App() {
	const navRef = useRef<HTMLDivElement>(null);
	const [displayHeight, setDisplayHeight] = useState<number>(0);
	const [theme, setTheme] = useState<string>('default');
	const [mode, setMode] = useState<string>('default');

	useLayoutEffect(() => {
		setDisplayHeight(navRef.current!.offsetHeight);
	}, []);

	useResizeObserver(navRef, () => {
		setDisplayHeight(navRef.current!.offsetHeight);
	});

	return (
		<div
			id="app"
			data-theme={theme}
			data-mode={mode}
			className="flex flex-col relative bg-bg"
		>
			<div
				ref={navRef}
				className="flex justify-center sticky top-0 flex-wrap bg-bg"
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
		</div>
	);
}
