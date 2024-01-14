import React from "react";

export default function Hero() {
	return (
		<>
			{/* THIS IS HERO SECTION  */}
			<section className="Hero-section">
				<div className="container flex-box">
					<div className="hero-left">
						<div className="hero-dna">
							<img src="./assets/image/hero/hero-dna.png" alt />
						</div>
						<span>
							<h3>
								Your partner in
								<span>Preventive Health</span>
							</h3>
							<p>
								Revolutionising healthcare by prioritising prevention. Our
								mission is to empower individuals by providing accessible,
								high-quality preventive care.
							</p>
							<button>Join us today!</button>
						</span>
					</div>
					<div className="hero-right">
						<div className="bg-image">
							<img src="./assets/image/hero/Hero-bg.png" alt />
						</div>
						<div className="doctor-slide">
							<div className="Slides">
								<div className="doctor">
									<img src="./assets/image/hero/slide1.png" alt="doctor" />
								</div>
								<div className="doctor">
									<img src="./assets/image/hero/slide2.png" alt="doctor" />
								</div>
								<div className="doctor">
									<img src="./assets/image/hero/slide3.png" alt="doctor" />
								</div>
								<div className="doctor">
									<img src="./assets/image/hero/slide4.png" alt="doctor" />
								</div>
							</div>
							<div className="slide-icon">
								<img src="./assets/image/hero/White Square.png" alt="icon" />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* HERO SECTION END */}
		</>
	);
}
