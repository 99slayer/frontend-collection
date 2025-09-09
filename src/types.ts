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
	username: string;
	score: number;
	header: string;
	text: string;
}

export interface ColumnTestimonialInterface {
	text: string;
}

export interface ColumnCompanyInterface {
	companyName: string;
}

export interface CarouselInterface {
	title: string;
	text: string;
}
