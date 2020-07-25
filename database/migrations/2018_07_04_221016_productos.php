<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Productos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('tiposdeproductos_id')->unsigned();
            $table->foreign('tiposdeproductos_id')->references('id')->on('tiposdeproductos')->onDelete('restrict')->onUpdate('restrict');
            $table->integer('marcas_id')->unsigned();
            $table->foreign('marcas_id')->references('id')->on('marcas')->onDelete('restrict')->onUpdate('restrict');
            $table->string('modelo');
            $table->string('codbarras', 80)->unique();
            $table->boolean('estado')->default(true);
            $table->integer('cantidad');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('productos');
    }
}
