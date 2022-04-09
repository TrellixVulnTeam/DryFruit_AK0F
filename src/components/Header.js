import React from 'react';
import Main from './Main';
import { Route, HashRouter, NavLink, BrowserRouter as Router } from 'react-router-dom';


export default class Header extends React.Component {
	constructor(props){
		super();
		this.menuClick = this.menuClick.bind(this);
		this.state={
			menuToggle : false
		}
	}
	menuClick(e){
		let tempMenuState="";
		if(this.state.menuToggle){
			tempMenuState = false;
		} else {
			tempMenuState = true;
		}
		this.setState({menuToggle: tempMenuState});
		e.preventDefault();
	}
    render() {
        return (
            <Router>
				<header>  
					<div id="sticker-sticky-wrapper" className="sticky-wrapper" style={{height: "85px"}}>
						<div className="top-header-area" id="sticker">
							<div className="container">
								<div className="row">
									<div className="col-lg-12 col-sm-12 text-center">
										<div className="main-menu-wrap">
											<div className="site-logo">
												<a href="/">
													<img style={{width:"156px",height:"26px"}} src="" alt="" />
												</a>
											</div>
											<a className="mobile-show search-bar-icon" href="#">
												<i className="fas fa-search"></i>
											</a>
											<div className="mobile-menu mean-container">
												<div className="mean-bar">
													<a onClick={this.menuClick} className="meanmenu-reveal" style={{right:"0",left:"auto"}}>
														<span></span>
														<span></span>
														<span></span>
													</a>
													<nav className="mean-nav" >
														<ul className="sub-menu" style={{display: this.state.menuToggle ? 'block' : 'none'}}>
			                            					<li><NavLink to="/">Home</NavLink></li>
			                            					<li><NavLink to="/Contact">Contact</NavLink></li>
			                            					<li><NavLink to="/About">About Us</NavLink></li>
			                            					<li><NavLink to="/HealthTips">Health Tips</NavLink></li>
			                            					<li><NavLink to="/News">News</NavLink></li>
			                            					<li>
																<div className="header-icons">
																	<NavLink  to="/Cart"><i className="fas fa-shopping-cart"></i></NavLink>
																	<a className="mobile-hide search-bar-icon" href="#"><i className="fas fa-search"></i></a>
																</div>
															</li>
			                       						</ul>
													</nav>
												</div>
											</div>
										<a className="mobile-show search-bar-icon" href="#"><i className="fas fa-search"></i></a>
										<div className="mobile-menu"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<Main/>
		</Router>
        );
    }
}