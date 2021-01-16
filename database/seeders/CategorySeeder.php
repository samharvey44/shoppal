<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $bread = new Category([
            'name' => 'Bread',
            'user_id' => 1,
        ]);

        $dairy = new Category([
            'name' => 'Dairy',
            'user_id' => 1,
        ]);

        $crisps = new Category([
            'name' => 'Crisps',
            'user_id' => 1,
        ]);

        $bread->save();
        $dairy->save();
        $crisps->save();
    }
}
