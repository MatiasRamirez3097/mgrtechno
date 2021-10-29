<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\User;
use App\Compras;

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([[
            'name' => 'Matias Ramirez',
            'email' => 'matiasgr3009@gmail.com',
            'password' => Hash::make('cil123'),
        ],
        [
            'name' => 'Sergio Mask',
            'email' => 'asd97@gmail.com',
            'password' => Hash::make('cil123'),
        ],
        [
            'name' => 'Mauro Fernandez',
            'email' => 'asd97asd@gmail.com',
            'password' => Hash::make('cil123'),
        ]]
        );
        DB::table('proveedores')->insert([
            'nombre' => 'ELIT', 
            'tel' => 5645664
        ]);
        DB::table('compras')->insert([[
            'proveedor_id' => 1,
            'factura' => 'FAC-00003',
            'fecha' => '2021-03-04',
            'total' => 10000,
            'estado' => 'Facturado',
            'user_id' => 1
        ],
        [
            'proveedor_id' => 1,
            'factura' => 'FAC-00004',
            'fecha' => '2021-03-05',
            'total' => 150000,
            'estado' => 'Facturado',
            'user_id' => 2
        ],
        [
            'proveedor_id' => 1,
            'factura' => 'FAC-00005',
            'fecha' => '2021-03-05',
            'total' => 200000,
            'estado' => 'Facturado',
            'user_id' => 2
        ]]
        );
        DB::table('users')->insert([[
            'name' => 'Matias Ramirez',
            'email' => 'matiasgr3009@gmail.com',
            'password' => Hash::make('cil123'),
        ],
        [
            'name' => 'Sergio Mask',
            'email' => 'asd97@gmail.com',
            'password' => Hash::make('cil123'),
        ],
        [
            'name' => 'Mauro Fernandez',
            'email' => 'asd97asd@gmail.com',
            'password' => Hash::make('cil123'),
        ]]
        );
        //$permission = Permission::create(['name' => 'administrador']);
        //$user = User::first();
        //$user->givePermissionTo('administrador');
    }
}
