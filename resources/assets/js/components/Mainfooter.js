import React,{Component} from 'react';

class MainFooter extends Component{
	render(){
		return (
			<footer class="main-footer">
			
				<div class="container">
				
					<div class="row">
					
						<div class="col-sm-12 col-md-4">
						
							<h5 class="footer-title">newsletter</h5>
							
							<p class="font16">Subsribe to get our latest updates and oeffers</p>
							
							<div class="footer-newsletter">
								
								<div class="form-group">
									<input class="form-control" placeholder="enter your email " />
									<button class="btn btn-primary">subsribe</button>
								</div>
								
								<p class="font-italic font13">*** Don't worry, we wont spam you!</p>
							
							</div>

						</div>
						
						<div class="col-sm-12 col-md-8">
						
							<div class="row">
								
								<div class="col-xs-12 col-sm-4 col-md-3 col-md-offset-3 mt-25-sm">
									<h5 class="footer-title">footer</h5>
									<ul class="footer-menu">
										<li><a href="#">Support</a></li>
										<li><a href="#">Advertise</a></li>
										<li><a href="#">Media Relations</a></li>
										<li><a href="#">Affiliates</a></li>
										<li><a href="#">Careers</a></li>
									</ul>
								</div>
								
								<div class="col-xs-12 col-sm-4 col-md-3 mt-25-sm">
									<h5 class="footer-title">quick  links</h5>
									<ul class="footer-menu">
										<li><a href="#">Media Relations</a></li>
										<li><a href="#">Affiliates</a></li>
										<li><a href="#">Careers</a></li>
										<li><a href="#">Support</a></li>
										<li><a href="#">Advertise</a></li>
									</ul>
								</div>
								
								<div class="col-xs-12 col-sm-4 col-md-3 mt-25-sm">
								
									<h5 class="footer-title">helps</h5>
									<ul class="footer-menu">
										<li><a href="#">Using a Tour</a></li>
										<li><a href="#">Submitting a Tour</a></li>
										<li><a href="#">Managing My Account</a></li>
										<li><a href="#">Merchant Help</a></li>
										<li><a href="#">White Label Website</a></li>
									</ul>
								
								</div>

							</div>

						</div>
						
					</div>
					
				</div>
				
			</footer>
			);
	}
}
export default MainFooter;