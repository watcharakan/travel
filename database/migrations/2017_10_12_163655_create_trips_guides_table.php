<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTripsGuidesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {   Schema::disableForeignKeyConstraints();
        Schema::create('trips_guides', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('trip_id')->unsigned();
            $table->foreign('trip_id')->references('id')->on('trips');
            $table->integer('guide_id')->unsigned();
            $table->foreign('guide_id')->references('id')->on('guides');
            $table->timestamps();
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
        Schema::dropIfExists('trips_guides');
    }
}
