<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\ShoppingList;
use App\Models\Product;
use App\Models\ShoppingRun;

use Auth;

class DashboardController extends Controller
{
    public function index() {
        return (['data' => [
            'listCount' => ShoppingList::where('user_id', Auth::id())->count(),
            'productCount' => Product::where('user_id', Auth::id())->count(),
            'shoppingRunCount' => ShoppingRun::where('user_id', Auth::id())->count(),
        ]]);
    }
}
