import React from 'react'
import { Link, NavLink } from 'react-router-dom'
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
									<NavLink to="/">
										Home
									</NavLink>
								</li>
								<li>
									<NavLink to="About">Who we are</NavLink>
								</li>
								<li>
									<NavLink to="Service">What we do</NavLink>
								</li>
								<li>
									<NavLink to="/Blog">Our Science</NavLink>
								</li>
								<li>
									<NavLink to="/Login">Login</NavLink>
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
