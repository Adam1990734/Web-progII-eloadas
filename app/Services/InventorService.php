<?php

namespace App\Services;

use App\Models\Inventor;
use App\Models\InventorDto;
interface InventorService
{
    public function findAll($page, $len) : InventorDto\InventorResponseDto;
    public function findById(int $id, bool $isMinimal = false) : InventorDto\InventorResponseDto | InventorDto\InventorMinimalDto;
    public function fingAllByName(string $name, bool $isMinimal = false, int $limit = 20) : InventorDto\InventorResponseDto | InventorDto\InventorMinimalDto;

    public function create() : InventorDto\InventorResponseDto;
    public function update(int $id, InventorDto\InventorRequestDto $dto) : InventorDto\InventorResponseDto;
    public function delete(int $id) : void;

    public function toReqDto(Inventor $invention) : InventorDto\InventorRequestDto;
    public function toRespDto(Inventor $invention) : InventorDto\InventorResponseDto;
    public function toMinDto(Inventor $invention) : InventorDto\InventorMinimalDto;
}
