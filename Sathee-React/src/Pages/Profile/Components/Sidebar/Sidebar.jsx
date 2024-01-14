import React from "react";
import logo from '../../../../assets/Images/logo/logo.png'

export default function Sidebar() {
	return (
		<div className="left-sitebar">
			<div className="logo">
				<img src={logo} alt="logo" />
			</div>
			<div className="profile">
				<img src={''} alt="profile" />
				<span>
					<h6>Mehedi Hassan Roni</h6>
					<p>m.h.roni@xyz.com</p>
				</span>
			</div>
			<div className="sidebar-navitems">
				<ul>
					<li className="active">
						<a href>
							<i className="fa-solid fa-table-cells-large" /> Dashboard
						</a>
					</li>
					<li>
						<a href>
							<i className="fa-regular fa-clock" /> Reports
						</a>
					</li>
					<li>
						<a href>
							<i className="fa-solid fa-bell" /> Notifications
						</a>
					</li>
					<li>
						<a href>
							<i className="fa-solid fa-gear" /> Settings
						</a>
					</li>
					<li>
						<a href>
							<i className="fa-solid fa-arrow-right-from-bracket" /> Logout
						</a>
					</li>
				</ul>
			</div>
		</div>
		/* portal page sidebar end */
	);
}
