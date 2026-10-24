<?php

namespace App\Http\Controllers;

use App\Models\Inventor;
use App\Models\InventorDto\InventorRequestDto;
use App\Models\InventorDto\InventorResponseDto;
use App\Models\InventorDto\InventorMinimalDto;
use App\Services\InventorService;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class InventorController extends Controller
{
    public function __construct(
        private readonly InventorService $inventorService
    ){}

    public function index(Request $request)
    {
        return response()->json(
            $this->inventorService->findAll(
                25,
                $request->query("page", 1)
            )
        );
    }

    public function create(Request $request)
    {
        $inventor = InventorRequestDto::fromArray($request->validate([
            'name' => ['required', "max:40"],
            'bornat' => ['required', 'integer'],
            'diedat' => ['integer'],
            'inventions' => ['array']
        ]));
        return response()->json(
            $this->inventorService->create($inventor),
            Response::HTTP_CREATED
        );
    }

    public function details(int $id)
    {
        $inventor = $this->inventorService->findById($id);
        if($inventor === null)
            return response()->noContent(Response::HTTP_NOT_FOUND);
        return response()->json(
            $inventor
        );
    }

    public function update(int $id, Request $request)
    {
        $inventor = InventorRequestDto::fromArray($request->validate([
            'name' => ['required', "max:40"],
            'bornat' => ['required', 'integer'],
            'diedat' => ['integer', 'nullable'],
            'inventions' => ['required', 'array'],
            'inventions.*' => ['required', 'integer']
        ]));
        $inventor = $this->inventorService->update($id, $inventor);
        if($inventor === null)
            return response()->noContent(Response::HTTP_NOT_FOUND);
        return response()->noContent();
    }

    public function delete(int $id)
    {
        $inventor = $this->inventorService->delete($id);
        if($inventor === null)
            return response()->noContent(Response::HTTP_NOT_FOUND);
        return response()->noContent();
    }
}
