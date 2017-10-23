import _ from 'lodash';
import {TRIP_POSTS} from '../actions';
import {FACEBOOK_LOGIN} from '../actions';
// import {CREATE_LOGIN} from '../actions';
export default function(state = {},action){

	switch(action.type){
		case TRIP_POSTS:
			return _.mapKeys(action.payload.data, 'id');

		// case CREATE_LOGIN:
		// 	return _.mapKeys(action.payload.data);
		case FACEBOOK_LOGIN:
			return _.mapKeys(action.payload.data,'id');
			
		default:
		return state;

	}
}