import type { JSX } from "react";
import { useLocation, useNavigate } from "react-router";
import { IoMdColorPalette } from "react-icons/io";
import { RiLayoutFill } from "react-icons/ri";
import { MdStyle } from "react-icons/md";
import { IoChatbox } from "react-icons/io5";
import { PiMouseScrollFill } from "react-icons/pi";
import { BiSolidCarousel } from "react-icons/bi";
import { themeData } from "../data";
import type { ThemeInterface } from "../types";

export default function Navbar({ theme, setTheme, mode, setMode }: {
	theme: string,
	setTheme: React.Dispatch<React.SetStateAction<string>>,
	mode: string,
	setMode: React.Dispatch<React.SetStateAction<string>>
}) {
	const navData: { path: string, icon: JSX.Element }[] = [
		{ path: '/chat', icon: <IoChatbox className="nav-button" /> },
		{ path: '/column', icon: <PiMouseScrollFill className="nav-button" /> },
		{ path: '/carousel', icon: <BiSolidCarousel className="nav-button" /> }
	];

	const createNavButtons = (
		data: { path: string, icon: JSX.Element }[]
	): JSX.Element[] => {
		const btns: JSX.Element[] = [];

		for (const x in data) {
			const p = data[x];
			btns.push(
				<NavButton
					key={x}
					path={p.path}
					icon={p.icon}
				/>
			);
		}

		return btns;
	};

	const createModeButtons = (modes: string[]): JSX.Element[] => {
		const btns = [];

		for (const x in modes) {
			const m = modes[x];
			btns.push(
				<button
					key={x}
					className={`style-btn bg-primary ${mode === m ? 'current-btn' : ''}`}
					onClick={() => setMode(m)}
				></button>
			);
		}

		return btns;
	};

	const createThemeButtons = (themes: ThemeInterface[]): JSX.Element[] => {
		const btns = [];

		for (const x in themes) {
			const t = themes[x];

			btns.push(
				<button
					key={x}
					className={`style-btn ${t.themeMain} ${theme === t.name ? 'current-btn' : ''}`}
					onClick={() => setTheme(t.name)}
				></button>
			);
		}

		return btns;
	};

	return (
		<div className="p-2 flex justify-center items-center flex-wrap gap-2 bg-bg">
			<div
				className="p-2 flex justify-center gap-2 rounded-lg bg-bg-alt"
				title="layout menu"
			>
				<RiLayoutFill className="nav-icon" />
				{createNavButtons(navData)}
			</div>

			<div
				className="p-2 flex items-center flex-wrap gap-2 bg-bg-alt rounded-lg"
				title="style menu"
			>
				<MdStyle className="nav-icon" />
				{createModeButtons(['default', 'crazy'])}
			</div>

			<div
				className="p-2 flex flex-wrap gap-2 bg-bg-alt rounded-lg"
				title="theme menu"
			>
				<IoMdColorPalette className="nav-icon" />
				{createThemeButtons(themeData)}
			</div>
		</div>
	);
}

function NavButton({ path, icon }: { path: string, icon: JSX.Element }) {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<button
			className={path === location.pathname ? 'text-primary-hover' : 'text-primary'}
			onClick={() => navigate(path)}
		>
			{icon}
		</button>
	);
}
