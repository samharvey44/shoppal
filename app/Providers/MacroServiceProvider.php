<?php

namespace App\Providers;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\ServiceProvider;

use Str;

class MacroServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        Collection::macro('snakifyKeys', function () {
            return collect($this->items)
                ->mapWithKeys(fn ($item, $key) => [\Str::snake($key) => $item]);
        });
    }
}