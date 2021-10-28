<?php

namespace App;

use App\PrimaryModel;

class Venta extends PrimaryModel
{
    protected $table = 'ventas';
    protected $primaryKey = 'id';
    protected $fillable = [
        'user_id',
        'cliente_id',
        'factura',
        'total',
        'estado'
    ];
}
