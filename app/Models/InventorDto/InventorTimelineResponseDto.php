<?php

namespace App\Models\InventorDto;

use App\Models\InventorDto\InventorDto;

class InventorTimelineResponseDto implements InventorDto
{
    public function __construct(
        public readonly string $name,
        public readonly int $birthYear,
        public readonly int|null $deathYear
    ){}

    public static function fromArray(array $inventor)
    {
        return new self(
            $inventor["name"],
            (int) $inventor["birthYear"],
            (int) $inventor["deathYear"]
        );
    }
}
