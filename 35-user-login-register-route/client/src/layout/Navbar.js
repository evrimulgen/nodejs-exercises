import React from 'react';
import { NavLink } from 'react-router-dom';
import { AuthButton, Auth } from '../App';

const Navbar = props => {
	return (
		<nav className="navbar navbar-expand navbar-dark bg-primary text-white justify-content-between">
			<a className="navbar-brand">{props.title}</a>

			<ul className="navbar-nav">
				<li className="nav-item">
					<NavLink exact to="/" activeClassName="active" className="nav-link">
						Home
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink
						exact
						to="/dashboard"
						activeClassName="active"
						className="nav-link"
					>
						Dashboard
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink
						exact
						to="/projects"
						activeClassName="active"
						className="nav-link"
					>
						Projects
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink to="/tasks" activeClassName="active" className="nav-link">
						Tasks
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink
						exact
						to="/profile"
						activeClassName="active"
						className="nav-link"
					>
						Profile
					</NavLink>
				</li>
				<li className="nav-item">
					<a className="nav-link disabled">James Hansen</a>
				</li>
				{Auth.isAuthenticated === true ? (
					<AuthButton />
				) : (
					<li className="nav-item">
						<NavLink to="/login" activeClassName="active" className="nav-link">
							Login
						</NavLink>
					</li>
				)}
			</ul>
		</nav>
	);
};

Navbar.defaultProps = {
	title: 'SPM'
};

export default Navbar;
