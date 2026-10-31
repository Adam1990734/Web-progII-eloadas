<?php

namespace App\Models\InventorDto;

class InventorRequestDto implements InventorDto
{
    public function __construct(
        public string $name,
        public int $bornat,
        public int|null $diedat,
        //itt csak id-t kap vissza
        public array $inventions
    ){}

    public static function fromArray(array $inventor): InventorRequestDto
    {
        return new self(
            htmlspecialchars(
                trim(strip_tags($inventor["name"]))
            ),
            $inventor["bornat"],
            $inventor["diedat"] ?? null,
            $inventor["inventions"]
        );
    }
}
