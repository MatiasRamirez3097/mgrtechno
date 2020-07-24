<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(App\Producto::class, function (Faker $faker) {
    $marcas = App\Categoria::Marcas()->pluck('id')->toArray();
    $tipos = App\Categoria::Tipos()->pluck('id')->toArray();
    return [
        'tipo_id' => $faker->randomElement($tipos), 
        'marca_id' => $faker->randomElement($marcas),
        'modelo' => $faker->sentence(2),
        'ean' => $faker->unique()->sentence(1),
        'upc' => $faker->unique()->sentence(1),
        'serializado' => $faker->randomElement([true,false])
    ];
});
