<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Trip;
use App\Schedule;
use App\Guidemember;
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       return Trip::with(['guide','schedules'])->orderBy('Trip_id','desc')->get();
    }
}
