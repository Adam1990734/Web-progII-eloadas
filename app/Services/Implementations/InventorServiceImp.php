<?php

namespace App\Services\Implementations;

use App\Models\Inventor;
use App\Models\InventorDto\InventorMinimalDto;
use App\Models\InventorDto\InventorRequestDto;
use App\Models\InventorDto\InventorResponseDto;

class InventorServiceImp implements InventorService
{

    public function findAll($len): array
    {
        $result = Inventor::with("inventions")->paginate($len);
        $result->setCollection(
            $result->getCollection()->map(
                fn (Inventor $inventor) => InventorServiceImp::toRespDto($inventor)
            )
        );
        return $result;
    }

    public function findById(int $id, bool $isMinimal = false): InventorResponseDto|InventorMinimalDto
    {
        $inventor = Inventor::find($id);
        if($isMinimal)
            return InventorServiceImp::toMinDto($inventor);
        return InventorServiceImp::toRespDto($inventor);
    }

    public function fingAllByName(string $name, bool $isMinimal = false, int $limit = 20): array
    {
        $inventors = Invention::where("name", "like", "%".$name."%")->limit($limit)->get();
        if($isMinimal)
            return $inventors->map(
                fn (Inventor $inventor) => InventorServiceImp::toMinDto($inventor)
            )->toArray();
        return $inventors->map(
            fn (Inventor $inventor) => InventorServiceImp::toRespDto($inventor)
        )->toArray();
    }

    public function create(InventorRequestDto $dto): InventorResponseDto
    {
        $inventor = Inventor::create(compact($dto));
        return InventorServiceImp::toRespDto($inventor);
    }

    public function update(int $id, InventorRequestDto $dto): InventorResponseDto
    {
        $inventor = Inventor::find($id);
        $inventor->update(compact($dto));
        return InventorServiceImp::toRespDto($inventor);
    }

    public function delete(int $id): void
    {
        $inventor = Inventor::findOrFail($id);
        $inventor->delete();
    }

    public static function toReqDto(Inventor $inventor): InventorRequestDto
    {
        return new InventorRequestDto(
            $inventor->name,
            $inventor->bornat,
            $inventor->diedat,
            array_map(
                fn($invention) => $invention->id,
                $inventor->inventions
            )
        );
    }

    public static function toRespDto(Inventor $inventor): InventorResponseDto
    {
        return new InventorResponseDto(
          $inventor->id,
          $inventor->name,
          $inventor->bornat,
          $inventor->diedat,
            array_map(
                fn($invention) => InventionServiceImp::toMinDto($invention),
                $inventor->inventions
            )
        );
    }

    public static function toMinDto(Inventor $inventor): InventorMinimalDto
    {
        return new InventorMinimalDto(
            $inventor->id,
            $inventor->name
        );
    }
}
