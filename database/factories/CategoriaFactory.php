<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(App\Categoria::class, function (Faker $faker) {
    return [
    	'descripcion' => $faker->sentence(2),
    	'tipo' => $faker->randomElement(['MARCA','TIPO'])
    ];
});
