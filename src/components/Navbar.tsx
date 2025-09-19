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
import { TbCircleNumber1Filled, TbCircleNumber2Filled, TbCircleNumber3Filled } from "react-icons/tb";

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

	const createThemeButtons = (themes: ThemeInterface[]): JSX.Element[] => {
		const btns = [];

		for (const x in themes) {
			const t = themes[x];

			btns.push(
				<button
					key={x}
					className={`style-btn ${t.themeMain} ${theme === t.name ? 'current-btn' : ''}`}
					onClick={() => setTheme(t.name)}
					title={t.name}
				></button>
			);
		}

		return btns;
	};

	return (
		<div className="p-2 pb-[12px] flex justify-center items-center flex-wrap gap-2 bg-bg 700:p-2">
			<div
				className="p-2 flex justify-center gap-2 rounded-mode-md bg-primary border-mode-sm shadow-mode-sm mode-transform"
				title="layout menu"
			>
				<RiLayoutFill className="nav-icon" />
				{createNavButtons(navData)}
			</div>

			<div
				className="p-2 flex items-center flex-wrap gap-2 bg-primary rounded-mode-md border-mode-sm shadow-mode-sm mode-transform"
				title="style menu"
			>
				<MdStyle className="nav-icon" />
				<div className="flex items-center gap-2">
					<button onClick={() => setMode('default')}>
						<TbCircleNumber1Filled
							className={`min-w-icon min-h-icon ${mode === 'default' ? 'text-bg bg-text rounded-mode-sm' : 'text-text'}`}
						/>
					</button>
					<button onClick={() => setMode('crisp')}>
						<TbCircleNumber2Filled
							className={`min-w-icon min-h-icon ${mode === 'crisp' ? 'text-bg bg-text rounded-mode-sm' : 'text-text'}`}
						/>
					</button>
					<button onClick={() => setMode('crazy')}>
						<TbCircleNumber3Filled
							className={`min-w-icon min-h-icon ${mode === 'crazy' ? 'text-bg bg-text rounded-mode-sm' : 'text-text'}`}
						/>
					</button>
				</div>
			</div>

			<div
				className="p-2 flex flex-wrap gap-2 bg-primary rounded-mode-md border-mode-sm shadow-mode-sm mode-transform"
				title="theme picker"
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
			className={`${path === location.pathname ? 'text-bg bg-text rounded-mode-sm' : 'text-text'}`}
			onClick={() => navigate(path)}
		>
			{icon}
		</button>
	);
}
