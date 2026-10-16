<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Invention;

class Inventor extends Model
{
    protected $fillable = [
        'name',
        'bornat',
        'diedat',
    ];

    public function inventions()
    {
        return $this->belongsToMany(Invention::class);
    }
}
