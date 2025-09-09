import type { JSX } from "react";
import { FaFacebookSquare, FaTwitterSquare, FaUserCircle } from "react-icons/fa";
import { FaCircleInfo, FaHammer, FaLinkedin, FaRegStar, FaStar } from "react-icons/fa6";
import { IoMdListBox } from "react-icons/io";
import { columnCompanyData, columnReviewData, columnTestimonialData } from "../data";

export default function Column() {
	return (
		<div className="flex-1 w-full max-w-[1400px] mx-auto p-2 flex flex-col gap-2 relative overflow-y-auto 700:flex-row">
			<div
				className="flex-1 flex flex-col gap-2 700:min-w-[400px] 700:pb-10 700:overflow-y-auto 700:order-2"
			>
				<Product />
				<Details />
				<Testimonial />
				<Companies />
			</div>

			<div
				className="pb-[100px] flex flex-col gap-2 700:p-0 700:sticky 700:top-[60px] 700:left-0 700:order-1 700:max-w-[280px] 700:max-h-[80%]"
			>
				<h2 className="text-center font-bold">REVIEWS</h2>
				<div className="flex flex-col gap-2 overflow-y-auto">
					{columnReviewData.map(x => {
						return <Review content={x} />;
					})}
				</div>
			</div>

			<Footer />
		</div>
	);
}

function Product() {
	return (
		<div className="w-full flex flex-col gap-2 p-2 rounded-lg bg-primary">
			<h2 className="text-center font-bold">INTRODUCING THE NEW PRODUCT!</h2>
			<div className="flex flex-col items-center gap-2 min-[1000px]:flex-row min-[1000px]:items-start">
				<div className="flex flex-col gap-1">
					<div className="size-[200px] min-w-[200px] min-h-[200px] rounded-lg bg-white"></div>
					<h3>this is product</h3>
				</div>
				<p className="p-2 pt-0">Aliquam sem tellus, pellentesque id ipsum non, rhoncus dapibus lacus. Fusce interdum felis odio, in tincidunt tellus dignissim ut. Etiam placerat molestie imperdiet. Pellentesque ac eros sollicitudin, elementum justo ac, luctus leo. Aenean id massa ac orci sollicitudin tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur egestas sodales bibendum. Nunc fermentum diam enim, non imperdiet arcu congue et. Suspendisse at dictum orci. Donec tincidunt a nisl vel luctus. Cras lobortis venenatis neque, vel hendrerit tellus. Nam id pretium mi.</p>
			</div>
		</div>
	);
}

function Details() {
	return (
		<div className="w-full p-2 rounded-lg bg-primary">
			<h2 className="text-center font-bold">CHECK OUT THESE SPECS!</h2>
			<ul className="list-disc list-inside text-sm overflow-y-auto">
				<li>Nullam elementum quam ut accumsan rhoncus. Cras convallis posuere placerat. Maecenas in mauris feugiat leo dapibus eleifend. Etiam gravida, erat vel tempor aliquet, leo mi imperdiet erat, eu sollicitudin orci justo sit amet odio. Etiam urna libero, tincidunt in condimentum in, ultrices nec eros.</li>
				<li>Donec ullamcorper elit mattis hendrerit placerat. In hac habitasse platea dictumst.</li>
				<li>Phasellus massa mi, porttitor vitae lacinia non, laoreet eu lacus. Morbi orci ex, vulputate quis dictum ut, aliquam quis sapien. Phasellus ac orci dui. Vestibulum pellentesque tempus nibh, ut interdum velit aliquam eget.</li>
				<li>Fusce rutrum elit vulputate odio tincidunt, tristique commodo lectus malesuada. Sed ac urna ut nibh rhoncus euismod vitae quis nibh. Suspendisse id massa non justo molestie faucibus.</li>
				<li>Sed ut quam sed est vulputate sollicitudin consectetur nec sapien.</li>
				<li className="hidden 700:flex">PRODUCT DEMONSTRATION IMAGE</li>
				<ul className="m-1 p-2 list-disc list-inside text-sm rounded-lg bg-white">
					Dimensions
					<li>Length: 5ft</li>
					<li>Width: 2ft</li>
					<li>Height: 2ft</li>
				</ul>
			</ul>
		</div>
	);
}

function Testimonial() {
	return (
		<div className="w-full p-2 flex flex-col gap-2 rounded-lg bg-primary">
			<h2 className="text-center font-bold">THESE PEOPLE CAN'T GET ENOUGH OF PRODUCT!</h2>
			<div className="flex justify-center items-center flex-wrap gap-2 700:flex-row">
				{columnTestimonialData.map(x => {
					return <div className="max-w-[300px] flex flex-col items-center gap-2">
						<div className="w-[200px] h-[200px] rounded-lg bg-white"></div>
						<p className="p-2">{x.text}</p>
					</div>;
				})}
			</div>
		</div>
	);
}

function Companies() {
	return (
		<div className="w-full p-2 flex flex-col gap-2 rounded-lg bg-primary">
			<h2 className="text-center font-bold">ONLY A FEW OF THE COMPANIES THAT RELY ON PRODUCT EVERYDAY!</h2>
			<div className="flex flex-wrap justify-around items-center gap-2">
				{columnCompanyData.map(x => {
					return <div className="flex flex-col items-center gap-1">
						<div className="w-[200px] h-[200px] rounded-lg bg-white"></div>
						<h3 className="font-bold">{x.companyName}</h3>
					</div>;
				})}
			</div>
		</div>
	);
}

function Footer() {
	return (
		<footer className="self-center p-2 flex justify-center gap-2 order-3 rounded-lg bg-primary 700:m-0 700:flex-col 700:self-start">
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

function Review({ content }: {
	content: {
		username: string,
		score: number,
		header: string,
		text: string
	}
}) {
	function createScore(n: number): JSX.Element {
		const x = [];

		for (let i = 0; i < 5; i++) {
			if (i < n) {
				x.push(<FaStar />);
			} else x.push(<FaRegStar />);
		}

		return <div className="flex gap-1 text-bg">{x}</div>;
	}

	return (
		<div className="p-2 flex flex-col gap-2 rounded-lg bg-primary">
			<div className="flex items-center gap-2">
				<FaUserCircle className="size-[30px] text-bg" />
				<div className="font-bold">{content.username}</div>
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
