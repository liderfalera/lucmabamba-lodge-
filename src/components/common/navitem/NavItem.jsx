import React from "react";
import { Link } from "react-scroll";

function NavItem({
	children,
	alignment,
	to,
	spy,
	smooth,
	offset,
	duration,
	handleMenuToggle,
}) {
	return (
		<Link
			className={`flex h-full w-full ${alignment} items-center  p-4 hover:cursor-pointer`}
			activeClass="underline underline-offset-8 decoration-myprimary"
			to={to}
			spy={spy}
			smooth={smooth}
			offset={offset}
			duration={duration}
			onClick={handleMenuToggle}>
			{children}
		</Link>
	);
}

export { NavItem };
