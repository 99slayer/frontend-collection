import React, {
	useEffect,
	useRef,
	useState,
	type JSX
} from "react";
import { messageData } from "../data";
import type { MessageInterface } from "../types";
import { faker } from "@faker-js/faker";

export default function Chat() {
	const ref = useRef<HTMLDivElement>(null);
	const [messages, setMessages] = useState<JSX.Element[]>([]);
	const [responding, setResponding] = useState<boolean>(true);

	useEffect(() => {
		if (messages.length === messageData.length) {
			setResponding(false);
			const resetTimer = setTimeout(() => {
				setMessages([]);
			}, 300);

			return () => {
				clearTimeout(resetTimer);
			};
		}

		const messageInterval = setInterval(() => {
			setResponding(false);
			setMessages([
				...messages,
				<Message key={messages.length} content={messageData[messages.length]} />
			]);
		}, faker.number.int({ min: 1000, max: 2000 }));

		const loaderTimer = setTimeout(() => {
			setResponding(true);
		}, 500);

		return () => {
			clearInterval(messageInterval);
			clearTimeout(loaderTimer);
		};
	}, [messages]);

	useEffect(() => {
		ref.current!.scrollTop = 100000;
	}, [responding]);

	return (
		<div
			ref={ref}
			className="max-w-[1000px] w-[100%] mx-auto overflow-hidden"
		>
			<div className="min-h-full p-6 flex flex-col gap-4 bg-bg-alt border-mode-sm border-y-none">
				{messages}
				{responding ? <ResponseIndicator /> : <div className="h-[26px]"></div>}
			</div>
		</div>
	);
}

function Message({ content }: { content: MessageInterface }) {
	const ref: React.RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const x = setTimeout(() => {
			ref.current!.classList.remove('hidden-user-1');
			ref.current!.classList.remove('hidden-user-2');
		}, 100);

		return () => clearTimeout(x);
	}, []);

	return (
		<div
			ref={ref}
			className={`message ${content.userId === Number(import.meta.env.VITE_USER_ID)
				? "self-end hidden-user-1"
				: "self-start hidden-user-2"
				} text-text rounded-mode-md border-mode-sm shadow-mode-sm mode-transform`}
		>
			<header className="mx-2 flex flex-wrap justify-between rounded-mode-sm font-mode-sub-header font-bold bg-primary border-mode-sm">
				<h3>{content.username}</h3>
				<h3>{content.timestamp}</h3>
			</header>
			<p className="p-2">{content.text}</p>
		</div>
	);
}

function ResponseIndicator() {
	return (
		<div className="mt-auto h-[26px] justify-self-center self-center p-[8px] flex gap-1 rounded-full bg-primary border-mode-sm">
			<div className="loader loader-1"></div>
			<div className="loader loader-2"></div>
			<div className="loader loader-3"></div>
		</div>
	);
}
