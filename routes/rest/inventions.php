<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InventionController;

Route::prefix("/api/inventions/")
    ->middleware(['auth', 'verified'])
    ->group(function () {
        Route::get("/", [InventionController::class, "index"]);
        Route::get("/{id}", [InventionController::class, "details"]);
        Route::post("/create", [InventionController::class, "create"]);
        Route::put("/update/{id}", [InventionController::class, "update"]);
        Route::delete("/delete/{id}", [InventionController::class, "delete"]);
    });
