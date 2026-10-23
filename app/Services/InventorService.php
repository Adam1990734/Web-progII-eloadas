<?php

namespace App\Services;

use App\Models\Inventor;
use App\Models\InventorDto\InventorRequestDto;
use App\Models\InventorDto\InventorResponseDto;
use App\Models\InventorDto\InventorMinimalDto;
interface InventorService
{
    public function findAll(int $len, int $page) : array;
    public function findById(int $id, bool $isMinimal = false) : InventorResponseDto | InventorMinimalDto | null;
    public function findAllByName(string $name, bool $isMinimal = false, int $limit = 20) : array;

    public function create(InventorRequestDto $dto) : InventorResponseDto;
    public function update(int $id, InventorRequestDto $dto) : InventorResponseDto | null;
    public function delete(int $id) : InventorResponseDto | null;
}
