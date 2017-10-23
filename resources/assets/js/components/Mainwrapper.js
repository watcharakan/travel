import React, { Component } from 'react';
import HeroHeader from './HeroHeader';
import Container from './Container';
import Recommence from './Recommence';
import Turtorial from './Turtorial';
import Createtrip from './Createtrip';
import Community from './Community';
class Mainwrapper extends Component{
	render(){
		return (

			<div className="main-wrapper scrollspy-container">
			<HeroHeader/>
			<Container/>
			<Recommence/>
			<Turtorial/>
			<Createtrip/>
			<Community/>
			</div>
			);
	}
}
export default Mainwrapper;