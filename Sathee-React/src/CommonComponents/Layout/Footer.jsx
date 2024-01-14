import React from "react";
import logo from "../../assets/Images/logo/logo-white.png";

export default function Footer() {
	return (
		<footer>
			<div className="footer-watermark">
				<img src={logo} alt />
			</div>
			<div className="container flex-box">
				<div className="flogo footer-item">
					<img src={logo} alt="logo" />
					<p>
						Evidence based high quality preventive care accessible to everyone
						on Earth, starting with Bangladesh.
					</p>
					<div className="social-icons">
						<span>
							<i className="fa-brands fa-facebook" />
							<i className="fa-brands fa-instagram" />
							<i className="fa-brands fa-linkedin" />
						</span>
					</div>
				</div>
				<div className="address footer-item">
					<h5>Get in touch</h5>
					<div>
						<p>
							{" "}
							14/05 City,
							<br />
							Dhaka, Bangladesh
						</p>
						<span> Email:</span> shathee@xyz.com <br />
						<span>Phone:</span> 00 (123) 456 78 90
					</div>
				</div>
				<div className="quick-link footer-item">
					<h5>Quick Links</h5>
					<div>
						<ul>
							<li>
								<a href="/pages/AboutUs.html">AboutUs</a>
							</li>
							<li>
								<a href="./pages/Service.html">Services</a>
							</li>
							<li>
								<a href="./pages/Contact.html">Contact Us</a>
							</li>
							<li>
								<a href="#">Terms of use</a>
							</li>
							<li>
								<a href="#">Privecy Policy</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="subscription footer-item">
					<div className="subscribe-input">
						<form action>
							<span>
								<input type="email" name placeholder="enter your email" id />
							</span>
							<input type="submit" defaultValue="Subscribe" />
						</form>
					</div>
				</div>
			</div>
		</footer>
	);
}
