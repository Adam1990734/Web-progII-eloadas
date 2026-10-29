<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InventorController;

Route::prefix("/api/inventors/")
    ->middleware(['auth', 'verified'])
    ->group(function () {
        Route::get("/{id}", [InventorController::class, "details"]);
        Route::post("/", [InventorController::class, "create"]);
        Route::put("/{id}", [InventorController::class, "update"]);
        Route::delete("/{id}", [InventorController::class, "delete"]);
    });

Route::prefix("/api/inventors/")
    ->group(function() {
        Route::get("/", [InventorController::class, "index"]);
    });
