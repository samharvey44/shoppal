<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Models\Favourite;

class FavouriteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $samBread = new Favourite([
            'nickname' => 'Nice bread',
            'product_id' => 1,
            'user_id' => 1,
        ]);

        $samBread->save();
    }
}
