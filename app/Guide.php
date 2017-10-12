<?php

namespace App;
use App\Trip;
use Illuminate\Database\Eloquent\Model;

class Guide extends Model
{
    public function trip(){
    	return hasMany(Trip::class)
    }
}
