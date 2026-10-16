<?php

namespace App\Models\InventorDto;

class InventorMinimalDto
{
    public function __construct(
        public readonly int $id,
        public readonly string $name
    ){}
}
