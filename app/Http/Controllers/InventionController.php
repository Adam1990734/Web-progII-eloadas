<?php

namespace App\Http\Controllers;

use App\Models\Invention;
use Illuminate\Http\Request;

class InventionController extends Controller
{
    public function index()
    {
        return Invention::all();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required', "max:80"],
        ]);

        return Invention::create($data);
    }

    public function show(Invention $invention)
    {
        return $invention;
    }

    public function update(Request $request, Invention $invention)
    {
        $data = $request->validate([
            'name' => ['required', "max:80"],
        ]);

        $invention->update($data);

        return $invention;
    }

    public function destroy(Invention $invention)
    {
        $invention->delete();

        return response()->json();
    }
}
