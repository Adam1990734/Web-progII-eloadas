<?php

namespace App\Services\Implementations;

use App\Models\Inventor;
use App\Models\InventorDto;
use App\Services\InventorService;

class InventorServiceImp implements InventorService
{

    public function findAll($page, $len): InventorDto\InventorResponseDto
    {
        // TODO: Implement findAll() method.
    }

    public function findById(int $id, bool $isMinimal = false): InventorDto\InventorResponseDto|InventorDto\InventorMinimalDto
    {
        // TODO: Implement findById() method.
    }

    public function fingAllByName(string $name, bool $isMinimal = false, int $limit = 20): InventorDto\InventorResponseDto|InventorDto\InventorMinimalDto
    {
        // TODO: Implement fingAllByName() method.
    }

    public function create(): InventorDto\InventorResponseDto
    {
        // TODO: Implement create() method.
    }

    public function update(int $id, InventorDto\InventorRequestDto $dto): InventorDto\InventorResponseDto
    {
        // TODO: Implement update() method.
    }

    public function delete(int $id): void
    {
        // TODO: Implement delete() method.
    }

    public function toReqDto(Inventor $invention): InventorDto\InventorRequestDto
    {
        // TODO: Implement toReqDto() method.
    }

    public function toRespDto(Inventor $invention): InventorDto\InventorResponseDto
    {
        // TODO: Implement toRespDto() method.
    }

    public function toMinDto(Inventor $invention): InventorDto\InventorMinimalDto
    {
        // TODO: Implement toMinDto() method.
    }
}
