import React, { Component } from 'react';

class HeroHeader extends Component{
	render(){
		return (
			<div className="hero img-bg-01">
				<div className="container">

					<h1>Where do you want to go?</h1>
					<p>Discover and book your unique travel experiences offered by local experts</p>

					<form>
						<div className="form-group">
							<input type="text" placeholder="eg: London, Paris, Rome" className="form-control flexdatalist" data-data="data/countries.json" data-search-in='["name","capital"]' data-visible-properties='["capital","name","continent"]' data-group-by="continent" data-selection-required="true" data-focus-first-result="true" data-min-length="1" data-value-property="iso2" data-text-property="{capital}, {name}" data-search-contain="false" name="countries"/>
							<button className="btn"><i className="icon-magnifier"></i></button>
						</div>
					</form>
					
					<div className="top-search">
						<span className="font700">Top Searches : </span>
						<a href="#">Thailand</a>
						<a href="#">Malaysia</a>
						<a href="#">Japan</a>
						<a href="#">Hong Kong</a>
						<a href="#">Singapore</a>
					</div>

				</div>
				
			</div>
		

			);
	}
}
export default HeroHeader;