<?php

namespace App;

use App\PrimaryModel;

class Producto extends PrimaryModel
{
    protected $table = 'productos';
	protected $primaryKey = 'id';
    //Definimos los campos que se pueden llenar con asignación masiva
    protected $fillable = ['tipos_id', 'marcas_id','modelo','codbarras'];

    protected $casts = [
        'tipo'    	=> 'string',
        'marca' => 'string',
        'modelo' => 'string',
        'ean' => 'string',
        'upc' => 'string',
        'serializado' => 'string',
        'estado' => 'boolean'
    ];

	public function setModeloAttribute($value)
	{	
    	$this->attributes['modelo'] = parent::toUpperOrNull($value);
	}
	public function setUpcAttribute($value)
	{	
    	$this->attributes['upc'] = parent::toUpperOrNull($value);
	}
	public function setEanAttribute($value)
	{	
		$this->attributes['ean'] = parent::toUpperOrNull($value);	
	}
    public function marcas()
    {
        return $this->belongsTo('App\Marcas');
    }
    public function tiposdeproductos()
    {
        return $this->belongsTo('App\TiposDeProductos');
    }
}
