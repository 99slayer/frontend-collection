import type { JSX } from "react";
import messageArr from "../messageData";
import type { MessageInterface } from "../types";

export default function Chat() {
	function createMessages(arr: MessageInterface[]) {
		const elementArr: JSX.Element[] = [];

		for (const x of arr) {
			elementArr.push(<Message key={Math.random()} content={x} />);
		}

		return elementArr;
	}

	return (
		<div className="max-w-[1000px] w-[100%] mx-auto">
			<div className="py-20 px-10 flex flex-col gap-6">
				{createMessages(messageArr)}
			</div>
		</div>
	);
}

function Message({ content }: { content: MessageInterface }) {
	return (
		<div
			className={`message ${content.userId === Number(import.meta.env.VITE_USER_ID)
				? "message-user"
				: "message-nonuser"
				}`}
		>
			<header className="flex justify-between">
				<h3>{content.username}</h3>
				<h3>{content.timestamp}</h3>
			</header>
			<p>{content.text}</p>
		</div>
	);
}
