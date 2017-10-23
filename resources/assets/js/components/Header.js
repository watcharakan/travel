import React,{Component} from 'react';

class Header extends Component{
	render(){
		return(
		

		<header id="header">
			<nav className="navbar navbar-default navbar-fixed-top navbar-sticky-function navbar-arrow">

				<div className="container">
					
					<div className="logo-wrapper">
						<div className="logo">
							<a href="index.html"><img src="images/logo-white.png" alt="Logo" /></a>
						</div>
					</div>
					
					<div id="navbar" className="navbar-nav-wrapper">
					
						<ul className="nav navbar-nav" id="responsive-menu">
						
							<li>
								<a href="index.html">Home</a>
								<ul>
									<li><a href="index-02.html">Home 02</a></li>
									<li><a href="index-03.html">Home 03</a></li>
									
								</ul>
							</li>
							
							<li>
								<a href="offered.html">Offered Tour</a>
								<ul>
									<li>
										<a href="offered-result.html">Offered Tour Result</a>
										<ul>
											<li><a href="offered-result-02.html">Offered Tour Result 02</a></li>
										</ul>
									</li>
									<li>
										<a href="offered-detail.html">Offered Tour Detail</a>
										<ul>
											<li><a href="offered-detail-02.html">Offered Tour Detail 02</a></li>
											<li><a href="offered-detail-03.html">Offered Tour Detail 03</a></li>
										</ul>
									</li>
									<li><a href="offered-payment.html">Offered Detail Payment</a></li>
									<li><a href="offered-payment-done.html">Offered Detail Payment Done</a></li>
									<li><a href="offered-create.html">Offered Detail Create</a></li>
									<li><a href="offered-create-done.html">Offered Detail Create Done</a></li>
								</ul>
							</li>
							
							<li>
								<a href="requested.html">Requested Tour</a>
								<ul>
									<li>
										<a href="requested-result.html">Requested Tour Result</a>
										<ul>
											<li><a href="requested-result-02.html">Requested Tour Result 02</a></li>
										</ul>
									</li>
									<li><a href="requested-detail.html">Requested Tour Detail</a></li>
									<li><a href="requested-requested-bid.html">Requested Tour Bid</a></li>
									<li><a href="requested-requested-bid-open.html">Requested Tour Bid Open</a></li>
									
								</ul>
							</li>
							
							<li>
								<a href="guide.html">Guide</a>
								<ul>
									<li>
										<a href="guide-result.html">Guide Result</a>
										<ul>
											<li><a href="guide-result-02.html">Guide Result 02</a></li>
										</ul>
									</li>
									<li><a href="guide-detail.html">Guide Detail</a></li>
									<li><a href="guide-payment.html">Guide Payment</a></li>
									<li><a href="guide-payment-done.html">Guide Payment Done</a></li>
									<li><a href="guide-detail-offer.html">Guide - Tour</a></li>
									
								</ul>
							</li>
							
							<li>
								<a href="#">Pages</a>
								<ul>
									<li>
										<a href="guide-detail-setting.html">Dashboard</a>
										<ul>
											<li><a href="guide-detail-setting-edit-profile.html">Dashboard - Edit Profile</a></li>
											<li><a href="guide-detail-setting-guide-information.html">Dashboard - Personal Information</a></li>
											<li><a href="guide-detail-setting-change-pass.html">Dashboard - Change Password</a></li>
											<li><a href="guide-detail-setting-my-tour.html">Dashboard - My Tour</a></li>
											<li><a href="guide-detail-setting-my-wihslist.html">Dashboard - My Wishlist</a></li>
										</ul>
									</li>
									<li><a href="about-us.html">About Us</a></li>
									<li><a href="contact-us.html">Contact Us</a></li>
									<li>
										<a href="faq.html">FAQ</a>
										<ul>
											<li><a href="faq-02.html">FAQ 2</a></li>
										</ul>
									</li>
									<li>
										<a href="blog.html">Blog</a>
										<ul>
											<li><a href="blog-single.html">Blog 2</a></li>
										</ul>
									</li>
									<li><a href="404-error-page.html">404 - Error Page</a></li>
									<li><a href="static-page.html">Static Page</a></li>
									<li>
										<a href="#">Shortcode</a>
										<ul>
											<li><a href="shortcode-typography.html">Shortcode - Typography</a></li>
											<li><a href="shortcode-element.html">Shortcode - Element</a></li>
											<li><a href="shortcode-component.html">Shortcode - Component</a></li>
											<li><a href="shortcode-layout-fullwidth.html">Shortcode - Layout Full Width</a></li>
											<li><a href="shortcode-layout-left-sidebar.html">Shortcode - Layout Left Sidebar</a></li>
											<li><a href="shortcode-layout-right-sidebar.html">Shortcode - Layout Right Sidebar</a></li>
										</ul>
									</li>
								</ul>
							</li>
							
						</ul>
				
					</div>

					<div className="nav-mini-wrapper">
						<ul className="nav-mini">
							<li><a data-toggle="modal" href="#registerModal"><i className="icon-user-follow" data-toggle="tooltip" data-placement="bottom" title="sign up"></i></a></li>
							<li><a data-toggle="modal" href="#loginModal"><i className="icon-login" data-toggle="tooltip" data-placement="bottom" title="login"></i> </a></li>
						</ul>
					</div>
				
				</div>
				
				<div id="slicknav-mobile"></div>
				
			</nav>
			</header>
			

	
			);
	}
}
export default Header;