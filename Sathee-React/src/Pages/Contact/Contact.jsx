import React from "react";

export default function Contact() {
	return (
		<div>
			<section className="signup-area contact-page">
				<div className="container flex-box">
					<div className="signup-form">
						<div className="title">
							<h4>Contact Us</h4>
							<p>Get in touch with us from anywhere</p>
						</div>
						<form action>
							<span>
								<input type="text" placeholder="First Name" />
							</span>
							<span>
								<input type="text" placeholder="Last Name" />
							</span>
							<span>
								<div className="country">
									<small>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={12}
											height={12}
											viewBox="0 0 12 12"
											fill="none"
										>
											<circle cx={6} cy={6} r={6} fill="#D93F21" />
										</svg>
									</small>
									<p>+880</p>
								</div>
								<input type="text" placeholder="Mobile Number" />
							</span>
							<span>
								<input type="email" placeholder="Email address" />
							</span>
							<span>
								<textarea
									placeholder="Type your Message here"
									name
									id
									cols={30}
									rows={10}
									defaultValue={""}
								/>
							</span>
							<span>
								<input type="checkbox" name id />{" "}
								<label htmlFor>
									i want to Receive Promotional Updates from Shathee
								</label>
							</span>
							<div className="button">
								<button>Send</button>
							</div>
						</form>
					</div>
					<div className="map">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.97303519961!2d90.33728826921781!3d23.780818635561015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1704540889161!5m2!1sen!2sbd"
							width={600}
							height={450}
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
						<div className="blur-ball">hello</div>
						<div className="blur-ball">hello 2</div>
					</div>
				</div>
			</section>
		</div>
	);
}
