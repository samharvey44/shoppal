<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Support\Facades\Hash;

use App\Http\Resources\UserResource;

use App\Models\User;
use App\Models\ShoppingList;
use App\Models\Product;
use App\Models\ShoppingRun;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Shop;

class UserController extends Controller
{
    public function me() {
        return UserResource::make(Auth::user());
    }

    public function index() {
        return (['data' => [
            'listCount' => ShoppingList::where('user_id', Auth::id())->count(),
            'productCount' => Product::where('user_id', Auth::id())->count(),
            'shoppingRunCount' => ShoppingRun::where('user_id', Auth::id())->count(),
            'brandCount' => Brand::where('user_id', Auth::id())->count(),
            'categoryCount' => Category::where('user_id', Auth::id())->count(),
            'shopCount' => Shop::where('user_id', Auth::id())->count(),
        ]]);
    }

    public function update(Request $request) {
        $user = Auth::user();

        $rules = [];
        $values = collect($request->all());

        switch($request->requestType) {
            case ('profile'): {
                $rules = ['email' => 'required', 'name' => 'required'];

                break;
            }

            default: {
                $rules = ['password' => 'required|min:5'];

                $values = $values->merge([
                    'password' => Hash::make($request->password),
                ]);

                break;
            }
        }

         $request->validate($rules);

         $user->update($values->snakifyKeys()->toArray());

         return UserResource::make($user);
    }
}
