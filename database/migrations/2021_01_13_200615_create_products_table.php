<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('name')->nullable(false);
            $table->decimal('price', $precision = 8, $scale = 2)->nullable();

            $table->bigInteger('category_id')->unsigned()->nullable();
            $table->bigInteger('shop_id')->unsigned()->nullable();
            $table->bigInteger('brand_id')->unsigned()->nullable();
            $table->bigInteger('user_id')->unsigned();

            $table->foreign('category_id')->references('id')->on('categories');
            $table->foreign('shop_id')->references('id')->on('shops');
            $table->foreign('brand_id')->references('id')->on('brands');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
