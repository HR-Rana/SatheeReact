import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
	return (
		<div>
			<section className="signup-area Singup-page">
				<div className="flex">
					<div className="signup-form">
						<div className="title">
							<h4>Welcome to Shathee</h4>
							<p>Your partner in preventive healthcare</p>
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
								<input
									type="password"
									placeholder="Set up your password (Minimum 8 characters)"
								/>
								<img src="../assets/image/login/Group.png" alt="hide" />
							</span>
							<span>
								<input type="password" placeholder="Repeat Password" />
								<img src="../assets/image/login/Group.png" alt="hide" />
							</span>
							<span>
								<input type="checkbox" name id />{" "}
								<label htmlFor>
									i want to I hereby agree to Shathee’s
									<span>Terms &amp; Conditions</span>
								</label>
							</span>
							<div className="button">
								<button>Signup</button>
							</div>
						</form>
						<div className="login-option">
							<p>
								Already a Member? <Link to="/Login">Login</Link>
							</p>
						</div>
						<br />
						<div className="login-other-way">
							<span>
								<hr />
								<p>Or Continue with</p>
							</span>
							<div className="google">
								<button>
									{" "}
									<img src="../assets/image/login/google.png" alt="google" />
									<span>Google</span>
								</button>
								<button>
									{" "}
									<img
										src="../assets/image/login/facebook.png"
										alt="facebook"
									/>
									<span>Facebook</span>
								</button>
							</div>
						</div>
					</div>
					<div className="login-img">
						<img src="../assets/image/login/BG.png" alt="img" />
						<div className="blur-text">
							<div>
								<button>
									{" "}
									<img src="../assets/image/login/thumbs.png" alt /> Enables
									Proactive Care
								</button>
								<p>
									Proactive care empowers me to make a real difference in my
									patients' lives, helping them avoid complications and enjoy a
									better quality of life.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
