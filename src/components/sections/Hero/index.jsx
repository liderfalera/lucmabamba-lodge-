import React from "react";
import vicuna_hero from "../../../assets/img/vicuna-hero.jpg";
import { ReactComponent as MyFacebookIcon } from "../../../assets/icon/logo-facebook.svg";
import { ReactComponent as MyInstagramIcon } from "../../../assets/icon/logo-instagram.svg";

function Hero() {
	return (
		<>
			<section
				style={{ backgroundImage: `url(${vicuna_hero})` }}
				className="bg-cover bg-center h-screen">
				<div className="w-1/2 h-full  flex flex-col justify-center px-32 py-20 bg-gradient-to-r from-myblack/40  via-myblack/40">
					<div className=" text-mywhite w-full h-full flex flex-col justify-center">
						<h1 className="text-5xl font-montserrat font-bold tracking-normal leading-tight">
							<span className="block text-xl font-extralight leading-loose mb-1">
								Let's
							</span>
							Explore a unique experience
						</h1>
						<p className="mt-4 text-l font-montserrat">
							The perfect balance between adventure, comfort, and gastronomy in
							our lodging, camping, restaurant, and coffee route services.
						</p>
					</div>
					<div className="text-mywhite">
						<ul className="flex mt-4">
							<li className="mr-6">
								<a href="#">
									<MyFacebookIcon />
								</a>
							</li>
							<li>
								<a href="#">
									<MyInstagramIcon />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}
export { Hero };
