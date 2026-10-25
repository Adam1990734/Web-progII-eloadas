<?php

namespace App\Models\InventorDto;

use App\Models\InventorDto\InventorDto;

class InventorInventionCountResponseDto implements InventorDto
{
    public function __construct(
        public readonly string $name,
        public readonly int $count
    ){}

    public static function fromArray(array $inventor)
    {
        // TODO: Implement fromArray() method.
    }
}
