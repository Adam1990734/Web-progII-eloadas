<?php

namespace App\Models\InventorDto;

class InventorRequestDto
{
    public function __construct(
        public string $name,
        public int $bornat,
        public int $diedat,
        //itt csak id-t kap vissza
        public array $inventions
    ){}
}
