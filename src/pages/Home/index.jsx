import React from "react";

import { useTranslation } from "react-i18next";

import { About } from "@components/sections/About";
import { Contact } from "@components/sections/Contact";
import { Footer } from "@components/sections/Footer";
import { Header } from "@components/sections/Header";
import { Hero } from "@components/sections/Hero";
import { WhatsappFab } from "@components/common/fabs/WhatsappFab";

function Home() {
	return (
		<>
			<Header useTranslation={useTranslation} />
			<main>
				<Hero useTranslation={useTranslation} />
				<About useTranslation={useTranslation} />
				<Contact useTranslation={useTranslation} />
			</main>
			<Footer useTranslation={useTranslation} />
			<WhatsappFab />
		</>
	);
}

export { Home };
