import React, { useState, useEffect } from "react";
import { useQuery } from "urql";
import { GET_PRODUCTS } from "graphql/query";
import { GET_FEEDBACKS } from "graphql/query";
import Link from "next/link";
import styled from "styled-components";
import HeroSedtion from "components/HeroSection";
import Testimonial from "components/Testimonial";
import Product from "components/Product";

// function SampleNextArrow(props) {
// 	const { className, onClick } = props;
// 	return (
// 		<div className={className} onClick={onClick}>
// 			<FiChevronLeft className="  text-3xl" />
// 		</div>
// 	);
// }

// function SamplePrevArrow(props) {
// 	const { className, onClick } = props;

// 	return (
// 		<div className={className} onClick={onClick}>
// 			<FiChevronRight className="  text-3xl" />
// 		</div>
// 	);
// }

export default function Home() {
	//For react-slick-slider
	// const settings = {
	// 	dots: true,
	// 	infinite: true,
	// 	speed: 500,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	autoplay: true,
	// 	autoplaySpeed: 3000,
	// 	nextArrow: <SampleNextArrow />,
	// 	prevArrow: <SamplePrevArrow />,
	// 	// initialSlide: 0,
	// 	responsive: [
	// 		{
	// 			breakpoint: 720,
	// 			settings: {
	// 				slidesToShow: 2,
	// 				slidesToScroll: 1,
	// 				// initialSlide: 2,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 480,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 			},
	// 		},
	// 	],
	// };

	const [results] = useQuery({
		query: GET_PRODUCTS,
		variables: {
			pagination: { limit: 3 },
		},
	});
	const { data, fetching, error } = results;

	const [latest] = useQuery({
		query: GET_PRODUCTS,
		variables: {
			sort: "createdAt:desc",
			pagination: { limit: 3 },
		},
	});
	const {
		data: latestData,
		fetching: latestFetching,
		error: latestError,
	} = latest;

	const products = data?.products.data;
	const lastestProducts = latestData?.products.data;

	const [feedbacks] = useQuery({
		query: GET_FEEDBACKS,
	});
	const {
		data: feedback,
		fetching: feedbackFetching,
		error: feedbackError,
	} = feedbacks;
	const comment = feedback?.feedbacks?.data;
	return (
		<>
			<HeroSedtion />
			<main>
				<section className="mt-5">
					<div className="flex justify-between">
						<h1 className="mb-4 text-xl font-bold text-center mt-3">
							All Collection
						</h1>
						<div>
							<Link className="mt-2 mb-4 btn btn-neutral" href="/products">
								See more
							</Link>
						</div>
					</div>
					<ProductGallery>
						{error ? (
							<p>{error.message}</p>
						) : !fetching ? (
							products.map((product) => (
								<Product key={product.attributes.slug} product={product} />
							))
						) : null}
					</ProductGallery>
				</section>
				<section className="mt-8">
					<div className="flex justify-between">
						<h1 className="mb-2 text-xl font-bold text-center">
							Latest Collection
						</h1>
						<div>
							<Link className="mb-5 btn  btn-neutral" href="/products">
								See more
							</Link>
						</div>
					</div>
					<ProductGallery className=" rounded-3xl ">
						{latestError ? (
							<p>{error.message}</p>
						) : !latestFetching ? (
							lastestProducts.map((product) => (
								<Product key={product.attributes.slug} product={product} />
							))
						) : null}
					</ProductGallery>
				</section>
			</main>
			<Testimonial />
			{/* <div className=" mx-auto ">
				<h2>Our Testimonial</h2>
				<Slider {...settings}>
					{comment?.map((feedback, feedbackIndex) => {
						return (
							<div key={feedback.id}>
								<p className="title">{feedback.attributes.review}</p>
							</div>
						);
					})}
				</Slider>
			</div> */}
		</>
	);
}

const ProductGallery = styled.div`
	/* display: grid; */
	/*  fraction  */
	/* grid-template-columns: repeat(auto-fit, minmax(12rem, 18rem));
  grid-gap: 2rem; */
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 2rem;
`;
const Button = styled.div`
	backgroud-color: #717171;
	color: #fff;
	display: flex;
	justify-content: center;
`;
