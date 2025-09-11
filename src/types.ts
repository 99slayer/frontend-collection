export interface ThemeInterface {
	name: string;
	themeMain: string;
}

export interface MessageInterface {
	userId: number;
	username: string;
	timestamp: string;
	text: string;
}

export interface ColumnReviewInterface {
	pfp: string;
	username: string;
	score: number;
	header: string;
	text: string;
}

export interface ColumnTestimonialInterface {
	image: string;
	name: string;
	text: string;
}

export interface ColumnCompanyInterface {
	companyName: string;
	iconUrl: string;
}

export interface CarouselInterface {
	title: string;
	text: string;
	image?: string;
}
