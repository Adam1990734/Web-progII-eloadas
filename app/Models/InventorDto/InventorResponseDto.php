<?php

namespace App\Models\InventorDto;

class InventorResponseDto implements InventorDto
{
    public function __construct(
        public readonly int $id,
        public readonly string $name,
        public readonly int $bornat,
        public readonly int|null $diedat,
        //Itt minimal-t ad vissza
        public readonly array $inventions
    ){}

    public static function fromArray(array $inventor): InventorResponseDto
    {
        return new self(
            (int) $inventor["id"],
            $inventor["name"],
            $inventor["diedat"],
            $inventor["inventions"],
            $inventor["inventions"]
        );
    }
}
