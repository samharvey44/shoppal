<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Models\Shop;

class ShopSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tesco = new Shop([
            'name' => 'Tesco',
            'user_id' => 1,
        ]);

        $aldi = new Shop([
            'name' => 'Aldi',
            'user_id' => 1,
        ]);

        $tesco->save();
        $aldi->save();
    }
}
