<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductoCrearRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            
        ];
    }

    public function messages()
    {

    }

    public function createProducto()
    {
        return 'it works    '
        /*DB::transaction(function() use ($data))
        {
            $producto = Producto::create([
                                
            ])
        }*/
    }
}
