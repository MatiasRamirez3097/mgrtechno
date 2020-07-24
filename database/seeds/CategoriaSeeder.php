<?php

use Illuminate\Database\Seeder;
use App\Categoria;

class CategoriaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$miarray= [
    		[
    			'descripcion' => 'Gigabyte',
    			'tipo' => 'MARCA'
    		],
    		[
    			'descripcion' => 'ASRock',
    			'tipo' => 'MARCA'
    		],
    		[
    			'descripcion' => 'Motherboard',
    			'tipo' => 'TIPO'
    		],
    		[
    			'descripcion' => 'Fuente',
    			'tipo' => 'TIPO'
    		]
    	];
    	for($i = 0; $i<sizeof($miarray);$i++)
    	{
    		Categoria::create([
    			'descripcion' => $miarray[$i]['descripcion'],
    			'tipo' => $miarray[$i]['tipo']
        	]);	
    	}
        factory(Categoria::class)->times(25)->create();
    }
}
