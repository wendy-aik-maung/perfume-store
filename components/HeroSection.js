import React from "react";
import styled from "styled-components";
import Link from "next/link";
import hero from "public/heroImg.jpg";

const HeroSedtion = () => {
    return ( <
        div className = "container flex justify-between border rounded-3xl shadow-xl rounded-t-2xl" >
        <
        StyledSection src = { hero.src }
        alt = "girl"
        className = "w-full object-cover bg-center relative" /
        >
        <
        div className = "absolute w-2/3 translate-x-10 translate-y-40" >
        <
        h1 className = "text-5xl font-bold" >
        <
        p > You & apos; re never fully dressed < /p> <
        p > without perfume! < /p> <
        /h1> <
        p className = "py-3" >
        Odors have a power of persuasion stronger than that of words,
        appearances, emotions. { " " } <
        /p> <
        p > Shop over 100 instock perfumes in one place. < /p>

        <
        button className = "btn mt-5" >
        <
        Link href = "/products" > GRAB NOW < /Link> <
        /button> <
        /div> <
        /div>
    );
};

export default HeroSedtion;

const StyledSection = styled.img `
	height: 700px;
	background-radius: 20px;
	background-shadow: rgba(0, 0, 0, 0.8) 0 0 20px;
`;