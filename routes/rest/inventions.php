<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InventionController;

Route::prefix("/api/inventions/")
    ->middleware(['auth', 'verified', 'admin'])
    ->group(function () {
        Route::get("/suggest", [InventionController::class, "suggestByName"]);
        Route::get("/{id}", [InventionController::class, "details"])
            ->whereNumber('id');
        Route::post("/", [InventionController::class, "create"]);
        Route::put("/{id}", [InventionController::class, "update"])
            ->whereNumber('id');
        Route::delete("/{id}", [InventionController::class, "delete"])
            ->whereNumber('id');
    });

Route::prefix("/api/inventions/")
    ->group(function() {
        Route::get("/", [InventionController::class, "index"]);
    });
