<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsShoppingListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products_shopping_lists', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->bigInteger('product_id')->unsigned();
            $table->bigInteger('shopping_list_id')->unsigned();

            $table->foreign('product_id')->references('id')->on('products');
            $table->foreign('shopping_list_id')->references('id')->on('shopping_lists');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products_shopping_lists');
    }
}
