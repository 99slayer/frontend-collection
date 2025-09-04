import type { JSX } from "react";
import { useLocation, useNavigate } from "react-router";

export default function Navbar() {
	const navigate = useNavigate();
	const location = useLocation();

	const createPageButtons = (pages: string[]): JSX.Element[] => {
		const btns: JSX.Element[] = [];

		for (const x in pages) {
			const p = pages[x];
			btns.push(
				<button
					key={x}
					className={`btn bg-primary ${location.pathname === p ? 'current-page-btn' : ''}`}
					onClick={() => navigate(p)}
				></button>
			);
		}

		return btns;
	};

	return (
		<div className="p-2 flex justify-center bg-bg-alt">
			<div className="p-2 flex gap-6 rounded-lg bg-bg">
				{createPageButtons(['/chat', '/frontend2', '/carousel'])}
			</div>
		</div>
	);
}
