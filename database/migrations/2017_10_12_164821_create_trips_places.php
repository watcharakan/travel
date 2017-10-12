<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTripsPlaces extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    { Schema::disableForeignKeyConstraints();
        Schema::create('trips_places', function (Blueprint $table) {
             $table->increments('id');
             $table->integer('trip_id')->unsigned();
             $table->foreign('trip_id')->references('id')->on('trips');
             $table->integer('place_id')->unsigned();
             $table->foreign('place_id')->references('id')->on('places');
        });
        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trips_places');
    }
}
