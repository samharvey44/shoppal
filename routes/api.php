<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\DashboardController;
use App\Http\Controllers\API\AccountController;

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
    });
});
