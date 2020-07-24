<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PrimaryModel extends Model
{
	use SoftDeletes;
	protected function toUpperOrNull($value)
	{
		if(is_string($value))
		{
			return strtoupper($value);	
		}
		else
		{
			return $value;
		}
	}
	protected function toLowerOrNull($value)
	{
		if(is_string($value))
		{
			return strtolower($value);	
		}
		else
		{
			return $value;
		}
	}
}