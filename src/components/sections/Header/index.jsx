import React from "react";
import { useState, useEffect } from "react";

import { NavItem } from "@components/common/navitem/NavItem";
//import { useTranslation } from "react-i18next";

import lucmabamba_logo_positive from "@assets/logo/positive.svg";
import lucmabamba_logo_bg_white from "@assets/logo/bg_white.svg";
import { ReactComponent as MyMenuIcon } from "@assets/icon/menu.svg";
import { ReactComponent as MyMenuCloseIcon } from "@assets/icon/menu-close.svg";

function Header({ useTranslation }) {
	const { t, i18n } = useTranslation();

	const [visible, setVisible] = useState(true);
	const [isSticky, setIsSticky] = useState(false);
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [timer, setTimer] = useState(null);
	const [isHovering, setIsHovering] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const [curLanguage, setCurLanguage] = useState(i18n.language.slice(0, 2));

	const handleScroll = () => {
		const currentScrollPos = window.pageYOffset;
		if (currentScrollPos > prevScrollPos) {
			clearTimeout(timer);
			setTimer(
				setTimeout(() => {
					if (isHovering || isMenuOpen) return;
					setVisible(false);
				}, 2000)
			);
			setIsSticky(true);
		} else {
			setVisible(true);
			setIsSticky(currentScrollPos > 0);
		}
		setPrevScrollPos(currentScrollPos);

		if (currentScrollPos < prevScrollPos) {
			setVisible(true);
			clearTimeout(timer);
		}
	};

	const handleMouseEnter = () => {
		setIsHovering(true);
	};

	const handleMouseLeave = () => {
		setIsHovering(false);
	};

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleDeleteMenu = () => {
		if (window.innerWidth >= 768) {
			setIsMenuOpen(false);
		}
	};

	const screenWidthMd = window.matchMedia("(min-width: 768px)").matches;

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleDeleteMenu);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleDeleteMenu);
		};
	}, [prevScrollPos, timer, isHovering]);

	function handleToggleLanguage() {
		if (curLanguage !== "en") {
			setCurLanguage("en");
			i18n.changeLanguage("en");
		} else if (curLanguage === "en") {
			setCurLanguage("es");
			i18n.changeLanguage("es");
		}
	}

	return (
		<>
			<header
				className={`
				${isMenuOpen ? "h-screen" : ""}				
				${
					isSticky || isMenuOpen
						? "fixed  shadow-md bg-mysilver text-myblack"
						: "fixed text-mywhite"
				}
				w-full z-50 transition ease-in-out duration-300 transform 
				${visible ? "translate-y-0" : "-translate-y-full"}`}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}>
				<nav
					className="flex h-20 px-4 font-sen items-center
				lg:px-8
				">
					<ul
						className="flex flex-wrap w-full h-full justify-between items-center
					md:flex-nowrap md:relative md:justify-center md:gap-12
					">
						<li
							className="h-full flex flex-none items-center font-normal
						md:absolute md:right-0
						">
							<button
								className="flex w-11 h-11 items-center justify-center hover:font-bold uppercase"
								onClick={handleToggleLanguage}>
								{curLanguage}
							</button>
						</li>

						<li
							className=" flex w-36 h-full items-center 
							sm:w-40
							md:order-2
							">
							<NavItem
								alignment="justify-center"
								to={"hero-section"}
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}>
								<img
									className="w-full"
									src={
										isSticky || isMenuOpen
											? lucmabamba_logo_bg_white
											: lucmabamba_logo_positive
									}
									alt="LOGO"
								/>
							</NavItem>
						</li>

						<li
							className="h-full flex  flex-none items-center justify-center font-normal
						md:hidden
						">
							<button
								className="flex w-11 h-11 items-center justify-center"
								onClick={handleMenuToggle}>
								{isMenuOpen ? <MyMenuCloseIcon /> : <MyMenuIcon />}
							</button>
						</li>
						<li
							className={`${
								isMenuOpen ? "" : "hidden"
							} basis-full w-28 h-full  items-center font-normal
							md:flex md:basis-auto  md:order-1
							`}>
							<NavItem
								alignment="justify-center md:justify-end"
								to={"about-section"}
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								handleMenuToggle={screenWidthMd ? null : handleMenuToggle}>
								{t("nav.about")}
							</NavItem>
						</li>
						<li
							className={`${
								isMenuOpen ? "" : "hidden"
							} basis-full w-28 h-full  items-center font-normal
							md:flex md:basis-auto  md:order-3
							`}>
							<NavItem
								alignment="justify-center md:justify-start"
								to={"contact-section"}
								spy={true}
								smooth={true}
								offset={-70}
								duration={700}
								handleMenuToggle={screenWidthMd ? null : handleMenuToggle}>
								{t("nav.contact")}
							</NavItem>
						</li>
					</ul>

					{/* <div className="absolute left-0 w-8 h-8">
						<button
							className="w-full h-full hover:font-bold uppercase"
							onClick={handleToggleLanguage}>
							{curLanguage}
						</button>
					</div> */}
				</nav>
				{/* <Navbar /> */}
			</header>
		</>
	);
}
export { Header };
