<?php

namespace App\Services;

use App\Models\Inventor;
use App\Models\InventorDto\InventorRequestDto;
use App\Models\InventorDto\InventorResponseDto;
use App\Models\InventorDto\InventorMinimalDto;
interface InventorService
{
    public function findAll($page, $len) : InventorResponseDto;
    public function findById(int $id, bool $isMinimal = false) : InventorResponseDto | InventorMinimalDto;
    public function fingAllByName(string $name, bool $isMinimal = false, int $limit = 20) : InventorResponseDto | InventorMinimalDto;

    public function create() : InventorResponseDto;
    public function update(int $id, InventorRequestDto $dto) : InventorResponseDto;
    public function delete(int $id) : void;

    public function toReqDto(Inventor $invention) : InventorRequestDto;
    public function toRespDto(Inventor $invention) : InventorResponseDto;
    public function toMinDto(Inventor $invention) : InventorMinimalDto;
}
