<?php

namespace App;

use App\PrimaryModel;

class Cliente extends PrimaryModel
{
    protected $table = 'clientes';
	protected $primaryKey = 'id';
    //Definimos los campos que se pueden llenar con asignación masiva
    protected $fillable = ['nombre', 'apellido','email','documento','domicilio','tel'];

    /*public function stock()
    {
        return $this->hasMany('App\Stock');
    }*/
    public function setNombreAttribute($value)
	{
	    $this->attributes['nombre'] = parent::toUpperOrNull($value);
	}
	public function setApellidoAttribute($value)
	{	
    	$this->attributes['apellido'] = parent::toUpperOrNull($value);
	}
	public function setCorreoAttribute($value)
	{	
    	$this->attributes['email'] = parent::toLowerOrNull($value);
	}
	public function setDomicilioAttribute($value)
	{	
    	$this->attributes['domicilio'] = parent::toUpperOrNull($value);
	}
	public function setTelAttribute($value)
	{	
    	$this->attributes['tel'] = parent::toUpperOrNull($value);
	}
}
