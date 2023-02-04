import React, { useState, useEffect } from "react";
import { useQuery } from "urql";
import { GET_PRODUCTS } from "graphql/query";
import { GET_FEEDBACKS } from "graphql/query";
import Link from "next/link";
import styled from "styled-components";
import HeroSedtion from "components/HeroSection";
import Product from "components/Product";
import Test from "components/Testimonials";

export default function Home() {
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
						<h1 className="mb-2 text-xl font-bold text-center">New Arrivals</h1>
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

			<section className="container mx-auto border rounded-3xl rounded-t-3xl ring-offset-4 shadow-xl hover:shadow-lg">
				<Test />
			</section>
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
