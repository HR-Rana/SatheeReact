import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Images/logo/logo.png'
export default function Navbar() {
  return (
   <header>
				<div className="navigation-bar">
					<div className="flex-box">
						<div className="logo">
							<Link to="/">
								{" "}
								<img src={logo} alt="logo" />
							</Link>
						</div>
						<div className="nav-items">
							<ul>
								<li>
									<Link className="active" to="/">
										Home
									</Link>
								</li>
								<li>
									<Link to="About">Who we are</Link>
								</li>
								<li>
									<Link to="Service">What we do</Link>
								</li>
								<li>
									<Link to="/Blog">Our Science</Link>
								</li>
								<li>
									<Link to="/Login">Login</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="bars-icon" id="bars-icon">
						<span className="bars" id="bars">
							<i className="fa-solid fa-bars" />
						</span>
						<span className="cross" id="cross">
							<i className="fa-solid fa-xmark" />
						</span>
					</div>
				</div>
			</header>
  )
}
