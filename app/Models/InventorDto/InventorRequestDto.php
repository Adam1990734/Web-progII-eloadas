<?php

namespace App\Models\InventorDto;

class InventorRequestDto implements InventorDto
{
    public function __construct(
        public string $name,
        public int $bornat,
        public int $diedat,
        //itt csak id-t kap vissza
        public array $inventions
    ){}

    public static function fromArray(array $inventor): InventorRequestDto
    {
        return new self(
            $inventor["name"],
            $inventor["bornat"],
            $inventor["diedat"],
            $inventor["inventions"]
        );
    }
}
