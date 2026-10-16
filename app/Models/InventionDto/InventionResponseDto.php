<?php

namespace App\Models\InventionDto;

use App\Models\Inventor;

class InventionResponseDto
{
    public function __construct(
        public readonly int $id,
        public readonly string $name,
        //Inventor minimal-ok listája
        public readonly array $inventors
    ){}
}
