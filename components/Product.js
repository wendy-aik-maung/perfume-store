import Styled from "daisyui/dist/styled";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Product = ({ product }) => {
	const { title, price, image, slug, width, height } = product.attributes;
	return (
		<ProductStyled className="transition rounded-3xl rounded-t-3xl ring-offset-4 shadow-xl hover:shadow-lg">
			<Link href={`/products/${slug}`}>
				<Styledimg>
					{/* <img
						className="transition duration-300 hover:scale-105"
						src={image?.data?.attributes?.formats?.small?.url}
						alt={title}
					/> */}
					<Image
						className="transition duration-300 hover:scale-105"
						width="240"
						height="240"
						src={image?.data?.attributes?.formats?.small?.url}
						alt={title}
					/>
				</Styledimg>
			</Link>
			<Label className="text-center">
				<h2>{title}</h2>
				<h3>${price}.0</h3>
			</Label>
		</ProductStyled>
	);
};

export default Product;
const ProductStyled = styled.div`
	width: 18rem;
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 1.5rem;
	cursor: pointer;
	background: white;
	img {
		width: 100%;
		object-fit: cover;
		max-height: 200px;
	}
	h2 {
		padding: 0.5rem 0;
	}
`;
const Styledimg = styled.figure``;
const Label = styled.div`
	h2 {
		font-weight: bold;
	}
	h3 {
		color: red;
		font-weight: bold;
	}
`;
