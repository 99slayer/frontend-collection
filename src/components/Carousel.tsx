import {
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
	type JSX
} from "react";
import useResizeObserver from "@react-hook/resize-observer";
import type { CarouselInterface } from "../types";
import { carouselData } from "../data";

function Carousel() {
	const displayRef = useRef<HTMLDivElement>(null);
	const [index, setIndex] = useState<number>(0);
	const [displayWidth, setDisplayWidth] = useState<number>(0);
	const [animate, setAnimate] = useState<string>('');
	const displayLimit = 7; // includes overflow cards
	const [open, setOpen] = useState<boolean>(false);

	const cardWidth = displayWidth / (displayLimit - 4);

	useLayoutEffect(() => {
		setDisplayWidth(displayRef.current!.offsetWidth);
	}, []);

	useResizeObserver(displayRef, () => {
		setDisplayWidth(displayRef.current!.offsetWidth);
	});

	useEffect(() => {
		const timer = setTimeout(() => {
			setOpen(true);
		}, 100);
		return () => clearTimeout(timer);
	}, []);

	const cycleLeft = () => {
		setAnimate('left');
	};

	const cycleRight = () => {
		setAnimate('right');
	};

	function manageIndex(direction: string): void {
		if (direction === 'right') {
			// cycle right
			if (index <= 0) {
				setIndex(carouselData.length - 1);
			} else setIndex(prev => prev - 1);
		} else if (direction === 'left') {
			// cycle left
			if (index + 1 > carouselData.length - 1) {
				setIndex(0);
			} else setIndex(prev => prev + 1);
		}
	}

	function createCards(arr: CarouselInterface[]): JSX.Element[] {
		const elements: JSX.Element[] = [];
		const midIndex: number = Math.floor(displayLimit / 2);
		arr = [...arr, ...arr];

		let cardIndex = 0;
		for (let i = 0; i < arr.length; i++) {
			if (i < index || i >= index + displayLimit) continue;

			const content = arr[i];
			const tier = Math.abs(midIndex - cardIndex);
			const group = (cardIndex < midIndex ? 1 : (cardIndex > midIndex ? 3 : 2));
			elements.push(<Card
				key={i}
				content={content}
				width={cardWidth}
				tier={tier}
				group={group}
				animate={animate}
			/>);
			cardIndex++;
		}

		return elements;
	}

	return (

		<div
			ref={displayRef}
			className={`flex-1 ${open ? '' : 'opacity-0'} flex justify-center relative bg-bg overflow-hidden`}
			style={{
				width: '100%'
			}}
		>
			<button
				className="size-6 flex justify-center items-center absolute top-[50%] left-4 bg-white z-10"
				onClick={() => cycleLeft()}
			>
				{"<"}
			</button>
			<button
				className="size-6 flex justify-center items-center absolute top-[50%] right-4 bg-white z-10"
				onClick={() => cycleRight()}
			>
				{">"}
			</button>
			<div
				className="flex-1 flex justify-center items-end"
				style={{
					transform: `${animate ?
						`translateX(${animate === 'right' ? cardWidth : -cardWidth}px)` :
						'translateX(0px)'}`,
					transition: `${animate ? 'transform 0.5s ease' : 'none'}`
				}}
				onTransitionEnd={() => {
					manageIndex(animate);
					setAnimate('');
				}}
			>
				{createCards(carouselData)}
			</div>
		</div>
	);
}

function Card({ content, width, tier, group, animate }: {
	content: CarouselInterface;
	width: number;
	tier: number;
	group: number;
	animate: string;
}) {
	const cardRef = useRef<HTMLDivElement>(null);
	const [finalTier, setFinalTier] = useState<number>(tier);
	const [offsetX, setOffsetX] = useState<number>(0);

	const base = 0.12;

	useEffect(() => {
		if (!animate) return;
		if (animate === 'right') {
			if (group === 1) {
				setFinalTier(prev => prev - 1);
			} else setFinalTier(prev => prev + 1);
		} else {
			if (group === 1 || group === 2) {
				setFinalTier(prev => prev + 1);
			} else setFinalTier(prev => prev - 1);
		}
	}, [group, animate]);

	useEffect(() => {
		let x;
		if (animate === 'right') {
			x = group === 1 ? 1 : -1;
		} else {
			x = group === 1 || group === 2 ? 1 : -1;
		}

		let prevSum = 0;
		for (let i = 0; i <= finalTier; i++) {
			prevSum += i;
		}

		setOffsetX((width * ((finalTier + prevSum) * base)) * x);
	}, [width, group, animate, finalTier]);

	return (
		<div
			ref={cardRef}
			className={`flex-1 p-2 flex flex-col justify-start items-center rounded-lg shadow-2xl bg-primary ${animate !== '' ? 'card-animation' : ''}`}
			style={{
				width: `${width}px`,
				height: `${100 - (finalTier * 10)}%`,
				transform: `translateX(${offsetX}px) translateY(${100 * (finalTier * base)}%) scale(${1 - (finalTier * base)})`,
				zIndex: `${20 - finalTier}`
			}}
			onTransitionEnd={(e) => e.stopPropagation()}
		>
			<div>{content.title}</div>
			<div>{content.text}</div>
		</div>
	);
}

export default Carousel;
