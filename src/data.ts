import { faker } from '@faker-js/faker';
import QuickChart from 'quickchart-js';
import type {
	MessageInterface,
	CarouselInterface,
	ThemeInterface,
	ColumnTestimonialInterface,
	ColumnCompanyInterface,
	ColumnReviewInterface
} from "./types";

export const themeData: ThemeInterface[] = [
	{
		name: 'default',
		themeMain: 'bg-theme-default'
	},
	{
		name: 'baby-blue',
		themeMain: 'bg-theme-baby-blue'
	},
	{
		name: 'coral',
		themeMain: 'bg-theme-coral'
	},
	{
		name: 'popcorn',
		themeMain: 'bg-theme-popcorn'
	},
	{
		name: 'mint',
		themeMain: 'bg-theme-mint'
	},
	{
		name: 'black-cherry',
		themeMain: 'bg-theme-black-cherry'
	},
];

const user1 = {
	id: 1,
	name: faker.internet.username()
};

const user2 = {
	id: 2,
	name: faker.internet.username()
};

function createMessages(n: number): MessageInterface[] {
	const messages = [];

	for (let i = 0; i < n; i++) {
		const user = i % 2 !== 0 ? user1 : user2;
		const date = new Date(Date.now() + i * 123500);

		messages.push({
			userId: user.id,
			username: user.name,
			timestamp: date.toLocaleTimeString("en-US", {
				hour: "numeric",
				minute: "2-digit",
				hour12: true
			}),
			text: faker.lorem.sentence(),
		});
	}

	return messages;
}

export const messageData: MessageInterface[] = createMessages(40);

export const columnImageUrls = [
	'./images/makeup.jpeg',
	'./images/milk.jpeg',
	'./images/watch.jpeg',
	'./images/lotion.jpg',
	'./images/soap.jpg'
];

export const columnReviewData: ColumnReviewInterface[] = [
	{
		pfp: faker.image.personPortrait(),
		username: faker.internet.username(),
		score: 4,
		header: 'Exactly what I needed.',
		text: 'Works as promised and made things so much easier for me.',
	},
	{
		pfp: faker.image.personPortrait(),
		username: faker.internet.username(),
		score: 5,
		header: 'Smooth experience from start to finish.',
		text: 'The setup was simple and I had no issues getting started.',
	},
	{
		pfp: faker.image.personPortrait(),
		username: faker.internet.username(),
		score: 5,
		header: 'Great value for the price.',
		text: 'I didn’t expect this level of quality, especially at this cost.',
	},
	{
		pfp: faker.image.personPortrait(),
		username: faker.internet.username(),
		score: 10,
		header: 'Reliable and easy to use.',
		text: 'Everything just works the way it should. No complaints here.',
	},
	{
		pfp: faker.image.personPortrait(),
		username: faker.internet.username(),
		score: 4,
		header: 'Surprisingly exceeded my expectations.',
		text: 'I wasn’t sure what to expect, but I’ve been pleasantly surprised.',
	},
	{
		pfp: faker.image.personPortrait(),
		username: faker.internet.username(),
		score: 4,
		header: 'Simple, clean, and effective.',
		text: 'It does exactly what I need without being complicated.',
	},
	{
		pfp: faker.image.personPortrait(),
		username: faker.internet.username(),
		score: 4,
		header: 'Customer support was fantastic.',
		text: 'Any time I had a question, the team was quick to respond.',
	},
	{
		pfp: faker.image.personPortrait(),
		username: faker.internet.username(),
		score: 5,
		header: 'Convenient and reliable.',
		text: 'I use it every day now—it’s become part of my routine.',
	},
	{
		pfp: faker.image.personPortrait(),
		username: faker.internet.username(),
		score: 4,
		header: 'Looks great and performs well.',
		text: 'It’s rare to find something that balances both design and function.',
	},
	{
		pfp: faker.image.personPortrait(),
		username: faker.internet.username(),
		score: 5,
		header: 'Would definitely recommend.',
		text: 'I’ve already told a few friends about it. Totally worth trying.',
	},
];

export const columnTestimonialData: ColumnTestimonialInterface[] = [
	{
		image: faker.image.personPortrait({ sex: 'male' }),
		name: faker.person.fullName({ sex: 'male' }),
		text: "I’ve been looking for something that would make my daily routine less stressful, and this turned out to be the perfect fit. It works consistently and feels like it was designed with real people in mind. I don’t have to overthink it, I just use it and it does what it should every single time."
	},
	{
		image: faker.image.personPortrait({ sex: 'female' }),
		name: faker.person.fullName({ sex: 'female' }),
		text: "From the moment I first tried it, everything felt simple and intuitive. There were no complicated steps, and I didn’t have to spend hours figuring things out. It just worked right out of the box, and that alone made a huge difference for me. I can see myself using this for a long time."
	},
	{
		image: faker.image.personPortrait({ sex: 'male' }),
		name: faker.person.fullName({ sex: 'male' }),
		text: "I wasn’t sure if it would really hold up, especially since the cost was lower than I expected. But after using it for several weeks, I can say it definitely delivers on quality. It feels dependable and doesn’t cut corners. Honestly, I feel like I got more than what I paid for."
	}
];

export const columnCompanyData: ColumnCompanyInterface[] = [
	{
		companyName: faker.company.name(),
		iconUrl: './icons/logoipsum-357.png',
	},
	{
		companyName: faker.company.name(),
		iconUrl: './icons/logoipsum-361.png',
	},
	{
		companyName: faker.company.name(),
		iconUrl: './icons/logoipsum-371.png',
	},
	{
		companyName: faker.company.name(),
		iconUrl: './icons/logoipsum-374.png',
	},
	{
		companyName: faker.company.name(),
		iconUrl: './icons/logoipsum-381.png',
	},
	{
		companyName: faker.company.name(),
		iconUrl: './icons/logoipsum-384.png',
	},
	{
		companyName: faker.company.name(),
		iconUrl: './icons/logoipsum-392.png',
	},
	{
		companyName: faker.company.name(),
		iconUrl: './icons/logoipsum-394.png',
	},
	{
		companyName: faker.company.name(),
		iconUrl: './icons/logoipsum-397.png',
	},
	{
		companyName: faker.company.name(),
		iconUrl: './icons/logoipsum-403.png',
	},
	{
		companyName: faker.company.name(),
		iconUrl: './icons/logoipsum-327.png',
	},
	{
		companyName: faker.company.name(),
		iconUrl: './icons/logoipsum-295.png',
	},
	{
		companyName: faker.company.name(),
		iconUrl: './icons/logoipsum-300.png',
	},
	{
		companyName: faker.company.name(),
		iconUrl: './icons/logoipsum-274.png',
	},
];

function createChart(): string {
	const chartTypes = ['bar', 'line', 'radar', 'pie', 'doughnut', 'polarArea'];
	const chart = new QuickChart();
	const labelCount = faker.number.int({ min: 3, max: 4 });
	const chosenType = chartTypes[faker.number.int({ max: chartTypes.length - 1 })];

	function getDataset(pointCount: number): { label: string; data: number[]; } {
		return {
			label: faker.word.noun(),
			data: [...Array(pointCount)].map(() => { return faker.number.int({ min: 0, max: 1000 }); })
		};
	};

	chart.setConfig({
		type: chosenType,
		data: {
			labels: [...Array(labelCount)].map(() => { return faker.word.noun(); }),
			datasets: [...Array(labelCount)].map(() => { return getDataset(labelCount); })
		}
	});

	return chart.getUrl();
}

export const carouselData: CarouselInterface[] = [
	{
		title: (faker.word.adjective() + ' ' + faker.word.noun() + ' ' + 'graph').toUpperCase(),
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nulla semper purus mattis mattis. Mauris volutpat laoreet sollicitudin. Fusce quis dolor nunc. Proin quis neque nec sapien pellentesque pretium. Sed non purus magna. Praesent auctor porttitor erat, at cursus nibh iaculis quis. Quisque iaculis est sed lacus placerat dapibus. Integer tincidunt eros nec est lacinia semper nec tincidunt eros. Quisque sed eros vel neque lacinia scelerisque. Nullam neque nibh, bibendum sit amet pretium et, commodo eu ante. Maecenas sed felis nec ipsum aliquam tempor.',
		image: createChart()
	},
	{
		title: (faker.word.adjective() + ' ' + faker.word.noun() + ' ' + 'graph').toUpperCase(),
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nulla semper purus mattis mattis. Mauris volutpat laoreet sollicitudin. Fusce quis dolor nunc. Proin quis neque nec sapien pellentesque pretium. Sed non purus magna. Praesent auctor porttitor erat, at cursus nibh iaculis quis. Quisque iaculis est sed lacus placerat dapibus. Integer tincidunt eros nec est lacinia semper nec tincidunt eros. Quisque sed eros vel neque lacinia scelerisque. Nullam neque nibh, bibendum sit amet pretium et, commodo eu ante. Maecenas sed felis nec ipsum aliquam tempor.',
		image: createChart()
	},
	{
		title: (faker.word.adjective() + ' ' + faker.word.noun() + ' ' + 'graph').toUpperCase(),
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nulla semper purus mattis mattis. Mauris volutpat laoreet sollicitudin. Fusce quis dolor nunc. Proin quis neque nec sapien pellentesque pretium. Sed non purus magna. Praesent auctor porttitor erat, at cursus nibh iaculis quis. Quisque iaculis est sed lacus placerat dapibus. Integer tincidunt eros nec est lacinia semper nec tincidunt eros. Quisque sed eros vel neque lacinia scelerisque. Nullam neque nibh, bibendum sit amet pretium et, commodo eu ante. Maecenas sed felis nec ipsum aliquam tempor.',
		image: createChart()
	},
	{
		title: (faker.word.adjective() + ' ' + faker.word.noun() + ' ' + 'graph').toUpperCase(),
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nulla semper purus mattis mattis. Mauris volutpat laoreet sollicitudin. Fusce quis dolor nunc. Proin quis neque nec sapien pellentesque pretium. Sed non purus magna. Praesent auctor porttitor erat, at cursus nibh iaculis quis. Quisque iaculis est sed lacus placerat dapibus. Integer tincidunt eros nec est lacinia semper nec tincidunt eros. Quisque sed eros vel neque lacinia scelerisque. Nullam neque nibh, bibendum sit amet pretium et, commodo eu ante. Maecenas sed felis nec ipsum aliquam tempor.',
		image: createChart()
	},
	{
		title: (faker.word.adjective() + ' ' + faker.word.noun() + ' ' + 'graph').toUpperCase(),
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nulla semper purus mattis mattis. Mauris volutpat laoreet sollicitudin. Fusce quis dolor nunc. Proin quis neque nec sapien pellentesque pretium. Sed non purus magna. Praesent auctor porttitor erat, at cursus nibh iaculis quis. Quisque iaculis est sed lacus placerat dapibus. Integer tincidunt eros nec est lacinia semper nec tincidunt eros. Quisque sed eros vel neque lacinia scelerisque. Nullam neque nibh, bibendum sit amet pretium et, commodo eu ante. Maecenas sed felis nec ipsum aliquam tempor.',
		image: createChart()
	},
	{
		title: (faker.word.adjective() + ' ' + faker.word.noun() + ' ' + 'graph').toUpperCase(),
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nulla semper purus mattis mattis. Mauris volutpat laoreet sollicitudin. Fusce quis dolor nunc. Proin quis neque nec sapien pellentesque pretium. Sed non purus magna. Praesent auctor porttitor erat, at cursus nibh iaculis quis. Quisque iaculis est sed lacus placerat dapibus. Integer tincidunt eros nec est lacinia semper nec tincidunt eros. Quisque sed eros vel neque lacinia scelerisque. Nullam neque nibh, bibendum sit amet pretium et, commodo eu ante. Maecenas sed felis nec ipsum aliquam tempor.',
		image: createChart()
	},
	{
		title: (faker.word.adjective() + ' ' + faker.word.noun() + ' ' + 'graph').toUpperCase(),
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nulla semper purus mattis mattis. Mauris volutpat laoreet sollicitudin. Fusce quis dolor nunc. Proin quis neque nec sapien pellentesque pretium. Sed non purus magna. Praesent auctor porttitor erat, at cursus nibh iaculis quis. Quisque iaculis est sed lacus placerat dapibus. Integer tincidunt eros nec est lacinia semper nec tincidunt eros. Quisque sed eros vel neque lacinia scelerisque. Nullam neque nibh, bibendum sit amet pretium et, commodo eu ante. Maecenas sed felis nec ipsum aliquam tempor.',
		image: createChart()
	},
	{
		title: (faker.word.adjective() + ' ' + faker.word.noun() + ' ' + 'graph').toUpperCase(),
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nulla semper purus mattis mattis. Mauris volutpat laoreet sollicitudin. Fusce quis dolor nunc. Proin quis neque nec sapien pellentesque pretium. Sed non purus magna. Praesent auctor porttitor erat, at cursus nibh iaculis quis. Quisque iaculis est sed lacus placerat dapibus. Integer tincidunt eros nec est lacinia semper nec tincidunt eros. Quisque sed eros vel neque lacinia scelerisque. Nullam neque nibh, bibendum sit amet pretium et, commodo eu ante. Maecenas sed felis nec ipsum aliquam tempor.',
		image: createChart()
	},
	{
		title: (faker.word.adjective() + ' ' + faker.word.noun() + ' ' + 'graph').toUpperCase(),
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nulla semper purus mattis mattis. Mauris volutpat laoreet sollicitudin. Fusce quis dolor nunc. Proin quis neque nec sapien pellentesque pretium. Sed non purus magna. Praesent auctor porttitor erat, at cursus nibh iaculis quis. Quisque iaculis est sed lacus placerat dapibus. Integer tincidunt eros nec est lacinia semper nec tincidunt eros. Quisque sed eros vel neque lacinia scelerisque. Nullam neque nibh, bibendum sit amet pretium et, commodo eu ante. Maecenas sed felis nec ipsum aliquam tempor.',
		image: createChart()
	},
	{
		title: (faker.word.adjective() + ' ' + faker.word.noun() + ' ' + 'graph').toUpperCase(),
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nulla semper purus mattis mattis. Mauris volutpat laoreet sollicitudin. Fusce quis dolor nunc. Proin quis neque nec sapien pellentesque pretium. Sed non purus magna. Praesent auctor porttitor erat, at cursus nibh iaculis quis. Quisque iaculis est sed lacus placerat dapibus. Integer tincidunt eros nec est lacinia semper nec tincidunt eros. Quisque sed eros vel neque lacinia scelerisque. Nullam neque nibh, bibendum sit amet pretium et, commodo eu ante. Maecenas sed felis nec ipsum aliquam tempor.',
		image: createChart()
	},
	{
		title: (faker.word.adjective() + ' ' + faker.word.noun() + ' ' + 'graph').toUpperCase(),
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nulla semper purus mattis mattis. Mauris volutpat laoreet sollicitudin. Fusce quis dolor nunc. Proin quis neque nec sapien pellentesque pretium. Sed non purus magna. Praesent auctor porttitor erat, at cursus nibh iaculis quis. Quisque iaculis est sed lacus placerat dapibus. Integer tincidunt eros nec est lacinia semper nec tincidunt eros. Quisque sed eros vel neque lacinia scelerisque. Nullam neque nibh, bibendum sit amet pretium et, commodo eu ante. Maecenas sed felis nec ipsum aliquam tempor.',
		image: createChart()
	},
	{
		title: (faker.word.adjective() + ' ' + faker.word.noun() + ' ' + 'graph').toUpperCase(),
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nulla semper purus mattis mattis. Mauris volutpat laoreet sollicitudin. Fusce quis dolor nunc. Proin quis neque nec sapien pellentesque pretium. Sed non purus magna. Praesent auctor porttitor erat, at cursus nibh iaculis quis. Quisque iaculis est sed lacus placerat dapibus. Integer tincidunt eros nec est lacinia semper nec tincidunt eros. Quisque sed eros vel neque lacinia scelerisque. Nullam neque nibh, bibendum sit amet pretium et, commodo eu ante. Maecenas sed felis nec ipsum aliquam tempor.',
		image: createChart()
	},
];
