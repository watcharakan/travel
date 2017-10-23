import React,{Component} from 'react';
import MainFooter from './Mainfooter';
import ButtonFooter from './Buttonfooter';
class Footer extends Component{
	render(){
		return (
			<div class="footer-wrapper scrollspy-footer">
			<MainFooter/>
			<ButtonFooter/>
			</div>
			);
	}
}
export default Footer;