<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\User;

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
        DB::table('users')->insert([
            'name' => 'Matias Ramirez',
            'email' => 'matiasgr3009@gmail.com',
            'password' => Hash::make('cil123'),
        ]);
        $permission = Permission::create(['name' => 'administrador']);
        $user = User::first();
        $user->givePermissionTo('administrador');
    }
}
