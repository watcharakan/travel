<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTripsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()

    {  Schema::disableForeignKeyConstraints();

        Schema::create('trips', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',255);
            $table->text('description');
            $table->integer('creater_id')->unsigned()->nullable();
            $table->foreign('creater_id')->references('id')->on('guides');
            $table->string('location');
            $table->integer('catagories_id');
            $table->decimal('price',8,2);
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
        Schema::dropIfExists('trips');
    }
}
