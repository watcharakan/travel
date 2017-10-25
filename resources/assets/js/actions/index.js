import axios from 'axios';
export const TRIP_POSTS = 'trip_posts';
export const CREATE_LOGIN ='create_login';
export const FACEBOOK_LOGIN ='facebook_login';
// const ROOT_URL ='http://reduxblog.herokuapp.com/api';
// const API_KEY ='?key=PAPERCLIP1233';
export function tripPost(){
	 const request = axios.get(`http://projectravel.dev/login/true`);
  return {
    type:TRIP_POSTS,
    payload: request
  };
}

export function authFacebook(){
	const request = axios.post('http://projectravel.dev/login/facebook',{withCredentials: true});
	return {
		type:FACEBOOK_LOGIN,
		payload:request
	};
}


