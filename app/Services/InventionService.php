<?php

namespace App\Services;

use App\Models\Invention;
use App\Models\InventionDto;

interface InventionService
{
    public function findAll($page, $len) : InventionDto\InventionResponseDto;
    public function findById(int $id, bool $isMinimal = false) : InventionDto\InventionResponseDto | InventionDto\InventionMinimalDto;
    public function fingAllByName(string $name, bool $isMinimal = false, int $limit = 20) : InventionDto\InventionResponseDto | InventionDto\InventionMinimalDto;

    public function create() : InventionDto\InventionResponseDto;
    public function update(int $id, InventionDto\InventionRequestDto $dto) : InventionDto\InventionResponseDto;
    public function delete(int $id) : void;

    public function toReqDto(Invention $invention) : InventionDto\InventionRequestDto;
    public function toRespDto(Invention $invention) : InventionDto\InventionResponseDto;
    public function toMinDto(Invention $invention) : InventionDto\InventionMinimalDto;
}
