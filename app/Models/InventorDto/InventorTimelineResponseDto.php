<?php

namespace App\Models\InventorDto;

use App\Models\InventorDto\InventorDto;

class InventorTimelineResponseDto implements InventorDto
{
    public function __construct(
        public readonly string $name,
        public readonly int $birtYear,
        public readonly int $deathYear
    ){}

    public static function fromArray(array $inventor)
    {
        // TODO: Implement fromArray() method.
    }
}
