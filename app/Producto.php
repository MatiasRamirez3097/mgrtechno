<?php

namespace App;

use App\PrimaryModel;

class Producto extends PrimaryModel
{
    protected $table = 'productos';
	protected $primaryKey = 'id';
    //Definimos los campos que se pueden llenar con asignación masiva
    protected $fillable = ['tipo_id', 'marca_id','modelo','ean','upc','serializado'];

    protected $casts = [
        'tipo_id'    	=> 'integer',
        'marca_id' => 'integer',
        'modelo' => 'string',
        'ean' => 'string',
        'upc' => 'string',
        'serializado' => 'boolean'
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
    public function marca()
    {
        return $this->belongsTo(Categoria::class);
    }
    public function tipo()
    {
        return $this->belongsTo(Categoria::class);
    }
}
