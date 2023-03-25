import React from "react";
import { About } from "../../components/sections/About";
import { Contact } from "../../components/sections/Contact";
import { Footer } from "../../components/sections/Footer";
import { Header } from "../../components/sections/Header";
import { Hero } from "../../components/sections/Hero";

function Home() {
	return (
		<>
			<Header />
			<Hero />
			<About />
			<Contact />
			<Footer />
		</>
	);
}

export { Home };
