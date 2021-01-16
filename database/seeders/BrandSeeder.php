<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Models\Brand;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $hovis = new Brand([
            'name' => 'Hovis',
            'user_id' => 1,
        ]);

        $happy = new Brand([
            'name' => 'Happy Shopper',
            'user_id' => 1,
        ]);

        $hovis->save();
        $happy->save();
    }
}
