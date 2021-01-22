<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShoppingList extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'complete',
        'notes'
    ];

    public function products() {
        return $this->belongsToMany(Product::class)->withTimestamps();
    }

    public function shoppingRuns() {
        return $this->hasMany(ShoppingRun::class, 'shopping_list_id');
    }

    public function shop() {
        return $this->belongsTo(Shop::class, 'shop_id');
    }
}
