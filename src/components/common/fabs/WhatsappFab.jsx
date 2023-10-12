import React from "react";

import { ReactComponent as MyWhatsappIcon } from "@assets/icon/logo-whatsapp.svg";

const WhatsappFab = () => {
	return (
		<a
			href="https://wa.me/+51957505578"
			target="_blank"
			rel="noopener noreferrer"
			className="fixed bottom-8 right-8 z-40 w-16 h-16 p-4 bg-mywhatsappcolor rounded-full flex items-center justify-center shadow-xl text-mywhite">
			<MyWhatsappIcon />
		</a>
	);
};

export { WhatsappFab };
