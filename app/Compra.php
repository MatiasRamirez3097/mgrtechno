<?php

namespace App;

//use Illuminate\Database\Eloquent\Model;
use App\PrimaryModel;

class Compra extends PrimaryModel
{
    protected $table = 'compras';
    protected $primaryKey = 'id';
    protected $fillable = ['proveedor_id','estado','factura'];

    public function Proveedor(){
    	return $this->belongsTo(Proveedor::class);
    }
}