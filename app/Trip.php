<?php

namespace App;
use App\Guide;
use Illuminate\Database\Eloquent\Model;
use App\Schedule;
class Trip extends Model
{
    public function guide(){
    	return $this->BelongsTo(Guide::class,'creater_id');
    }

    public function schedules(){
    	return $this->HasMany(Schedule::class);
    }
}
