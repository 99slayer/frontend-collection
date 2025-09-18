import {
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
	type JSX
} from "react";
import useResizeObserver from "@react-hook/resize-observer";
import type { CarouselInterface } from "../types";
import { carouselData } from "../data";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

function Carousel() {
	const displayRef = useRef<HTMLDivElement>(null);
	const throttleRef = useRef<number>(Date.now());
	const [index, setIndex] = useState<number>(0);
	const [displayWidth, setDisplayWidth] = useState<number>(0);
	const [animate, setAnimate] = useState<string>('');
	const [displayLimit, setDisplayLimit] = useState<number>(0); // includes overflow cards
	const [cardWidth, setCardWidth] = useState<number>(0);
	const [open, setOpen] = useState<boolean>(false);

	useResizeObserver(displayRef, () => {
		setDisplayWidth(displayRef.current!.offsetWidth);
	});

	useLayoutEffect(() => {
		setDisplayWidth(displayRef.current!.offsetWidth);
	}, []);

	useLayoutEffect(() => {
		if (displayWidth <= 0) return;

		const minCardWidth = 400;
		let limit = Math.floor(displayWidth / minCardWidth);
		if (limit % 2 === 0) limit += 1;

		setCardWidth(displayWidth / limit);
		setDisplayLimit(limit + 2);
	}, [displayWidth]);

	const cycleLeft = useCallback(() => {
		if (animate) return;
		throttleRef.current = Date.now();
		setAnimate('left');
	}, [animate]);

	const cycleRight = useCallback(() => {
		if (animate) return;
		throttleRef.current = Date.now();
		setAnimate('right');
	}, [animate]);

	useEffect(() => {
		window.addEventListener('wheel', (e) => {
			if (Date.now() - throttleRef.current <= 350) return;
			if (e.deltaY > 0) {
				cycleLeft();
			} else cycleRight();
		});

		const timer = setTimeout(() => {
			setOpen(true);
		}, 100);

		return () => clearTimeout(timer);
	}, [cycleLeft, cycleRight]);

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
		if (displayWidth <= 0) return [];

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
				className="opacity-60 absolute top-[50%] left-4 z-10 hover:opacity-100"
				onClick={() => cycleLeft()}
			>
				<FaArrowAltCircleLeft className="min-w-icon min-h-icon rounded-full text-text bg-primary" />
			</button>
			<button
				className="opacity-60 absolute top-[50%] right-4 z-10 hover:opacity-100"
				onClick={() => cycleRight()}
			>
				<FaArrowAltCircleRight className="min-w-icon min-h-icon rounded-full text-text bg-primary" />
			</button>
			<div
				className="flex-1 flex justify-center items-end gap-[8px]"
				style={{
					transform: `${animate ?
						`translateX(${animate === 'right' ? cardWidth + 8 : -(cardWidth + 8)}px)` :
						'translateX(0px)'}`,
					transition: `${animate ? 'transform 0.3s ease' : 'none'}`
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
	const [finalTier, setFinalTier] = useState<number>(tier);
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

	return (
		<div
			className={`flex-1 p-2 flex flex-col justify-start items-center gap-2 border-2 border-bg border-b-0 rounded-t-mode-md text-text bg-primary shadow-mode-sm border-mode-sm ${animate !== '' ? 'card-animation' : ''}`}
			style={{
				width: `${width}px`,
				height: `${100 - (finalTier * 6)}%`,
				transform: `translateY(${(100 * (finalTier * base)) + 1}%)`,
				zIndex: `${20 - finalTier}`
			}}
			onTransitionEnd={(e) => e.stopPropagation()}
		>
			<h2 className="text-center font-mode-header font-bold">{content.title}</h2>
			<img
				src={content.image}
				alt=""
				className="p-1 rounded-mode-sm bg-white border-mode-sm shadow-mode-sm"
			/>
			<p className="p-2 max-[500px]:leading-[16px]">{content.text}</p>
		</div>
	);
}

export default Carousel;
