import { css } from "@emotion/css";
import Head from "next/head";
import styled from "styled-components";
import { useQuery } from "urql";
import Product from "components/Product";
import { GET_PRODUCTS, GET_CATEGORIES } from "graphql/query";
import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Container } from "postcss";

const Index = () => {
	const [selectedCategory, setSelectedCategory] = useState(null);

	const [results, reexecuteQuery] = useQuery({
		query: GET_PRODUCTS,
		variables: selectedCategory
			? {
					filters: {
						category: {
							slug: { eq: selectedCategory },
						},
					},
			  }
			: null,
	});
	const { data, fetching, error } = results;
	const [categoryResults] = useQuery({
		query: GET_CATEGORIES,
		variables: {},
	});
	const {
		data: categoryData,
		fetching: categoryFetching,
		error: categoryError,
	} = categoryResults;

	function handleCategorySelect(category) {
		setSelectedCategory(category);
		reexecuteQuery({ requestPolicy: "network-only" });
	}

	return (
		<main className="container mx-auto">
			<Head>
				<title>All Collection by Category</title>
			</Head>
			<div>
				<Category>
					{!categoryFetching && !categoryError ? (
						categoryData.categories.data.map((item, index) => (
							<Tab
								className="tabs tabs-boxed btn-wide p-5 border hover:cursor-pointer bg-none mx-auto rounded-2xl btn-outline align-middle shadow-xl"
								onClick={() => handleCategorySelect(item.attributes.slug)}
								key={item.attributes.slug}>
								{item.attributes.name} Fragrances{" "}
								{index == 0 ? (
									<AiOutlineRight size={21} style={{ marginLeft: "3.3rem" }} />
								) : (
									<AiOutlineRight size={21} style={{ marginLeft: "4.3rem" }} />
								)}
							</Tab>
						))
					) : (
						<p>Loading...</p>
					)}
				</Category>
			</div>
			<CategoryInfo>
				<section className="mt-3">
					<h1 className="mb-5 font-semibold text-2xl text-center">
						Products by Category
					</h1>
					<ProductGallery>
						{!fetching && !error ? (
							data.products.data.map((product) => (
								<Product key={product.attributes.slug} product={product} />
							))
						) : (
							<div>Loading</div>
						)}
					</ProductGallery>
				</section>
			</CategoryInfo>
		</main>
	);
};

export default Index;

const Category = styled.div`
	width: 100%;
	display: flex;
	justify-content: around;
	align-items: center;
	margin: auto;
	margin-bottom: 2rem;
`;
const CategoryInfo = styled.div`
	margin-top: 3rem;
`;

const Tab = styled.div`
background:
color: 
	&:hover {
		color: #64748b;
		background: none;
	}
`;
const ProductGallery = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 2rem;
`;
