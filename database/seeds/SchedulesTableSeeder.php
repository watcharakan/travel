<?php

use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
class SchedulesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	     $faker = Faker::create();
        foreach (range(1,10) as $index) {
         DB::table('schedules')->insert([
            'trip_id' => $faker->numberBetween($min = 1, $max = 10),
            'time' => $faker->time($format = 'H:i', $max = 'now'),
            'description' => $faker->paragraph($nbSentences = 3, $variableNbSentences = true),
            
       		 ]);
    	}
	}
}
