<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
    ];

    public function shoppingLists() {
        return $this->belongsToMany(ShoppingList::class)->withTimestamps();
    }

    public function favourites() {
        return $this->hasMany(Favourite::class, 'product_id');
    }
}
