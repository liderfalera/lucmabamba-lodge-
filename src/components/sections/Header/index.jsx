import React from "react";
import lucmabamba_logo from "../../../assets/logo/positive.svg";

function Header() {
	return (
		<>
			<header className="fixed top-0 w-full">
				<nav className="flex h-20 font-sen items-center mx-32">
					<div className="w-full">
						<ul className="flex text-mywhite justify-center items-center gap-20 h-full">
							<li className="font-normal">
								<a href="#">About</a>
							</li>
							<li className="font-bold">
								<a href="#">
									<img
										className="w-28"
										src={lucmabamba_logo}
										alt="LOGO"
									/>
								</a>
							</li>
							<li className="font-normal">
								<a href="#">Contact</a>
							</li>
						</ul>
					</div>
					<div>
						<button className="text-mywhite hover:font-bold">EN</button>
					</div>
				</nav>
			</header>
		</>
	);
}
export { Header };
