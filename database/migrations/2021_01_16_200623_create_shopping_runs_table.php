<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShoppingRunsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shopping_runs', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('name');
            $table->dateTime('started_at')->nullable();
            $table->dateTime('finished_at')->nullable();

            $table->bigInteger('shopping_list_id')->unsigned();
            $table->bigInteger('user_id')->unsigned();

            $table->foreign('shopping_list_id')->references('id')->on('shopping_lists');
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
        Schema::dropIfExists('shopping_runs');
    }
}
