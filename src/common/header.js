import React, { useEffect, useState } from "react";

const Header = (props) => {
	const [keyword, setkeyword] = useState("");

	return (
		<nav
			class="navbar navbar-expand-lg navbar-light bg-light"
			style={{ fontSize: "1em", display: props.display}}
		>
			<div style={{ margin: "auto", width: "70%" }}>
				<a href="#" class="meanmenu-reveal">
					<img
						src="https://redcliffelabs.com/assets/img/logos/logo-transparent.png"
						alt="Redcliffe Life Diagnostics Logo"
						height="50px"
					/>
				</a>
				<div
					class="collapse navbar-collapse"
					id="navbarSupportedContent"
					style={{ float: "right" }}
				>
					<ul class="navbar-nav">
						<li class="nav-item">
							<a class="nav-link active" href="/">
								Home
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/">
								About Us
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/">
								Health Packages
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/">
								Covid-19
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/contact">
								Contact
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/">
								Partner With Us
							</a>
						</li>
						<li class="mean-last">
							<a href="tel:8988988787" class="btn btn-secondary mobileView">
								898 898 8787
							</a>
						</li>
					</ul>
				</div>
			</div>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
		</nav>
	);
};

export default Header;
