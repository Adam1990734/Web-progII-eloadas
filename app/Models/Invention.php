<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Inventor;
class Invention extends Model
{
    protected $fillable = [
        'id',
        'name'
    ];

    public function inventors()
    {
        return $this->belongsToMany(
            Inventor::class,
            "inventor_invention"
        );
    }
}
