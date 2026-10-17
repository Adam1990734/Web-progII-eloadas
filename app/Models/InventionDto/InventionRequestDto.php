<?php

namespace App\Models\InventionDto;

class InventionRequestDto implements InventionDto
{
    public function __construct(
        public string $name
    ){}

    public static function fromArray(array $inventor): InventionRequestDto
    {
        return new self(
            $inventor["name"]
        );
    }
}
