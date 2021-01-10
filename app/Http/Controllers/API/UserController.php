<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Auth;
use App\Http\Resources\UserResource;

class UserController extends Controller
{
    public function me() {
        return UserResource::make(Auth::user());
    }
}
