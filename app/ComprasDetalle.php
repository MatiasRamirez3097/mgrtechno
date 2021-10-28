<?php

namespace App;

use App\PrimaryModel;

class ComprasDetalle extends PrimaryModel
{
    protected $table = 'compras_detalle';
    protected $primaryKey = 'id';
    protected $fillable = [
        'compra_id',
        'producto_id',
        'cantidad',
        'precioUnitario',
    ];
}
