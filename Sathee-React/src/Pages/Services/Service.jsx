import React from "react";

export default function Service() {
	return (
		<div>
			<section className="Service-offer-section  why-choose-us">
				<div className="container">
					<div className="section-title">
						<small>Services</small>
						<h3>Services We Offer</h3>
						<p>
							At Shathee, we are committed to providing accessible, high quality
							preventive care to help you manage diabetes and hypertension
							effectively. Our services are designed to empower you to take
							control of your health and make positive lifestyle changes.
						</p>
					</div>
					<div className="chooseUs-content-box flex-box">
						<div className="content">
							<div className="icon">
								<img src="../assets/image/service/Group 35628.svg" alt="icon" />
							</div>
							<p>Expert in house medical doctors</p>
						</div>
						<div className="content">
							<div className="icon">
								<img src="../assets/image/service/Group 35637.svg" alt="icon" />
							</div>
							<p>Evidence based strategies via telehealth</p>
						</div>
						<div className="content">
							<div className="icon">
								<img src="../assets/image/service/Group 35638.svg" alt="icon" />
							</div>
							<p>Support for lifestyle modifications</p>
						</div>
						<div className="content">
							<div className="icon">
								<img src="../assets/image/service/Group 35639.svg" alt="icon" />
							</div>
							<p>Regular health tracking for early intervention</p>
						</div>
						<div className="content">
							<div className="icon">
								<img src="../assets/image/service/Group 35640.svg" alt="icon" />
							</div>
							<p>Preventive medicine backed by human genetics</p>
						</div>
					</div>
				</div>
			</section>
			{/* services offer section start */}
			{/* weekly consultation section start */}
			<section className="weekly-consultation">
				<div className="container">
					<div className="line-bg">
						<img src="../assets/image/service/Group 35642.png" alt="img" />
					</div>
					<div className="weekly-consultation-box flex-box">
						<div className="left-site-img">
							<span>
								<img src="../assets/image/service/Group 35646.png" alt="img" />
							</span>
						</div>
						<div className="right-site-content">
							<h3>Weekly Lifestyle Modification Consultations</h3>
							<p>
								Our core service includes weekly lifestyle modification
								consultations with our expert healthcare professionals. Get
								personalised strategies to improve your diet, increase physical
								activity, manage stress, and quit smoking if necessary. Regular
								consultations will ensure ongoing support and monitoring to
								ensure your health goals are on track.
							</p>
						</div>
					</div>
				</div>
			</section>
			{/*weekly consultation end */}
			{/* choose plan section start */}
			<section className="choose-plan-sectin">
				<div className="container">
					<div className="section-title">
						<small>Pricing</small>
						<h4>Choose Your Plan</h4>
					</div>
					<div className="plan-box flex-box">
						<div className="left-price">
							<h3>Free</h3>
							<p>Pay once for the Year</p>
							<ul>
								<li>
									<img src="../assets/image/service/check.png" alt />
									Feature Label Goes here
								</li>
								<li>
									<img src="../assets/image/service/check.png" alt />
									Feature Label Goes here
								</li>
								<li>
									<img src="../assets/image/service/check.png" alt />
									Feature Label Goes here
								</li>
							</ul>
							<button>Choose Plan</button>
						</div>
						<div className="right-site-plan">
							<div className="heading">
								<span className="flex-box">
									<h4>Pay in Instalments</h4>
									<button>Recommended</button>
								</span>
								<p>Your healthcare starts at ৳499/month</p>
							</div>
							<div className="plan-items flex-box">
								<span>
									<ul>
										<li>
											<img src="../assets/image/service/whitecheck.png" alt />
											Feature Label Goes here
										</li>
										<li>
											<img src="../assets/image/service/whitecheck.png" alt />
											Feature Label Goes here
										</li>
										<li>
											<img src="../assets/image/service/whitecheck.png" alt />
											Feature Label Goes here
										</li>
									</ul>
								</span>
								<span>
									<ul>
										<li>
											<img src="../assets/image/service/whitecheck.png" alt />
											Feature Label Goes here
										</li>
										<li>
											<img src="../assets/image/service/whitecheck.png" alt />
											Feature Label Goes here
										</li>
									</ul>
								</span>
							</div>
							<button>Choose Plan $499</button>
						</div>
					</div>
					<div className="plan-table-area">
						{/* Planing table start here */}
						<table>
							<thead>
								<tr>
									<th />
									<th>free</th>
									<th>Instalments</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Feature title</td>
									<td>
										<img src="../assets/image/service/checkfill.png" alt />
									</td>
									<td>
										<img src="../assets/image/service/checkfill.png" alt />
									</td>
								</tr>
								<tr>
									<td>Feature title</td>
									<td>
										<img src="../assets/image/service/checkfill.png" alt />
									</td>
									<td>
										<img src="../assets/image/service/checkfill.png" alt />
									</td>
								</tr>
								<tr>
									<td>Feature title</td>
									<td>
										<img
											src="../assets/image/service/#3d3d3dCheckFill.png"
											alt
										/>
									</td>
									<td>
										<img src="../assets/image/service/checkfill.png" alt />
									</td>
								</tr>
								<tr>
									<td>Feature title</td>
									<td>
										<img
											src="../assets/image/service/#3d3d3dCheckFill.png"
											alt
										/>
									</td>
									<td>
										<img src="../assets/image/service/checkfill.png" alt />
									</td>
								</tr>
								<tr>
									<td>Feature title</td>
									<td>
										<img
											src="../assets/image/service/#3d3d3dCheckFill.png"
											alt
										/>
									</td>
									<td>
										<img src="../assets/image/service/checkfill.png" alt />
									</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<td />
									<td>
										<button>Choose Plan</button>
									</td>
									<td>
										<button>Choose Plan</button>
									</td>
								</tr>
							</tfoot>
						</table>
						{/* Planing table end here */}
					</div>
				</div>
			</section>
			{/* choose plan section end */}
			{/* consultation section start */}
			<section className="consultation-section">
				<div className="container">
					<div className="section-title">
						<small>Process</small>
						<h4>How Consultations Work</h4>
						<p>It’s a simple three step process</p>
					</div>
					<div className="consultation-box">
						<div className>
							<div className="items flex-box">
								<div className="left-img">
									<img
										src="../assets/image/service/Rectangle 3075.png"
										alt="img"
									/>
								</div>
								<div className="right-content">
									<span>
										<img
											src="../assets/image/service/Group 35647.png"
											alt="icon"
										/>
										<h4>Scheduling Appointments</h4>
									</span>
									<p>
										To schedule an appointment, log in to your Shathee account
										and choose a suitable date and time from the available
										slots. You will receive a confirmation email with the
										details of your appointment.
									</p>
								</div>
							</div>
							<div className="items flex-box">
								<div className="right-content">
									<span>
										<img
											src="../assets/image/service/Group 35648.png"
											alt="icon"
										/>
										<h4>Personalised Guidance</h4>
									</span>
									<p>
										To schedule an appointment, log in to your Shathee account
										and choose a suitable date and time from the available
										slots. You will receive a confirmation email with the
										details of your appointment.
									</p>
								</div>
								<div className="left-img">
									<img
										src="../assets/image/service/Rectangle 3077.png"
										alt="img"
									/>
								</div>
							</div>
							<div className="items flex-box">
								<div className="left-img">
									<img
										src="../assets/image/service/Rectangle 3075.png"
										alt="img"
									/>
								</div>
								<div className="right-content">
									<span>
										<img
											src="../assets/image/service/Group 35649.png"
											alt="icon"
										/>
										<h4>Personalised Guidance</h4>
									</span>
									<p>
										To schedule an appointment, log in to your Shathee account
										and choose a suitable date and time from the available
										slots. You will receive a confirmation email with the
										details of your appointment.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
