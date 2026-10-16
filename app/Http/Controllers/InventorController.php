<?php

namespace App\Http\Controllers;

use App\Models\Inventor;
use Illuminate\Http\Request;

class InventorController extends Controller
{
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
