<?php

namespace App;

use App\PrimaryModel;

class Categoria extends PrimaryModel
{
	const MARCA = 'MARCA';
    const TIPO = 'TIPO';

    protected $table = 'categorias';
	protected $hidden = ['tipo'];
	protected $primaryKey = 'id';
    //Definimos los campos que se pueden llenar con asignación masiva
    protected $fillable = ['descripcion'];

    public function setNombreAttribute($value)
	{
	    $this->attributes['nombre'] = parent::toUpperOrNull($value);
	}

	public function tipoproducto()
	{
		return $this->hasMany(Producto::class)->where('tipo', Categoria::TIPO);
	}

	public function scopeMarcas($query)
	{
		return $query->where('tipo','MARCA')->get();
	}

	public function scopeTipos($query)
	{
		return $query->where('tipo','TIPO')->get();
	}
}
