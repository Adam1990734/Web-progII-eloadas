<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Inventor;
class Invention extends Model
{
    protected $fillable = [
        'name'
    ];

    public function inventors()
    {
        return $this->belongsToMany(Inventor::class);
    }
}
