<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shop extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public function products() {
        return $this->hasMany(Product::class, 'shop_id');
    }

    public function lists() {
        return $this->hasMany(ShoppingList::class, 'shop_id');
    }
}
