<?php

namespace App\Services\Implementations;

use App\Models\Invention;
use App\Models\InventionDto;
use App\Services\InventionService;

class InventionServiceImp implements InventionService
{

    public function findAll($page, $len): InventionDto\InventionResponseDto
    {
        // TODO: Implement findAll() method.
    }

    public function findById(int $id, bool $isMinimal = false): InventionDto\InventionResponseDto|InventionDto\InventionMinimalDto
    {
        // TODO: Implement findById() method.
    }

    public function fingAllByName(string $name, bool $isMinimal = false, int $limit = 20): InventionDto\InventionResponseDto|InventionDto\InventionMinimalDto
    {
        // TODO: Implement fingAllByName() method.
    }

    public function create(): InventionDto\InventionResponseDto
    {
        // TODO: Implement create() method.
    }

    public function update(int $id, InventionDto\InventionRequestDto $dto): InventionDto\InventionResponseDto
    {
        // TODO: Implement update() method.
    }

    public function delete(int $id): void
    {
        // TODO: Implement delete() method.
    }

    public function toReqDto(Invention $invention): InventionDto\InventionRequestDto
    {
        // TODO: Implement toReqDto() method.
    }

    public function toRespDto(Invention $invention): InventionDto\InventionResponseDto
    {
        // TODO: Implement toRespDto() method.
    }

    public function toMinDto(Invention $invention): InventionDto\InventionMinimalDto
    {
        // TODO: Implement toMinDto() method.
    }
}
