<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShoppingRun extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'started_at',
        'finished_at',
    ];
}
