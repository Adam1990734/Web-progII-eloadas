<?php

namespace App\Services;

use App\Models\Invention;
use App\Models\InventionDto\InventionRequestDto;
use App\Models\InventionDto\InventionResponseDto;
use App\Models\InventionDto\InventionMinimalDto;

interface InventionService
{
    public function findAll($page, $len) : InventionResponseDto;
    public function findById(int $id, bool $isMinimal = false) : InventionResponseDto | InventionMinimalDto;
    public function fingAllByName(string $name, bool $isMinimal = false, int $limit = 20) : InventionResponseDto | InventionMinimalDto;

    public function create() : InventionResponseDto;
    public function update(int $id, InventionRequestDto $dto) : InventionResponseDto;
    public function delete(int $id) : void;

    public function toReqDto(Invention $invention) : InventionRequestDto;
    public function toRespDto(Invention $invention) : InventionResponseDto;
    public function toMinDto(Invention $invention) : InventionMinimalDto;
}
