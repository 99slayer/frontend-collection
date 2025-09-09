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

export const columnReviewData: ColumnReviewInterface[] = [
	{
		username: 'JOHN SMITH',
		score: 4,
		header: 'Vestibulum molestie purus in diam feugiat luctus.',
		text: 'Suspendisse mollis quam a orci accumsan viverra. Etiam vel consectetur nibh, a egestas risus. Fusce fermentum ligula velit. Proin quis maximus magna. Aliquam maximus viverra nibh at efficitur. Vestibulum molestie purus in diam feugiat luctus.',
	},
	{
		username: 'MARRY JENKINS',
		score: 5,
		header: 'Vestibulum at aliquam augue.',
		text: 'Vestibulum at aliquam augue. In sit amet lectus euismod, tristique turpis in, bibendum velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non hendrerit eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer molestie magna mattis, vulputate nisl non, pulvinar ligula. Etiam ligula enim, aliquet vel risus id, auctor ullamcorper tortor. Curabitur sed est nec quam cursus porttitor.',
	},
	{
		username: 'BOB MCBRIAN',
		score: 3,
		header: 'Fusce tempus nibh accumsan aliquet consectetur.',
		text: 'Fusce tempus nibh accumsan aliquet consectetur. Vivamus vitae ipsum tempor, consequat justo id, interdum risus.',
	},
	{
		username: 'JOE LEE',
		score: 10,
		header: 'Fusce tempus nibh accumsan aliquet consectetur.',
		text: 'Fusce tempus nibh accumsan aliquet consectetur. Vivamus vitae ipsum tempor, consequat justo id, interdum risus.',
	},
	{
		username: 'TAMMY OLSON',
		score: 2,
		header: 'Fusce tempus nibh accumsan aliquet consectetur.',
		text: 'Vivamus vitae ipsum tempor, consequat justo id, interdum risus.',
	},
];

export const columnTestimonialData: ColumnTestimonialInterface[] = [
	{
		text: 'This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial.'
	},
	{
		text: 'This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial.'
	},
	{
		text: 'This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial. This is a testimonial.'
	}
];

export const columnCompanyData: ColumnCompanyInterface[] = [
	{
		companyName: 'COMPANY NAME'
	},
	{
		companyName: 'COMPANY NAME'
	},
	{
		companyName: 'COMPANY NAME'
	}
];

export const carouselData: CarouselInterface[] = [
	{
		title: '1',
		text: 'one'
	},
	{
		title: '2',
		text: 'two'
	},
	{
		title: '3',
		text: 'three'
	},
	{
		title: '4',
		text: 'four'
	},
	{
		title: '5',
		text: 'five'
	},
	{
		title: '6',
		text: 'six'
	},
	{
		title: '7',
		text: 'seven'
	},
	{
		title: '8',
		text: 'eight'
	},
	{
		title: '9',
		text: 'nine'
	},
	{
		title: '10',
		text: 'ten'
	},
	{
		title: '11',
		text: 'eleven'
	},
	{
		title: '12',
		text: 'twelve'
	},
];
