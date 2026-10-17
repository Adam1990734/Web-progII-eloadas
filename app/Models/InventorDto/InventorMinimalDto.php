<?php

namespace App\Models\InventorDto;

class InventorMinimalDto implements InventorDto
{
    public function __construct(
        public readonly int $id,
        public readonly string $name
    ){}

    public static function fromArray(array $inventor): InventorMinimalDto
    {
        return new self(
            (int) $inventor["id"],
            $inventor["name"]
        );
    }
}
