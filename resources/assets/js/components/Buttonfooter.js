import React,{Component} from 'react';

class ButtonFooter extends Component{
	render(){
		return (
			<footer class="bottom-footer">
			
				<div class="container">
				
					<div class="row">
					
						<div class="col-xs-12 col-sm-6 col-md-4">
				
							<p class="copy-right">&#169; 2017 Togoby - tour hosting</p>
							
						</div>
						
						<div class="col-xs-12 col-sm-6 col-md-4">
						
							<ul class="bottom-footer-menu">
								<li><a href="#">Cookies</a></li>
								<li><a href="#">Policies</a></li>
								<li><a href="#">Terms</a></li>
								<li><a href="#">Blogs</a></li>
							</ul>
						
						</div>
						
						<div class="col-xs-12 col-sm-12 col-md-4">
							<ul class="bottom-footer-menu for-social">
								<li><a href="#"><i class="icon-social-twitter" data-toggle="tooltip" data-placement="top" title="twitter"></i></a></li>
								<li><a href="#"><i class="icon-social-facebook" data-toggle="tooltip" data-placement="top" title="facebook"></i></a></li>
								<li><a href="#"><i class="icon-social-google" data-toggle="tooltip" data-placement="top" title="google plus"></i></a></li>
								<li><a href="#"><i class="icon-social-instagram" data-toggle="tooltip" data-placement="top" title="instrgram"></i></a></li>
							</ul>
						</div>
					
					</div>

				</div>
				
			
			</footer>
			);
	}
}
export default ButtonFooter;