import type { MessageInterface, ThemeInterface } from "./types";

export const messageData: MessageInterface[] = [
	{
		userId: 12,
		username: "user-1",
		timestamp: "10:30 AM",
		text: "placeholder",
	},
	{
		userId: 117,
		username: "user-2",
		timestamp: "10:35 AM",
		text: "placeholder",
	}
];

export const themeData: ThemeInterface[] = [
	{
		name: 'default',
		themeMain: 'bg-theme-default'
	},
	{
		name: 'one',
		themeMain: 'bg-theme-one'
	},
	{
		name: 'two',
		themeMain: 'bg-theme-two'
	},
	{
		name: 'three',
		themeMain: 'bg-theme-three'
	},
	{
		name: 'four',
		themeMain: 'bg-theme-four'
	},
	{
		name: 'five',
		themeMain: 'bg-theme-five'
	},
];
