import React,{Component} from 'react';
import {authFacebook} from '../actions';
class SigninModel extends Component{

	render(){
		return (
<div id="loginModal" class="modal fade login-box-wrapper" tabindex="-1" data-width="550" data-backdrop="static" data-keyboard="false" data-replace="true">

	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
		<h4 class="modal-title text-center">Sign-in into your account</h4>
	</div>
	
	<div class="modal-body">
		<div class="row gap-20">
		
			<div class="col-sm-6 col-md-6">
				<button class="btn btn-facebook btn-block mb-5-xs"  >Log-in with Facebook</button>
			</div>
			<div class="col-sm-6 col-md-6">
				<button class="btn btn-google-plus btn-block">Log-in with Google+</button>
			</div>
			
			<div class="col-md-12">
				<div class="login-modal-or">
					<div><span>or</span></div>
				</div>
			</div>
			
			<div class="col-sm-12 col-md-12">
	
				<div class="form-group"> 
					<label>Username</label>
					<input class="form-control" placeholder="Min 4 and Max 10 characters" type="text"/> 
				</div>
			
			</div>
			
			<div class="col-sm-12 col-md-12">
			
				<div class="form-group"> 
					<label>Password</label>
					<input class="form-control" placeholder="Min 4 and Max 10 characters" type="password"/> 
				</div>
			
			</div>
			
			<div class="col-sm-6 col-md-6">
				<div class="checkbox-block"> 
					<input id="remember_me_checkbox" name="remember_me_checkbox" class="checkbox" value="First Choice" type="checkbox"/> 
					<label class="" for="remember_me_checkbox">Remember me</label>
				</div>
			</div>
			
			<div class="col-sm-6 col-md-6">
				<div class="login-box-link-action">
					<a data-toggle="modal" href="#forgotPasswordModal" class="block line18 mt-1">Forgot password?</a> 
				</div>
			</div>
			
			<div class="col-sm-12 col-md-12">
				<div class="login-box-box-action">
					No account? <a data-toggle="modal" href="#registerModal">Register</a>
				</div>
			</div>
			
		</div>
	</div>
	
	<div class="modal-footer text-center">
		<button type="button" class="btn btn-primary">Log-in</button>
		<button type="button" data-dismiss="modal" class="btn btn-primary btn-border">Close</button>
	</div>
	
</div>

			);
	}
}
export default SigninModel;