import { useNavigate } from "react-router";

export default function Navbar() {
	const navigate = useNavigate();

	return (
		<div className="p-2 flex justify-center bg-bg-alt">
			<div className="p-2 flex gap-6 rounded-lg bg-bg">
				<button className="btn bg-primary" onClick={() => navigate('/chat')}></button>
				<button className="btn bg-primary" onClick={() => navigate('/frontend2')}></button>
			</div>
		</div>
	);
}
