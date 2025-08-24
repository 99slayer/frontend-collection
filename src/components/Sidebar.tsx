export default function Sidebar({ setTheme, setMode }: {
	setTheme: React.Dispatch<React.SetStateAction<string>>,
	setMode: React.Dispatch<React.SetStateAction<string>>
}) {
	return (
		<div className="p-2 flex flex-col gap-6 justify-center bg-bg-alt">
			<div className="p-2 flex flex-col gap-6 bg-bg rounded-lg">
				<button className="btn bg-theme-default" onClick={() => setTheme('default')}></button>
				<button className="btn bg-theme-one" onClick={() => setTheme('one')}></button>
				<button className="btn bg-theme-two" onClick={() => setTheme('two')}></button>
				<button className="btn bg-theme-three" onClick={() => setTheme('three')}></button>
				<button className="btn bg-theme-four" onClick={() => setTheme('four')}></button>
				<button className="btn bg-theme-five" onClick={() => setTheme('five')}></button>
			</div>
			<div className="p-2 flex flex-col gap-6 bg-bg rounded-lg">
				<button className="btn bg-gray-500" onClick={() => setMode('default')}></button>
				<button className="btn bg-gray-500" onClick={() => setMode('crazy')}></button>
			</div>
		</div>
	);
}
