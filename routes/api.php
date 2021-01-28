<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\DashboardController;
use App\Http\Controllers\API\AccountController;
use App\Http\Controllers\API\ShoppingListController;
use App\Http\Controllers\API\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->group(function() {
    Route::get('/me', [UserController::class, 'me']);

    Route::get('/dashboard', [DashboardController::class, 'index']);

    Route::prefix('/account')->group(function() {
        Route::get('/', [UserController::class, 'index']);

        Route::put('/edit', [UserController::class, 'update']);
    });

    Route::prefix('/lists')->group(function() {
        Route::get('/', [ShoppingListController::class, 'index']);
    });

    Route::prefix('/products')->group(function() {
        Route::get('/', [ProductController::class, 'index']);
    });
});
