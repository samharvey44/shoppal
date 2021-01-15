<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function categories() {
        return $this->hasMany(Category::class, 'user_id');
    }

    public function shops() {
        return $this->hasMany(Shop::class, 'user_id');
    }

    public function favourites() {
        return $this->hasMany(Favourite::class, 'user_id');
    }

    public function lists() {
        return $this->hasMany(ShoppingList::class, 'user_id');
    }

    public function brands() {
        return $this->hasMany(Brand::class, 'user_id');
    }

    public function products() {
        return $this->hasMany(Product::class, 'user_id');
    }

    public function shoppingRuns() {
        return $this->hasMany(ShoppingRun::class, 'user_id');
    }
}
