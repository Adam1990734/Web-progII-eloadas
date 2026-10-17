<?php

namespace App\Models\InventionDto;

class InventionMinimalDto implements InventionDto
{
    public function __construct(
        public readonly int $id,
        public readonly string $name
    ) {}

    public function fromArray(array $inventor): InventionMinimalDto
    {
        return new self(
            (int) $inventor["id"],
            $inventor["name"]
        );
    }
}
