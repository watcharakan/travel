<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@ggwp')->name('home');
// Route::get('/trips','HomeController@index');
Route::get('/api/login/facebook', 'Auth\FacebookController@redirectToProvider')->name('facebook.login');
Route::get('/api/login/facebook/callback', 'Auth\FacebookController@handleProviderCallback');
Route::get('login/true','Auth\FacebookController@checkloginTrue');
Route::resource('trips', 'TripsController');