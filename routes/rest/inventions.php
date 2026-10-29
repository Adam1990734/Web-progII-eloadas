<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InventionController;

Route::prefix("/api/inventions/")
    ->middleware(['auth', 'verified'])
    ->group(function () {
        Route::get("/suggest", [InventionController::class, "suggestByName"]);
        Route::get("/{id}", [InventionController::class, "details"]);
        Route::post("/", [InventionController::class, "create"]);
        Route::put("/{id}", [InventionController::class, "update"]);
        Route::delete("/{id}", [InventionController::class, "delete"]);
    });

Route::prefix("/api/inventions/")
    ->group(function() {
        Route::get("/", [InventionController::class, "index"]);
    });
