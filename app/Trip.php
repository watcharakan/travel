<?php

namespace App;
use App\Guide;
use Illuminate\Database\Eloquent\Model;
use App\Schedule;
class Trip extends Model
{
    public function guide(){
    	return $this->belongsTo(Guide::class);
    }
    
    public function schedule(){
    	return $this->HasMany(Schedule::class);
    }
}
