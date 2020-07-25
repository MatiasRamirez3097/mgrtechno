<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Stock extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stock', function(Blueprint $table) {
            $table->increments('id');

            //$table->integer('prods_id')->unsigned();
            //$table->foreign('prods_id')->references('id')->on('prods')->onDelete('restrict')->onUpdate('restrict');

            //$table->integer('provs_id')->unsigned();
            //$table->foreign('provs_id')->references('id')->on('provs')->onDelete('restrict')->onUpdate('restrict');
            $table->string('serial', 100)->unique()->nullable();
            $table->decimal('precio_entrada',8,0);
            $table->decimal('precio_salida',8,0)->nullable();
            $table->date('fecha_entrada');
            $table->date('fecha_salida')->nullable();
            $table->boolean('disponible')->default(true);
            
            //$table->integer('clientes_id')->nullable()->unsigned();
            //$table->foreign('clientes_id')->references('id')->on('clientes')->onDelete('restrict')->onUpdate('restrict');

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
        Schema::dropIfExists('stock');
    }
}