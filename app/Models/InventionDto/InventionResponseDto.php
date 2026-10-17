<?php

namespace App\Models\InventionDto;

class InventionResponseDto implements InventionDto
{
    public function __construct(
        public readonly int $id,
        public readonly string $name,
        //Inventor minimal-ok listája
        public readonly array $inventors
    ){}

    public static function fromArray(array $inventor): InventionResponseDto
    {
        return new self(
            (int) $inventor["id"],
            $inventor["name"],
            $inventor["inventors"]
        );
    }
}
