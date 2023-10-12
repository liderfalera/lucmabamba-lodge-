import React from "react";
import { Element } from "react-scroll";

import vicuna_hero from "@assets/img/vicuna-hero.jpg";
import { ReactComponent as MyFacebookIcon } from "@assets/icon/logo-facebook.svg";
import { ReactComponent as MyInstagramIcon } from "@assets/icon/logo-instagram.svg";

function Hero({ useTranslation }) {
	const { t } = useTranslation();
	return (
		<>
			<section
				style={{ backgroundImage: `url(${vicuna_hero})` }}
				className="w-full h-screen bg-cover bg-center ">
				<Element
					name="hero-section"
					className="h-full w-full">
					{/* <div
						className=" flex flex-col w-full px-4 py-20 h-full justify-center bg-gradient-to-r from-myblack/40  via-myblack/40
					"> */}
					<div
						className=" flex flex-col w-full h-full px-4 py-20  justify-center
						max-lg:bg-myblack/30
					sm:px-16					
					lg:w-1/2 lg:bg-  lg:bg-gradient-to-r lg:from-myblack/40 lg:via-myblack/40 lg:to-transparent lg:pr-0
					">
						<div className=" text-mysilver w-full h-full flex flex-col justify-center">
							<h1
								className="text-2xl text-center  font-montserrat font-bold tracking-normal leading-tight px-4
							sm:text-4xl
							lg:text-left lg:text-5xl lg:px-0 lg:max-w-md lg:leading-snug
							xl:text-6xl xl:max-w-xl  xl:leading-normal
							2xl:text-7xl 2xl:max-w-2xl 2xl:leading-relaxed
							">
								<span
									className="block text-xl font-extralight leading-loose mb-1
								sm:text-2xl
								lg:text-3xl
								">
									{t("hero.mainTitle.firstLine")}
								</span>
								{t("hero.mainTitle.secondLine")}
							</h1>
							<p
								className="mt-4 text-l font-montserrat text-center
							">
								{t("hero.description")}
							</p>
						</div>
						<div
							className="hidden text-mywhite
						lg:block
						">
							<ul className="flex mt-4">
								<li className="mr-6">
									<a
										target="_blank"
										href="https://web.facebook.com/profile.php?id=100054444701615">
										<MyFacebookIcon />
									</a>
								</li>
								<li>
									<a
										target="_blank"
										href="https://www.instagram.com/lucmabamba_lodge_salkantay/">
										<MyInstagramIcon />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</Element>
			</section>
		</>
	);
}
export { Hero };
