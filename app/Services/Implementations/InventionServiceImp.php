<?php

namespace App\Services\Implementations;

use App\Models\Inventor;
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

    public function findAllGetAsMinimal(int $len) : array
    {
        $result = Invention::with("inventors")->limit($len)->get();
        return $result->map(
            fn (Invention $invention) => InventionServiceImp::toMinDto($invention)
        )->toArray();
    }

    public function findById(int $id, bool $isMinimal = false): InventionResponseDto | InventionMinimalDto | null
    {
        $invention = Invention::find($id);
        if($invention === null)
            return null;
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
        $invention = Invention::create(get_object_vars($dto));
        return InventionServiceImp::toRespDto($invention);
    }

    public function update(int $id, InventionRequestDto $dto): InventionResponseDto | null
    {
        $invention = Invention::find($id);
        if($invention === null)
            return null;
        $invention->update(get_object_vars($dto));
        return InventionServiceImp::toRespDto($invention);
    }

    public function delete(int $id): InventionResponseDto|null
    {
        $invention = Invention::find($id);
        if($invention === null)
            return null;
        $invention->delete();
        return InventionServiceImp::toRespDto($invention);
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

    public function findSuggestionsByNameAsMinimal(string $name, int $size): array
    {
        return Invention::where("inventions.name", "LIKE", "%".$name."%")
            ->limit($size)
            ->get()
            ->map(
                fn($invention) => InventionServiceImp::toMinDto($invention)
            )
            ->toArray();
    }
}
