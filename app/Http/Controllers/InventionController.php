<?php

namespace App\Http\Controllers;

use App\Models\Invention;
use App\Models\InventionDto\InventionRequestDto;
use App\Models\InventionDto\InventionResponseDto;
use App\Models\InventionDto\InventionMinimalDto;
use App\Services\InventionService;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class InventionController extends Controller
{
    public function __construct(
        private readonly InventionService $inventionService
    ){}

    public function index()
    {
        return response()->json(
            $this->inventionService->findAll(25)
        );
    }

    public function create(Request $request)
    {
        $invention = InventionRequestDto::fromArray($request->validate([
            'name' => ['required', "max:80"]
        ]));
        return response()->json(
            $this->inventionService->create($invention),
            Response::HTTP_CREATED
        );
    }

    public function details(int $id)
    {
        $invention = $this->inventionService->findById($id);
        return response()->json(
            $invention
        );
    }

    public function update(int $id, Request $request)
    {
        $invention = InventionRequestDto::fromArray($request->validate([
            'name' => ['required', "max:80"]
        ]));
        $this->inventionService->update($id, $invention);
        return response()->noContent();
    }

    public function delete(int $id)
    {
        $this->inventionService->delete($id);
        return response()->noContent();
    }
}
