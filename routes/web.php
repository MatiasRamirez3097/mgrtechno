<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
	Route::get('/admin/inicio', ['uses' => 'InicioController@Index']);
	Route::get('/ajax/productos', ['uses' => 'AjaxController@getProductos']);
	Route::post('/ajax/marcas', ['uses' => 'AjaxController@getMarcas']);
	Route::post('/ajax/codbarras', ['uses' => 'AjaxController@getCodbarras']);
	Route::post('/ajax/proveedores', ['uses' => 'AjaxController@getProveedores']);
	Route::post('/ajax/seriales', ['uses' => 'AjaxController@getSeriales']);
	Route::get('/ajax/chart', ['uses' => 'AjaxController@LineEntrada']);
	Route::get('/ajax/linesalida',['uses' => 'AjaxController@LineSalida']);
	Route::post('/ajax/tiposprods',['uses' => 'AjaxController@getTiposProductos']);
	Route::post('/ajax/check/codbarras',['uses' => 'AjaxController@checkCodbarras']);
	Route::post('/ajax/clientes',['uses' => 'AjaxController@getClientes']);

Route::post('/datatables/getproveedores', ['uses' => 'ProveedoresController@GetProveedores']);
Route::post('/datatables/getproductos', ['uses' => 'ProductosController@GetProductos']);
Route::post('/datatables/getstock', ['uses' => 'DatatablesController@GetStock']);
Route::post('/datatables/getclientes', ['uses' => 'DatatablesController@GetClientes']);
Route::get('/datatables/getproveedoreseliminados', ['uses' => 'DatatablesController@GetProveedoresEliminados']);
Route::get('/datatables/getproductoseliminados',['uses' => 'ProductosController@GetProductosEliminados']);
Route::post('/datatables/getcompras', ['uses' => 'DatatablesController@getCompras']);