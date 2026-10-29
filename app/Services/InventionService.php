<?php

namespace App\Services;

use App\Models\Invention;
use App\Models\InventionDto\InventionRequestDto;
use App\Models\InventionDto\InventionResponseDto;
use App\Models\InventionDto\InventionMinimalDto;

interface InventionService
{
    public function findAll(int $len, int $page) : array;
    public function findAllGetAsMinimal(int $len) : array;
    public function findById(int $id, bool $isMinimal = false) : InventionResponseDto | InventionMinimalDto | null;
    public function findAllByName(string $name, bool $isMinimal = false, int $limit = 20) : array;

    public function create(InventionRequestDto $dto) : InventionResponseDto;
    public function update(int $id, InventionRequestDto $dto) : InventionResponseDto | null;
    public function delete(int $id) : InventionResponseDto | null;
    public function findSuggestionsByNameAsMinimal(string $name, int $size) : array;
}
