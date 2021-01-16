<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\Artisan;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UserSeeder::class,
            ShopSeeder::class,
            BrandSeeder::class,
            CategorySeeder::class,
            ProductSeeder::class,
            FavouriteSeeder::class,
            ShoppingListSeeder::class,
            ShoppingRunSeeder::class,
        ]);

        Artisan::call('passport:install');
    }
}
