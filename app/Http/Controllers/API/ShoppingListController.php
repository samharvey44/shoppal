<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\ShoppingList;

use App\Http\Resources\ShoppingListResource;

use Auth;

class ShoppingListController extends Controller
{
    public function index() {
        return ShoppingListResource::collection(ShoppingList::where('user_id', Auth::id())->get());
    }
}
