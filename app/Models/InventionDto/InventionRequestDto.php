<?php

namespace App\Models\InventionDto;

class InventionRequestDto implements InventionDto
{
    public function __construct(
        public string $name,
        //Csak id lista
        public array $inventors
    ){}

    public function fromArray(array $inventor): InventionRequestDto
    {
        return new self(
            $inventor["name"],
            $inventor["inventors"]
        );
    }
}
