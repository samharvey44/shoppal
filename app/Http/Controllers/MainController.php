<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;

class MainController extends Controller
{
    /**
     * Return the main html file.
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return view('index', [
            'clientSecret' => DB::table('oauth_clients')->where('id', 2)->first()->secret,
        ]);
    }
}