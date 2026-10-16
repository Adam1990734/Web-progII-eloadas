<?php

namespace App\Services\Implementations;

use App\Models\Invention;
use App\Models\InventionDto;
use App\Models\InventionDto\InventionMinimalDto;
use App\Models\InventionDto\InventionRequestDto;
use App\Models\InventionDto\InventionResponseDto;
use App\Services\InventionService;

class InventionServiceImp implements InventionService
{

    public function findAll($page, $len): InventionResponseDto
    {
        // TODO: Implement findAll() method.
    }

    public function findById(int $id, bool $isMinimal = false): InventionResponseDto|InventionMinimalDto
    {
        // TODO: Implement findById() method.
    }

    public function fingAllByName(string $name, bool $isMinimal = false, int $limit = 20): InventionResponseDto|InventionMinimalDto
    {
        // TODO: Implement fingAllByName() method.
    }

    public function create(): InventionResponseDto
    {
        // TODO: Implement create() method.
    }

    public function update(int $id, InventionRequestDto $dto): InventionResponseDto
    {
        // TODO: Implement update() method.
    }

    public function delete(int $id): void
    {
        // TODO: Implement delete() method.
    }

    public function toReqDto(Invention $invention): InventionRequestDto
    {
        // TODO: Implement toReqDto() method.
    }

    public function toRespDto(Invention $invention): InventionResponseDto
    {
        // TODO: Implement toRespDto() method.
    }

    public function toMinDto(Invention $invention): InventionMinimalDto
    {
        // TODO: Implement toMinDto() method.
    }
}
