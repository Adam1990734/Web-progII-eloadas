<?php

namespace App\Http\Controllers;

use App\Models\Inventor;
use App\Models\InventorDto\InventorRequestDto;
use App\Models\InventorDto\InventorResponseDto;
use App\Models\InventorDto\InventorMinimalDto;
use App\Services\InventorService;
use Illuminate\Http\Request;

class InventorController extends Controller
{
    public function __construct(
        private readonly InventorService $inventorService
    ){}

    public function index()
    {
        return Inventor::all();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required', "max:40"],
            'bornat' => ['required', 'integer'],
            'diedat' => ['nullable', 'integer'],
        ]);

        return Inventor::create($data);
    }

    public function show(Inventor $inventor)
    {
        return $inventor;
    }

    public function update(Request $request, Inventor $inventor)
    {
        $data = $request->validate([
            'name' => ['required', "max:40"],
            'bornat' => ['required', 'integer'],
            'diedat' => ['nullable', 'integer'],
        ]);

        $inventor->update($data);

        return $inventor;
    }

    public function destroy(Inventor $inventor)
    {
        $inventor->delete();

        return response()->json();
    }
}
