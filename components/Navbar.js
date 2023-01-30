"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiShoppingBag } from "react-icons/hi2";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import { useStoreContext } from "../lib/context";

import Cart from "./Cart";
import UserMenuItem from "./UserMenuItem";

const Navbar = () => {
	const { showCart, setShowCart, totalQuantity } = useStoreContext();
	const [query, setQuery] = useState({
		keywords: "",
	});
	const handleSearch = (e) => {
		setQuery({ keywords: e.target.value });
	};
	return (
		<NavStyled className="container mx-auto">
			<Link href="/" className="ml-10 text-4xl font-bold  font-sans">
				Rememberance
			</Link>

			{/* <div className="input-group">
				<input
					type="text"
					placeholder="Search…"
					// value={searchBook}
					onChange={handleSearch}
					className="input input-bordered"
				/>
				<button className="btn btn-square">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round" 
							strokeLinejoin="round"
							strokeWidth="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</button>
			</div> */}

			<NavItems>
				<UserMenuItem />
				<li
					onClick={() => setShowCart(true)}
					className="p-2 text-red-700 bg-red-100 rounded-lg shadow hover:shadow-md hover:bg-red-200 mr-10">
					{totalQuantity > 0 ? (
						<motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
							{totalQuantity}
						</motion.span>
					) : null}
					<HiShoppingBag />
					{/* <h3>Cart</h3> */}
				</li>
			</NavItems>
			<AnimatePresence>{showCart ? <Cart /> : null}</AnimatePresence>
		</NavStyled>
	);
};

export default Navbar;

const NavStyled = styled.nav`
	min-height: 10vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: auto;
`;

const NavItems = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-around;
	li {
		margin-left: 3rem;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		list-style: none;
		cursor: pointer;
	}
	h3 {
		font-size: 0.75rem;
		padding: 0.25rem;
	}
	svg {
		font-size: 1.5rem;
	}
	span {
		background: #ff2626;
		color: white;
		width: 1.2rem;
		height: 1.2rem;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 0.75rem;
		position: absolute;
		right: -10%;
		top: -20%;
		font-weight: 700;
		pointer-events: none;
	}
`;
// const SearchBar = styled.div`
// 	display: flex;
// 	width: 75px;
// `;
// const SearchInput = styled.input`
// 	// padding: 0.5em 5rem;
// `;
