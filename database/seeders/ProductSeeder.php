<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $hovis = new Product([
            'name' => 'Hovis white bread',
            'price' => 1.50,
            'category_id' => 1,
            'shop_id' => 1,
            'brand_id' => 1,
            'user_id' => 1,
        ]);

        $hovis->save();
    }
}
