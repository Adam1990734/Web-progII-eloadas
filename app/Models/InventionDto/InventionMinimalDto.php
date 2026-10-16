<?php

namespace App\Models\InventionDto;

class InventionMinimalDto
{
    public function __construct(
        public readonly int $id,
        public readonly string $name
    ) {}
}
