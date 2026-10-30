<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InventorController;

Route::prefix("/api/inventors/")
    ->middleware(['auth', 'verified', 'admin'])
    ->group(function () {
        Route::get("/{id}", [InventorController::class, "details"])
            ->whereNumber('id');
        Route::post("/", [InventorController::class, "create"]);
        Route::put("/{id}", [InventorController::class, "update"])
            ->whereNumber('id');
        Route::delete("/{id}", [InventorController::class, "delete"])
            ->whereNumber('id');
    });

Route::prefix("/api/inventors/")
    ->group(function() {
        Route::get("/", [InventorController::class, "index"]);
    });
