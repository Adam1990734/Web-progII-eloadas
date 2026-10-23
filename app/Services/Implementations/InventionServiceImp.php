<?php

namespace App\Services\Implementations;

use App\Services\InventionService;
use App\Models\Invention;
use App\Models\InventionDto\InventionMinimalDto;
use App\Models\InventionDto\InventionRequestDto;
use App\Models\InventionDto\InventionResponseDto;

class InventionServiceImp implements InventionService
{

    public function findAll(int $len, int $page): array
    {
        $result = Invention::with("inventors")->paginate(perPage: $len, page: $page);
        $result->setCollection(
            $result->getCollection()->map(
                fn (Invention $invention) => InventionServiceImp::toRespDto($invention)
            )
        );
        return $result->toArray();
    }

    public function findById(int $id, bool $isMinimal = false): InventionResponseDto|InventionMinimalDto
    {
        $invention = Invention::find($id);
        if($isMinimal)
            return InventionServiceImp::toMinDto($invention);
        return InventionServiceImp::toRespDto($invention);
    }

    public function findAllByName(string $name, bool $isMinimal = false, int $limit = 20): array
    {
        $inventions = Invention::where("name", "like", "%".$name."%")->limit($limit)->get();
        if($isMinimal)
            return $inventions->map(
                fn (Invention $invention) => InventionServiceImp::toMinDto($invention)
            )->toArray();
        return $inventions->map(
            fn (Invention $invention) => InventionServiceImp::toRespDto($invention)
        )->toArray();
    }

    public function create(InventionRequestDto $dto): InventionResponseDto
    {
        $invention = Invention::create(compact($dto));
        return InventionServiceImp::toRespDto($invention);
    }

    public function update(int $id, InventionRequestDto $dto): InventionResponseDto
    {
        $invention = Invention::find($id);
        $invention->update(compact($dto));
        return InventionServiceImp::toRespDto($invention);
    }

    public function delete(int $id): void
    {
        $invention = Invention::findOrFail($id);
        $invention->delete();
    }

    public static function toReqDto(Invention $invention): InventionRequestDto
    {
        return new InventionRequestDto(
            $invention->name
        );
    }

    public static function toRespDto(Invention $invention): InventionResponseDto
    {
        return new InventionResponseDto(
            $invention->id,
            $invention->name,
            $invention->inventors->map(
                fn($inventor) => InventorServiceImp::toMinDto($inventor)
            )->toArray()
        );
    }

    public static function toMinDto(Invention $invention): InventionMinimalDto
    {
        return new InventionMinimalDto(
            $invention->id,
            $invention->name
        );
    }
}
