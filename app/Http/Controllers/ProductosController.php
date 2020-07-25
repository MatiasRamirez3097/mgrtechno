<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Producto;
use App\TiposDeProductos;
use App\Marcas;
use DB;
use Redirect;
use View;
use Validator;
use Response;

class ProductosController extends Controller
{
    public function GetProductos(Request $request)
	{
        $parameters = $request->all();
		//return $parameters['search'];
		$retornar = Producto::select(['productos.id', 'tiposdeproductos.nombre as tipo','marcas.nombre as marca','productos.modelo','codbarras'])
					->join('marcas','productos.marcas_id','=','marcas.id')
					->join('tiposdeproductos','tiposdeproductos.id','=','productos.tiposdeproductos_id');
		if($parameters['search'] != null)
		{
			$filtro = $parameters['search'];
			$retornar = $retornar->where(function ($retornar) use ($filtro) {
								$retornar->orWhere('tiposdeproductos.nombre','ilike',"%$filtro%");
								$retornar->orWhere('marcas.nombre','ilike',"%$filtro%");
								$retornar->orWhere('productos.modelo','ilike',"%$filtro%");
								/*if(is_numeric($filtro))
								{*/
									$retornar->orWhere('productos.codbarras','ilike',"%$filtro%");
								//}
						});
		}
		if(sizeof($parameters['sortDesc'])> 0 && sizeof($parameters['sortBy'])> 0)
		{
			if($parameters['sortDesc'][0] == true)
			{
				$retornar->orderBy($parameters['sortBy'][0], 'desc');	
			}
			else
			{
				$retornar->orderBy($parameters['sortBy'][0], 'asc');
			}
			
		}

		return Response::json($retornar->paginate($parameters['itemsPerPage']));
	}
    public function Index() 
    {
    	return view('productos.productos');
    }
    public function NuevoProductoView()
    {
    	return view('productos.productos_nuevo');
    }
    public function EditarProductoView($id)
    {
        $producto = Productos::select('*')->where('id','=', $id)->first();
        return View::make('productos.productos_editar')->with('producto', $producto); 
    }
    public function NuevoProducto(Request $request)
    {
        if(is_string($request->marca))
        {
            $marca = Marcas::create([
                'nombre' => $request->marca,
            ]);
            $request->marca = Marcas::where('nombre','ilike',$request->marca)->first();
        }
        if(is_string($request->tipo))
        {
            $tipo = TiposDeProductos::create([
                'nombre' => $request->tipo
            ]);
            $request->tipo = TiposDeProductos::where('nombre','ilike',$request->tipo)->first();
        }
    	try 
        {
            $validator = Validator::make($request->all(), [
                'tipo' => 'required',
                'modelo' => 'required',
                'marca' => 'required',
            ]);
            if ($validator->fails()) {
                return redirect()
                            ->back()
                            ->withErrors($validator)
                            ->withInput();
            }
            $query = Productos::create([
                'modelo' => $request->modelo,
                'marcas_id' => $request->marca['id'],
                'tipos_id' => $request->tipo['id'] ,
                'ean' => $request->ean ?? null,
                'upc' => $request->upc ?? null,
                'serializado' => $request->serializado
            ]);
            return 'work';
        }
        catch(Exception $e)
        {
        	DB::rollback();
        	return redirect()
                ->back()
                ->withErrors('Se ha producido un errro: ( ' . $e->getCode() . ' ): ' . $e->getMessage().' - Copie este texto y envielo a informática');
        }
    }
    public function EditarProducto(Request $request)
    {
        $this->validate($request, [
            'tipo' => 'required',
            'modelo' => 'required',
            'marca' => 'required'
        ]);
        if(is_string($request->marca))
        {
            $marca = Marcas::create([
                'nombre' => $request->marca,
            ]);
            $request->marca = Marcas::where('nombre','ilike',$request->marca)->first();
        }
        if(is_string($request->tipo))
        {
            $tipo = TiposDeProductos::create([
                'nombre' => $request->tipo
            ]);
            $request->tipo = TiposDeProductos::where('nombre','ilike',$request->tipo)->first();
        }
        Productos::find($request->id)->update([
            'tipos_id' => $request->tipo['id'],
            'modelo' => $request->modelo,
            'marcas_id' => $request->marca['id'],
            'ean' => $request->ean ?? null,
            'upc' => $request->upc ?? null,
            'serializado' => $request->serializado
        ]);
        return 'work';
    }
    public function EliminarProducto(Request $request)
    {
        $this->validate($request, [
            'id' => 'required|integer',
        ]);

        $queryinfo = Productos::find($request['id']);
            $queryinfo->estado = false;
        $queryinfo->save();
    }
}
