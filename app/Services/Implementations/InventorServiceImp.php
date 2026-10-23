<?php

namespace App\Services\Implementations;

use App\Services\InventorService;
use App\Models\Inventor;
use App\Models\InventorDto\InventorMinimalDto;
use App\Models\InventorDto\InventorRequestDto;
use App\Models\InventorDto\InventorResponseDto;

class InventorServiceImp implements InventorService
{

    public function findAll(int $len, int $page): array
    {
        $result = Inventor::with("inventions")->paginate(perPage: $len, page: $page);
        $result->setCollection(
            $result->getCollection()->map(
                fn (Inventor $inventor) => InventorServiceImp::toRespDto($inventor)
            )
        );
        return $result->toArray();
    }

    public function findById(int $id, bool $isMinimal = false): InventorResponseDto | InventorMinimalDto| null
    {
        $inventor = Inventor::find($id);
        if($inventor === null)
            return null;
        if($isMinimal)
            return InventorServiceImp::toMinDto($inventor);
        return InventorServiceImp::toRespDto($inventor);
    }

    public function findAllByName(string $name, bool $isMinimal = false, int $limit = 20): array
    {
        $inventors = Inventor::where("name", "like", "%".$name."%")->limit($limit)->get();
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
        $inventor = Inventor::create(get_object_vars($dto));
        return InventorServiceImp::toRespDto($inventor);
    }

    public function update(int $id, InventorRequestDto $dto): InventorResponseDto | null
    {
        $inventor = Inventor::find($id);
        if($inventor === null)
            return null;
        $inventor->update(get_object_vars($dto));
        return InventorServiceImp::toRespDto($inventor);
    }

    public function delete(int $id): InventorResponseDto | null
    {
        $inventor = Inventor::find($id);
        if($inventor === null)
            return null;
        $inventor->delete();
        return InventorServiceImp::toRespDto($inventor);
    }

    public static function toReqDto(Inventor $inventor): InventorRequestDto
    {
        return new InventorRequestDto(
            $inventor->name,
            $inventor->bornat,
            $inventor->diedat,
            $inventor->inventions->map(
                fn($invention) => $invention->id
            )->toArray()
        );
    }

    public static function toRespDto(Inventor $inventor): InventorResponseDto
    {
        return new InventorResponseDto(
          $inventor->id,
          $inventor->name,
          $inventor->bornat,
          $inventor->diedat,
          $inventor->inventions->map(
                fn($invention) => InventionServiceImp::toMinDto($invention)
          )->toArray()
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
