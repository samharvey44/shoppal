<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Models\ShoppingList;

class ShoppingListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $list1 = new ShoppingList([
            'name' => 'Weekly shop',
            'notes' => 'Just the basics.',
            'user_id' => 1,
        ]);

        $list1->save();
    }
}
