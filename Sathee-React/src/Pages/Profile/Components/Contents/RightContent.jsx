import React from "react";


export default function RightContent() {
	return (
		<div>
			{/* portal page rightsite body contents */}
			<div classname="right-siteContent">
				<div classname="page-title flex-box">
					<div classname="portal-bars">
						<i classname="fa-solid fa-bars"></i>
					</div>
					<i classname="fa-solid fa-bars">
						<h5>
							Welcome back <span>Roni!</span>
						</h5>
						<p>
							<i classname="fa-solid fa-calendar"> Tue, 24 Apr 2023</i>
						</p>
						<i classname="fa-solid fa-calendar"></i>
					</i>
				</div>
				<i classname="fa-solid fa-bars">
					<i classname="fa-solid fa-calendar">
						<section classname="weather-box flex">
							<span classname="flex">
								<img src="../assets/image/Portal/sun icon.png" alt="sun-icon" />
								<p>36° C</p>
							</span>
							<p>It’s a Sunny Day today!</p>
							<article>
								Don’t forget to take your water bottle with you.
							</article>
						</section>
						<section classname="latest-overview">
							<div classname>
								<h4>Latest Overview</h4>
								<div classname="overview-items-box flex">
									<div classname="item">
										<div classname="circle">
											<span>
												<small>BP</small>
												<h6>120/80 mm Hg</h6>
											</span>
										</div>
										<div classname="item">
											<div classname="circle">
												<span>
													<small>weight</small>
													<h6>107Kg</h6>
												</span>
											</div>
											<div classname="item">
												<div classname="circle">
													<span>
														<small>Diabetes</small>
														<h6>110 mg/dL</h6>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
						{/* portal page chart boxs section */}
						<section classname="chart-section">
							<div classname="chart-cards-items flex-box">
								<div classname="chart-card">
									<span>
										<img
											src="../assets/image/Portal/Group 35625.png"
											alt="icon"
										/>
										<h6>Blood Pressure</h6>
									</span>
									<span>
										<li>
											<p>Controlled</p>
											<div classname="chart">
												<canvas id="myChart"></canvas>
											</div>
										</li>
									</span>
								</div>
								<div classname="chart-card">
									<span>
										<img
											src="../assets/image/Portal/diabetes-measure 1.png"
											alt="icon"
										/>
										<h6>Diabetes</h6>
									</span>
									<span>
										<li>
											<p>Controlled</p>
											<div classname="chart">
												<canvas id="myChart2"></canvas>
											</div>
										</li>
									</span>
								</div>
								<div classname="chart-card">
									<span>
										<img
											src="../assets/image/Portal/weight-scale 1.png"
											alt="icon"
										/>
										<h6>Body Weight</h6>
									</span>
									<span>
										<li>
											<p>Controlled</p>
											<div classname="chart">
												<canvas id="myChart3"></canvas>
											</div>
										</li>
									</span>
								</div>
								<div classname="chart-card">
									<span>
										<img src="../assets/image/Portal/muscle 1.png" alt="icon" />
										<h6>Physical Health</h6>
									</span>
									<span>
										<li>
											<p>very well</p>
											<div classname="chart">
												<canvas id="myChart4"></canvas>
											</div>
										</li>
									</span>
								</div>
								<div classname="chart-card">
									<span>
										<img src="../assets/image/Portal/brain 1.png" alt="icon" />
										<h6>Mental Health</h6>
									</span>
									<span>
										<li>
											<p>very bad</p>
											<div classname="chart">
												<canvas id="myChart5"></canvas>
											</div>
										</li>
									</span>
								</div>
							</div>
						</section>
						{/* portal page chart box seciton end */}
						{/* our science section start */}
						<section classname="science-section">
							<h4>Science</h4>
							<p>Check our blogs regularly</p>
							<div classname="scientist-box flex-box">
								<div classname="item">
									<img
										src="../assets/image/Portal/Rectangle 2977 (1).png"
										alt
									/>
									<h6>Set video playback speed with javascript</h6>
								</div>
								<div classname="item">
									<img
										src="../assets/image/Portal/Rectangle 2977 (1).png"
										alt
									/>
									<h6>set video playback speed with javascript</h6>
								</div>
								<div classname="item">
									<img
										src="../assets/image/Portal/Rectangle 2977 (1).png"
										alt
									/>
									<h6>set video playback speed with javascript</h6>
								</div>
							</div>
						</section>
						{/* our science section start end*/}
					</i>
				</i>
			</div>
			<i classname="fa-solid fa-bars">
				<i classname="fa-solid fa-calendar"></i>
			</i>
		</div>
	);
}
