import React, { Component } from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {tripPost} from '../actions';

import {Link} from 'react-router-dom';
class Recommence extends Component{
	componentDidMount(){
		this.props.tripPost();
		
	}

	renderTrip(){
		
		return _.map(this.props.posts,post=>{

			return (

								<div className="GridLex-col-4_mdd-4_sm-6_xs-6_xss-12">
									
									<div className="trip-guide-item">
									
										<div className="trip-guide-image">
											<img src="images/trip/03.jpg" alt="images" />
										</div>
										
										<div className="trip-guide-content">
											<h3 key={post.id}>{post.name}</h3>
											<p>{post.description}</p>
										</div>

										<div className="trip-guide-bottom">
										
											<div className="trip-guide-person clearfix">
												<div className="image">
													<img src="images/testimonial/01.jpg" className="img-circle" alt="images" />
												</div>
												<p className="name">By: <a href="#">{post.guide.name}</a></p>
												<p>Local expert from Thailand</p>
											</div>
											
											<div className="trip-guide-meta row gap-10">
												<div className="col-xs-6 col-sm-6">
													<div className="rating-item">
														<input type="hidden" className="rating" data-filled="fa fa-star rating-rated" data-empty="fa fa-star-o" data-fractions="2" data-readonly value="3.5"/>
													</div>
												</div>
												<div className="col-xs-6 col-sm-6 text-right">
													5 days 4 nights
												</div>
											</div>
											
											<div className="row gap-10">
												<div className="col-xs-12 col-sm-6">
													<div className="trip-guide-price">
														Starting at
														<span className="block inline-block-xs">{post.price} BAHT</span>
													</div>
												</div>
												<div className="col-xs-12 col-sm-6 text-right text-left-xs">
													<a href="#" className="btn btn-primary">Details</a>
												</div>
											</div>
										
										</div>
					
									</div>
								
								</div>


				);
		})
	}

	render(){
		return (

			<div className="bg-white pt-70 pb-60 clearfix">
			
				<div className="container">

					<div className="row">
					
						<div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
						
							<div className="section-title">
							
								<h2>Recommended trips</h2>
								<p className="lead">The trips that offered by local guides or experts for travellers</p>
							</div>
						
						</div>
					
					</div>

					<div className="trip-guide-wrapper mb-30">
					
						<div className="GridLex-gap-20 GridLex-gap-15-mdd GridLex-gap-10-xs">
					
							<div className="GridLex-grid-noGutter-equalHeight">
							
								{this.renderTrip()}
							
							</div>
						
						</div>
						
					</div>
					
				</div>
				
			</div>
				);
	}
}
function mapStateToProps(state){
	return {posts: state.posts};
}
export default connect(mapStateToProps,{tripPost})(Recommence);