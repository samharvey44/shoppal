<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\ShoppingList;

use App\Http\Resources\ShoppingListResource;

use Auth;

class ShoppingListController extends Controller
{
    public function index(Request $request) {
        $query = Auth::user()->lists()->latest();

        if ($request->query('search') === "false") {
            $query = $query->whereComplete($request->query('complete') === 'true');
        }

        return ShoppingListResource::collection($query->get());
    }
}
