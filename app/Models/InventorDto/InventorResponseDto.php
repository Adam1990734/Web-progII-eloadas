<?php

namespace App\Models\InventorDto;

class InventorResponseDto
{
    public function __construct(
        public readonly int $id,
        public readonly string $name,
        public readonly int $bornat,
        public readonly int $diedat,
        //Itt minimal-t ad vissza
        public readonly array $inventions
    ){}
}
