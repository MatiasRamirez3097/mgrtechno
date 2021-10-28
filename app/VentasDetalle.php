<?php

namespace App;

use App\PrimaryModel;

class VentasDetalle extends PrimaryModel
{
    protected $table = 'ventas_detalle';
    protected $primaryKey = 'id';
    protected $fillable = [
        'venta_id',
        'producto_id',
        'cantidad',
        'precioUnitario',
    ];
}
