import React from "react";
import { useState } from "react";
import { Element } from "react-scroll";

function Contact({ useTranslation }) {
	const [agree, setAgree] = useState(false);
	const [hover, setHover] = useState(false);

	const { t } = useTranslation();

	return (
		<>
			<section>
				<Element name="contact-section">
					<div
						className="bg-mysilver p-8
					sm:p-16
					">
						<div
							className="flex flex-col  font-sen gap-24 mx-auto 
						sm:px-6 
						lg:px-8  lg:flex-row 
						xl:max-w-5xl xl:mx-auto
						">
							<div className="w-full lg:w-1/2">
								<h2
									className="text-lg font-bold mb-2 text-center
								sm:text-xl
								lg:text-left
								">
									{t("contact.information.title")}
								</h2>
								<div
									className="border-b-2 mb-8 w-20 rounded border-myprimary mx-auto
								sm:border-b-4
								lg:mx-0
								"></div>
								<h4
									className="text-md font-bold text-center
								lg:text-left
								">
									{t("contact.information.emailTitle")}
								</h4>
								<ul
									className=" text-mygray text-center mt-2 text-md
								lg:text-left
								">
									<li className="">
										<a
											href="mailto:info@lucmabamba.com"
											className="hover:underline">
											info@lucmabamba.com
										</a>
									</li>
								</ul>
								<h4
									className="text-md font-bold mt-4 text-center
								lg:text-left
								">
									{t("contact.information.phoneTitle")}
								</h4>
								<ul
									className=" text-mygray text-center mt-2 text-md
								">
									<li
										className="flex gap-6 flex-wrap justify-center
									lg:justify-start
									">
										<a
											href="tel:+51 987 654 321"
											className="hover:underline">
											+51 931 323 555
										</a>
										<a
											href="tel:+51 987 654 321"
											className="hover:underline">
											+51 945 455 233
										</a>
									</li>
								</ul>
							</div>
							<div className="w-full lg:w-1/2">
								<h2
									className="text-lg font-bold mb-2 text-center
								sm:text-xl
								lg:text-left
								">
									{t("contact.form.title")}
								</h2>
								<div
									className="border-b-2 mb-6 w-20 rounded border-myprimary mx-auto
								sm:border-b-4
								lg:mx-0
								"></div>

								<form className="mt-8 max-w-xl mx-auto">
									<div className="my-4">
										<input
											type="text"
											id="name"
											className="w-full py-2 border-b-2  focus:outline-none focus:ring-blue-500 focus:border-mygray placeholder-mygraylight bg-transparent "
											placeholder={`${t("contact.form.inputNamePlaceholder")}`}
										/>
									</div>

									<div className="my-4">
										<input
											type="email"
											id="email"
											className="w-full py-2 border-b-2  focus:outline-none focus:ring-blue-500 focus:border-mygray placeholder-mygraylight bg-transparent"
											placeholder={`${t("contact.form.inputEmailPlaceholder")}`}
										/>
									</div>

									<div className="my-4">
										<label
											htmlFor="agree"
											className="inline-flex items-center">
											<input
												type="checkbox"
												id="agree"
												checked={agree}
												onChange={(event) => setAgree(event.target.checked)}
												className="h-4 w-4  focus:ring-mygray rounded checked:bg-mygray border-2"
											/>
											<span className="ml-2 text-mygray text-sm">
												{t("contact.form.agreementProcessing")}
											</span>
										</label>
									</div>

									<button
										type="submit"
										disabled={true}
										className={`${
											agree
												? "bg-myprimary text-white"
												: "bg-mygraylight text-gray-600"
										} w-full h-12 py-2 px-4 mt-4 border border-transparent hover:shadow-md hover:cursor-pointer text-sm font-normal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-myprimary
										sm:h-14 sm:text-base
										`}>
										{t("contact.form.submitText")}
									</button>
								</form>
							</div>
						</div>
					</div>
				</Element>
			</section>
		</>
	);
}
export { Contact };
