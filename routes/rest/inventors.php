<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InventorController;

Route::prefix("/api/inventors/")
    ->middleware(['auth', 'verified'])
    ->group(function () {
        Route::get("/", [InventorController::class, "index"]);
        Route::get("/{id}", [InventorController::class, "details"]);
        Route::post("/create", [InventorController::class, "create"]);
        Route::put("/update/{id}", [InventorController::class, "update"]);
        Route::delete("/delete/{id}", [InventorController::class, "delete"]);
    });
