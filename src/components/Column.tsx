import type { JSX } from "react";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import {
	FaCircleInfo,
	FaHammer,
	FaLinkedin,
	FaRegStar,
	FaStar
} from "react-icons/fa6";
import { IoMdListBox } from "react-icons/io";
import {
	columnCompanyData,
	columnImageUrls,
	columnReviewData,
	columnTestimonialData
} from "../data";
import type { ColumnReviewInterface } from "../types";
import { faker } from "@faker-js/faker";

export default function Column() {
	const product = {
		name: 'New Product'
	};

	return (
		<div className="flex-1 w-full max-w-[1400px] mx-auto p-2 pt-0 flex flex-col gap-2 relative scroll-mode overflow-y-auto 700:overflow-y-hidden text-text 700:flex-row transition-all duration-300 ease-out">
			<div
				className="flex-1 pt-2 flex flex-col gap-2 700:min-w-[400px] 700:pr-2 700:pb-10 700:overflow-y-auto 700:order-2 scroll-mode"
			>
				<Product product={product} />
				<Details product={product} />
				<Testimonial product={product} />
				<Companies product={product} />
			</div>

			<div
				className="p-2 mb-[60px] flex flex-col gap-2 rounded-mode-md bg-primary leading-[18px] 700:overflow-y-auto 700:m-0 700:sticky 700:top-[60px] 700:left-0 700:order-1 700:max-w-[280px] 700:max-h-[80%] border-mode-sm shadow-mode-sm scroll-mode"
			>
				<div className="px-2 rounded-mode-sm bg-bg border-mode-sm">
					<h2 className="text-2xl text-center font-mode-header font-bold">REVIEWS</h2>
				</div>
				<div className="flex flex-col gap-2">
					{columnReviewData.map(x => {
						return <Review content={x} />;
					})}
				</div>
			</div>

			<Footer />
		</div>
	);
}

function Product({ product }: { product: { name: string } }) {
	return (
		<div className="w-full flex flex-col gap-2 p-2 rounded-mode-sm bg-primary border-mode-sm shadow-mode-sm">
			<div className="px-2 rounded-mode-sm bg-bg border-mode-sm">
				<h2 className="text-center font-mode-header text-2xl font-bold">{`Introducing ${product.name}`}</h2>
			</div>
			<div className="flex flex-col items-center gap-2 min-[1000px]:flex-row min-[1000px]:items-start">
				<div className="flex flex-col gap-1">
					<img
						src={columnImageUrls[Math.floor(Math.random() * columnImageUrls.length)]}
						alt=""
						className="min-w-[300px] rounded-mode-sm  border-mode-sm"
					/>
					<h3 className="font-bold">{product.name}</h3>
				</div>
				<p className="px-2">Aliquam sem tellus, pellentesque id ipsum non, rhoncus dapibus lacus. Fusce interdum felis odio, in tincidunt tellus dignissim ut. Etiam placerat molestie imperdiet. Pellentesque ac eros sollicitudin, elementum justo ac, luctus leo. Aenean id massa ac orci sollicitudin tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur egestas sodales bibendum. Nunc fermentum diam enim, non imperdiet arcu congue et. Suspendisse at dictum orci. Donec tincidunt a nisl vel luctus. Cras lobortis venenatis neque, vel hendrerit tellus. Nam id pretium mi.</p>
			</div>
		</div>
	);
}

function Details({ product }: { product: { name: string } }) {
	const n = [1, 2, 3];
	return (
		<div className="w-full p-2 flex flex-col gap-2 rounded-mode-sm leading-[18px] bg-primary border-mode-sm shadow-mode-sm">
			<div className="px-2 rounded-mode-sm bg-bg border-mode-sm">
				<h2 className="text-center font-mode-header text-2xl font-bold">{`${product.name} specifications`}</h2>
			</div>
			<div className="flex flex-wrap gap-2">
				{
					n.map(() => {
						return <ul className="pl-4 list-disc list-inside">
							<li>{faker.company.catchPhrase()}</li>
							<li>{faker.company.catchPhrase()}</li>
							<li>{faker.company.catchPhrase()}</li>
							<li>{faker.company.catchPhrase()}</li>
							<li>{faker.company.catchPhrase()}</li>
							<li>{faker.company.catchPhrase()}</li>
							<li>{faker.company.catchPhrase()}</li>
							<li>{faker.company.catchPhrase()}</li>
						</ul>;
					})
				}
			</div>
			<div className="flex flex-wrap">
				<ul className="flex-1 m-1 p-2 list-disc list-inside rounded-mode-sm bg-bg border-mode-sm mode-transform">
					<h3 className="font-bold">Product Details</h3>
					<li>{`Length: ${faker.number.int({ min: 20, max: 160 })}cm`}</li>
					<li>{`Width: ${faker.number.int({ min: 20, max: 160 })}cm`}</li>
					<li>{`Height: ${faker.number.int({ min: 20, max: 160 })}cm`}</li>
					<li>{`Weight: ${faker.number.int({ min: 20, max: 90 })}kg`}</li>
				</ul>
				<ul className="flex-1 m-1 p-2 list-disc list-inside rounded-mode-sm bg-bg border-mode-sm mode-transform">
					<h3 className="font-bold">Product Details</h3>
					<li>Max resolution: 1980x1080 Pixels</li>
					<li>Memory speed: 3200 MHz</li>
					<li>{`Storage capacity: ${faker.number.int({ min: 200, max: 800 })} GB`}</li>
					<li>Color: Matte black</li>
				</ul>
			</div>
		</div>
	);
}

function Testimonial({ product }: { product: { name: string } }) {
	return (
		<div className="w-full p-2 flex flex-col gap-2 rounded-mode-sm bg-primary border-mode-sm shadow-mode-sm">
			<div className="px-2 rounded-mode-sm bg-bg border-mode-sm">
				<h2 className="text-center font-mode-header text-2xl font-bold">{`People can't get enought of ${product.name}!`}</h2>
			</div>
			<div className="p-4 flex justify-center items-start flex-wrap gap-4 700:flex-row">
				{columnTestimonialData.map(x => {
					return (
						<div className="max-w-[300px] flex flex-col gap-1 items-center">
							<img
								src={x.image}
								alt=""
								className="size-[200px] rounded-mode-md border-mode-sm mode-transform"
							/>
							<p>{x.text}</p>
							<p className="self-start font-bold">{`~ ${x.name}`}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

function Companies({ product }: { product: { name: string } }) {
	return (
		<div className="w-full p-2 flex flex-col rounded-mode-sm bg-primary border-mode-sm shadow-mode-sm">
			<div className="px-2 rounded-mode-sm bg-bg border-mode-sm">
				<h2 className="text-center font-mode-header text-2xl font-bold">
					{`Only a few of the companies that rely on ${product.name} everyday!`}
				</h2>
			</div>
			<div className="p-4 flex flex-wrap justify-center items-center gap-2">
				{columnCompanyData.map(x => {
					return <div className="size-[80px] p-1 flex justify-center items-center gap-1 rounded-mode-sm bg-bg border-mode-sm mode-transform">
						<img
							src={x.iconUrl}
							alt={`${x.companyName} logo`}
							className="w-full"
							title={x.companyName}
						/>
					</div>;
				})}
			</div>
		</div>
	);
}

function Footer() {
	return (
		<footer className="self-center p-2 flex justify-center gap-2 order-3 rounded-mode-md bg-primary 700:m-0 700:mt-2 700:flex-col 700:self-start border-mode-sm shadow-mode-sm">
			<button
				title="about"
			>
				<FaCircleInfo className="footer-btn" />
			</button>
			<button
				title="contact us"
			>
				<IoMdListBox className="footer-btn" />
			</button>
			<button
				title="jobs"
			>
				<FaHammer className="footer-btn" />
			</button>
			<button
				title="twitter link"
			>
				<FaTwitterSquare className="footer-btn" />
			</button>
			<button
				title="facebook link"
			>
				<FaFacebookSquare className="footer-btn" />
			</button>
			<button
				title="linkedIn"
			>
				<FaLinkedin className="footer-btn" />
			</button>
		</footer>
	);
}

function Review({ content }: { content: ColumnReviewInterface }) {
	function createScore(n: number): JSX.Element {
		const x = [];

		for (let i = 0; i < 5; i++) {
			if (i < n) {
				x.push(<FaStar />);
			} else x.push(<FaRegStar />);
		}

		return <div className="flex gap-1 text-text">{x}</div>;
	}

	return (
		<div className="p-2 mode-transform flex flex-col gap-1 rounded-mode-sm bg-bg border-mode-sm">
			<div className="flex items-center gap-2">
				<img
					src={content.pfp}
					alt={`${content.username}s pfp`}
					className="size-[40px] rounded-full"
				/>
				<div
					className="pr-2 font-mode-sub-header text-ellipsis overflow-hidden"
				>
					{content.username}
				</div>
			</div>
			<div className="flex flex-col">
				<div>{createScore(content.score)}</div>
				<div className="font-bold">{content.header}</div>
			</div>
			<div className="">
				{content.text}
			</div>
		</div>
	);
}
