import React, {
	useEffect,
	useRef,
	useState,
	type JSX
} from "react";
import { messageData } from "../data";
import type { MessageInterface } from "../types";

export default function Chat() {
	const [messages, setMessages] = useState<JSX.Element[]>([]);
	const [responding, setResponding] = useState<boolean>(true);

	useEffect(() => {
		if (messages.length === messageData.length) {
			setResponding(false);
			return;
		}

		// message timer
		const interval = setInterval(() => {
			setResponding(false);
			setMessages([
				...messages,
				<Message key={messages.length} content={messageData[messages.length]} />
			]);
		}, 2000);

		// loader timer
		const timeout = setTimeout(() => {
			setResponding(true);
		}, 500);

		return () => {
			clearInterval(interval);
			clearTimeout(timeout);
		};
	}, [messages]);

	return (
		<div className="max-w-[1000px] w-[100%] mx-auto">
			<div className="p-6 flex flex-col gap-6">
				{messages}
				{responding ? <ResponseIndicator /> : <></>}
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
				? "message-user-1 hidden-user-1"
				: "message-user-2 hidden-user-2"
				}`}
		>
			<header className="flex flex-wrap justify-between font-bold">
				<h3>{content.username}</h3>
				<h3>{content.timestamp}</h3>
			</header>
			<p>{content.text}</p>
		</div>
	);
}

function ResponseIndicator() {
	return (
		<div className="justify-self-center self-center p-2 flex gap-1 rounded-full bg-primary">
			<div className="loader loader-1"></div>
			<div className="loader loader-2"></div>
			<div className="loader loader-3"></div>
		</div>
	);
}
