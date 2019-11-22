<?php

namespace App;

//use Illuminate\Database\Eloquent\Model;
use App\PrimaryModel;

class Compras extends PrimaryModel
{
    protected $table = 'compras';
    protected $primaryKey = 'id';
    protected $fillable = ['proveedores_id','factura'];
}