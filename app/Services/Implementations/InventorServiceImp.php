<?php

namespace App\Services\Implementations;

use App\Models\Inventor;
use App\Models\InventorDto;
use App\Models\InventorDto\InventorMinimalDto;
use App\Models\InventorDto\InventorRequestDto;
use App\Models\InventorDto\InventorResponseDto;
use App\Services\InventorService;

class InventorServiceImp implements InventorService
{

    public function findAll($page, $len): InventorResponseDto
    {
        // TODO: Implement findAll() method.
    }

    public function findById(int $id, bool $isMinimal = false): InventorResponseDto|InventorMinimalDto
    {
        // TODO: Implement findById() method.
    }

    public function fingAllByName(string $name, bool $isMinimal = false, int $limit = 20): InventorResponseDto|InventorMinimalDto
    {
        // TODO: Implement fingAllByName() method.
    }

    public function create(): InventorResponseDto
    {
        // TODO: Implement create() method.
    }

    public function update(int $id, InventorRequestDto $dto): InventorResponseDto
    {
        // TODO: Implement update() method.
    }

    public function delete(int $id): void
    {
        // TODO: Implement delete() method.
    }

    public function toReqDto(Inventor $invention): InventorRequestDto
    {
        // TODO: Implement toReqDto() method.
    }

    public function toRespDto(Inventor $invention): InventorResponseDto
    {
        // TODO: Implement toRespDto() method.
    }

    public function toMinDto(Inventor $invention): InventorMinimalDto
    {
        // TODO: Implement toMinDto() method.
    }
}
