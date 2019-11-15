<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ComprasProductosSerializado extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('compra_producto_serializado', function (Blueprint $table) {
            $table->integer('compra_id')->unsigned();
            $table->foreign('compra_id')->references('id')->on('compras')->onDelete('restrict')->onUpdate('restrict');
            $table->integer('producto_id')->unsigned();
            $table->foreign('producto_id')->references('id')->on('productos')->onDelete('restrict')->onUpdate('restrict');
            $table->integer('serializado_id')->unsigned();
            $table->foreign('serializado_id')->references('id')->on('serializados')->onDelete('restrict')->onUpdate('restrict')->default(null)->nullable();
            $table->integer('cantidad')->default(1);
            $table->boolean('estado')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
