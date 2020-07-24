<?php

namespace App;

use App\PrimaryModel;

class Marca extends PrimaryModel
{
    
    protected $table = 'categorias';
	protected $primaryKey = 'id';
    //Definimos los campos que se pueden llenar con asignación masiva
    protected $fillable = ['nombre'];
    protected $hidden= ['tipo']
    public function setNombreAttribute($value)
	{
	    $this->attributes['nombre'] = parent::toUpperOrNull($value);
	}
	public function productos()
    {
        return $this->hasMany('App\Productos');
    }
}
