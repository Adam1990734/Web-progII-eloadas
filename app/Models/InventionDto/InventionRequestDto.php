<?php

namespace App\Models\InventionDto;

class InventionRequestDto
{
    public function __construct(
        public string $name,
        //Csak id lista
        public array $inventors
    ){}
}
