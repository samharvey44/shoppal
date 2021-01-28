<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Auth;

use App\Models\Product;

use App\Http\Resources\ProductResource;

class ProductController extends Controller
{
    public function index(Request $request) {
        $search = $request->query('search');

        return (
            ProductResource::collection(Auth::user()->products()->where('name', 'LIKE', "%$search%")->get())
        );
    }
}
