import React from "react";
import { Link } from "react-scroll";

import lucmabamba_logo from "@assets/logo/bg_white.svg";
import { ReactComponent as MyFacebookIcon } from "@assets/icon/logo-facebook.svg";
import { ReactComponent as MyInstagramIcon } from "@assets/icon/logo-instagram.svg";

function Footer({ useTranslation }) {
	const { t } = useTranslation();

	return (
		<>
			<section>
				<div className="flex justify-center pt-16 pb-8 bg-mysilver">
					<Link
						className="hover:cursor-pointer "
						activeClass=""
						to="hero-section"
						spy={true}
						smooth={true}
						offset={-70}
						duration={700}>
						<img
							className="w-28"
							src={lucmabamba_logo}
							alt="LOGO"
						/>
					</Link>
				</div>
				<div className="flex flex-col w-full bg-myblack py-8">
					<ul className="flex w-full justify-center gap-4 font-bold text-mysilver">
						<li className="w-20 text-end">
							<Link
								className="hover:cursor-pointer "
								to="about-section"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}>
								{t("nav.about")}
							</Link>
						</li>
						<li>·</li>
						<li className="w-20 text-start">
							<Link
								className="hover:cursor-pointer"
								to="contact-section"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}>
								{t("nav.contact")}
							</Link>
						</li>
					</ul>
					<div className="text-mysilver w-full flex justify-center">
						<ul className="flex mt-4 gap-4">
							<li>
								<a
									href="https://web.facebook.com/profile.php?id=100054444701615"
									target="_blank">
									<MyFacebookIcon />
								</a>
							</li>
							<li>
								<a
									href="https://www.instagram.com/lucmabamba_lodge_salkantay/"
									target="_blank">
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
export { Footer };
