<?php

namespace App;
use App\Trip;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    public function trip(){
    	return $this->belongsTo(Trip::class);
    }
}
