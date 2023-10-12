import React, { useState } from "react";
import { Element } from "react-scroll";

import collage_1 from "@assets/img/collage-1.jpg";
import collage_2 from "@assets/img/collage-2.jpg";
import collage_3 from "@assets/img/collage-3.jpg";
import collage_4 from "@assets/img/collage-4.jpg";
import collage_5 from "@assets/img/collage-5.jpg";

function About({ useTranslation }) {
	const [completeContent, setCompleteContent] = useState(false);
	const { t } = useTranslation();

	const handleCompleteContent = () => {
		setCompleteContent(true);
	};

	return (
		<>
			<section className="">
				<Element name="about-section">
					<div
						className="bg-mysilver p-8
					sm:p-16
					">
						<div
							className="flex mx-auto
						lg:mx-0 lg:w-full lg:gap-12 lg:items-center
						xl:max-w-5xl xl:mx-auto
						">
							<div
								className="hidden w-full
							lg:block lg:w-1/2 
							">
								<div
									className="w-full h-full grid grid-cols-12 grid-rows-12  gap-2 
								lg:w-96 lg:h-96 mx-auto
								">
									<div
										className="col-start-3 col-end-7 row-start-1 row-end-4 bg-cover bg-center"
										style={{ backgroundImage: `url(${collage_1})` }}
										aria-label="Welcome sign made of wood"
									/>
									<div
										className="col-start-1 col-end-5 row-start-4 row-end-7 bg-cover bg-center"
										style={{ backgroundImage: `url(${collage_2})` }}
										aria-label="Welcome sign made of wood"
									/>
									<div
										className="col-start-5 col-end-7 row-start-4 row-end-7 bg-cover bg-center"
										style={{ backgroundImage: `url(${collage_3})` }}
										aria-label="Welcome sign made of wood"
									/>
									<div
										className="col-start-7 col-end-13 row-start-3 row-end-7 bg-cover bg-center"
										style={{ backgroundImage: `url(${collage_4})` }}
										aria-label="Welcome sign made of wood"
									/>
									<div
										className="col-start-2 col-end-12 row-start-7 row-end-13 bg-cover bg-center"
										style={{ backgroundImage: `url(${collage_5})` }}
										aria-label="Welcome sign made of wood"
									/>
								</div>
							</div>
							<div
								className="w-full  font-sen 
								md:max-w-xl md:mx-auto
								lg:w-1/2
							">
								<h2
									className="text-lg font-bold mb-2 text-center
								sm:text-xl
								lg:text-left
								">
									{t("about.title")}
								</h2>
								<div
									className="border-b-2 w-20 rounded border-myprimary m-auto
								sm:border-b-4 
								lg:mx-0
								"></div>

								<div
									className="hidden w-96 h-96 mt-8 grid-cols-12 grid-rows-12  gap-2 mx-auto
								md:grid
								lg:hidden
								">
									<div
										className="col-start-3 col-end-7 row-start-1 row-end-4 bg-cover bg-center"
										style={{ backgroundImage: `url(${collage_1})` }}
										aria-label="Welcome sign made of wood"
									/>
									<div
										className="col-start-1 col-end-5 row-start-4 row-end-7 bg-cover bg-center"
										style={{ backgroundImage: `url(${collage_2})` }}
										aria-label="Welcome sign made of wood"
									/>
									<div
										className="col-start-5 col-end-7 row-start-4 row-end-7 bg-cover bg-center"
										style={{ backgroundImage: `url(${collage_3})` }}
										aria-label="Welcome sign made of wood"
									/>
									<div
										className="col-start-7 col-end-13 row-start-3 row-end-7 bg-cover bg-center"
										style={{ backgroundImage: `url(${collage_4})` }}
										aria-label="Welcome sign made of wood"
									/>
									<div
										className="col-start-2 col-end-12 row-start-7 row-end-13 bg-cover bg-center"
										style={{ backgroundImage: `url(${collage_5})` }}
										aria-label="Welcome sign made of wood"
									/>
								</div>
								<img
									className="mt-6
									md:hidden
									"
									src={collage_5}
									alt="Welcome sign made of wood"
									srcset=""
								/>

								<p
									className={`${
										completeContent ? "hidden" : ""
									} mt-6 text-gray-700 leading-relaxed
									lg:hidden 
									`}
									dangerouslySetInnerHTML={{
										__html: t("about.content.min"),
									}}></p>

								<button
									className={`${
										completeContent ? "hidden" : ""
									} text-myprimary font-bold 
									lg:hidden
									`}
									dangerouslySetInnerHTML={{
										__html: t("about.more"),
									}}
									onClick={handleCompleteContent}></button>

								<p
									className={`${
										!completeContent ? "hidden" : ""
									} mt-6 text-gray-700 leading-relaxed
									lg:block
									`}
									dangerouslySetInnerHTML={{
										__html: t("about.content.max"),
									}}></p>
							</div>
						</div>
					</div>
				</Element>
			</section>
		</>
	);
}
export { About };
