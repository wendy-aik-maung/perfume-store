import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import styled from "styled-components";
import story from "public/story.jpg";
import us from "public/ud.jpg";
import about from "public/about.jpg";
const AboutUs = () => {
	return (
		<main className="container mx-auto">
			<div>
				<Story>
					<StyledSection className="container mx-auto">
						<img
							src={us.src}
							alt="logo"
							className="w-full object-cover bg-center relative"
						/>
					</StyledSection>
					<h2 className="italic text-3xl text-extrabold text-center text-sans mt-2 mb-1 text-shadow">
						&quot;Our Story&quot;
					</h2>
					<hr />
					<p className="mt-3 p-3 text-lg text-semibold font-normal font-sans text-center">
						Rememberance was founded on December 2022. If you are interested,
						the idea for Rememberance was straightforward, associate certain
						fragrances <br />
						with our own emotions and memories – and it’s for the same reasons
						that fragrance often plays a comforting role in remembrance.
						<br /> Our point is to make standard and extravagant scents moderate
						and open to all. We highly esteem conveying <br />
						the remarkable support of our clients, which we have been granted
						for magnificent client benefit.
					</p>
				</Story>
				<section className="mt-10">
					<p className="text-xl text-bold text-center text-sans pb-3">
						We would love to hear from you.
					</p>
					<span className="flex justify-center">
						<AiOutlineMail size={35} color="#475569" /> {""}
						<span className="pl-1">– rememberance@gmail.com</span>
					</span>
					<span className="flex justify-center">
						<RiCustomerService2Fill size={35} color="#475569" />
						{""}
						<span className="pl-1"> – 09 960973973</span>
					</span>
				</section>
			</div>
		</main>
	);
};

export default AboutUs;
const Story = styled.section`
	min-height: 30vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledSection = styled.div`
	display: flex;
	height: 300px;
	background-radius: 20px;
	background-shadow: rgba(0, 0, 0, 0.8) 0 0 20px;
`;
