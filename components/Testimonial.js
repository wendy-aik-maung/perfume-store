import React from "react";
import styled from "styled-components";
import test from "public/test1.jpg";

const Testimonial = () => {
	return (
		<section className="mt-20 border rounded-xl shadow-2xl">
			<StyledReview className="carousel w-auto h-96">
				<div
					id="slide1"
					className="carousel-item relative w-full bg-transparent">
					<div className="card w-center w-auto rounded-lg align-middle shadow-xl ">
						<div
							className="card-body items-center  bg-cover h-full bg-transparent bg-opacity-50 text-center ml-10 mr-10"
							style={{ backgroundImage: `url('${test.src}')`, opacity: "0.5" }}>
							<h2 className="text-3xl font-bold mt-3 underline">
								Customer Reviews
							</h2>
							<div className="text-2xl font-semibold mt-10 mx-auto border p-3 bg-neutral bg-transparent">
								I love this site with all of the beautiful wide selections of
								perfumes with great prices . I&apos; with my perfumes , I get
								lots of compliments on how nice I smell.
							</div>
						</div>
					</div>

					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide4" className="btn btn-circle">
							❮
						</a>
						<a href="#slide2" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide2" className="carousel-item relative w-full">
					<div className="card w-center w-auto rounded-lg align-middle shadow-xl">
						<div
							className="card-body items-center  bg-cover h-full bg-transparent bg-opacity-50 text-center ml-10 mr-10"
							style={{ backgroundImage: `url('${test.src}')`, opacity: "0.5" }}>
							<h2 className="text-3xl font-bold mt-3 underline">
								Customer Reviews
							</h2>
							<div className="text-2xl font-semibold mt-10 mx-auto  p-3">
								This has to be the best place and the best price of all the old
								school smells that the ladies love! I purchased more than a few
								bottles and Voila! Absolutely impressed with the quality of
								their merchandise.
							</div>
						</div>
					</div>

					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide1" className="btn btn-circle">
							❮
						</a>
						<a href="#slide3" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide3" className="carousel-item relative w-full">
					<div className="card w-center w-auto rounded-lg align-middle shadow-xl">
						<div
							className="card-body items-center  bg-cover h-full  bg-transparent bg-opacity-50 text-center ml-10 mr-10"
							style={{ backgroundImage: `url('${test.src}')`, opacity: "0.5" }}>
							<h2 className="text-3xl font-bold mt-3 underline">
								Customer Reviews
							</h2>
							<div className="text-2xl font-semibold mt-10 mx-auto p-5">
								The delivery was fast and it was also securely packed when it
								came in. The packaging of the perfume itself was super nice and
								it made for a great gift to a loved one.
							</div>
						</div>
					</div>

					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide2" className="btn btn-circle">
							❮
						</a>
						<a href="#slide4" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide4" className="carousel-item relative w-full">
					<div className="card w-center w-auto rounded-lg align-middle shadow-xl">
						<div
							className="card-body items-center  bg-cover h-full  bg-transparent bg-opacity-50 text-center ml-10 mr-10"
							style={{ backgroundImage: `url('${test.src}')`, opacity: "0.5" }}>
							<h2 className="text-3xl font-bold mt-3 underline">
								Customer Reviews
							</h2>
							<div className="text-2xl font-semibold mt-10 mx-auto p-3 border bg-transparent">
								Excellent variety. I would recommend this for anyone who wants
								to try a perfume without breaking the bank or being stuck with a
								scent that you cannot stand. You can spray the card and let the
								scent dry down to get a true scent experience. With the variety,
								there will be scents you love and some you will hate.
							</div>
						</div>
					</div>

					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide3" className="btn btn-circle">
							❮
						</a>
						<a href="#slide1" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
			</StyledReview>
		</section>
	);
};

export default Testimonial;

const StyledReview = styled.div`
	// background-repeat: no-repeat;
	// background-size: cover;
	// background-position: center;
	// background-radius: 20px;
	// background-shadow: rgba(0, 0, 0, 0.8) 0 0 20px;
	// position: relative;
`;
const styledBox = styled.div`
	border: 1px solid black;
	border-radius: 20px;
`;
