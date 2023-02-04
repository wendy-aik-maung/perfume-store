import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
// import styles from "./slick.css";
import { useQuery } from "urql";
import { GET_FEEDBACKS } from "graphql/query";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import test from "public/test1.jpg";
function SampleNextArrow(props) {
	const { className, onClick } = props;
	return (
		<div className={className} onClick={onClick}>
			<FiChevronLeft className="  text-3xl" sixe={30} />
		</div>
	);
}

function SamplePrevArrow(props) {
	const { className, onClick } = props;

	return (
		<div className={className} onClick={onClick}>
			<FiChevronRight className="  text-3xl" sixe={30} />
		</div>
	);
}
const Test = () => {
	const [feedbacks] = useQuery({
		query: GET_FEEDBACKS,
	});
	const {
		data: feedback,
		fetching: feedbackFetching,
		error: feedbackError,
	} = feedbacks;
	const comment = feedback?.feedbacks?.data;

	const settings = {
		dots: true,
		arrows: true,
		infinite: true,
		autoplay: true,
		speed: 3000,
		autoplaySpeed: 4000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		// initialSlide: 0,
		responsive: [
			{
				breakpoint: 720,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					// initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="container mx-auto mt-20 border rounded-xl shadow-2xl  h-96">
			<div
				className="card-body w-full h-full bg-cover  bg-transparent "
				style={{ backgroundImage: `url('${test.src}')`, opacity: "0.5" }}>
				<h2 className="text-3xl font-bold mt-3 text-center underline">
					Customer Reviews
				</h2>
				<div className="text-2xl font-semibold mt-10  border  bg-neutral bg-transparent">
					<Slider {...settings}>
						{comment?.map((feedback, feedbackIndex) => (
							<div key={feedback.id}>
								<div className="text-2xl font-semibold mb-20 mx-auto px-10">
									&quot;{feedback.attributes.review}&quot;
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default Test;
