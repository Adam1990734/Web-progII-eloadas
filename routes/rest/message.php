<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MessageController;

Route::prefix("/api/messages")
    ->group(function() {
        Route::post("/", [MessageController::class, "create"]);
    });

Route::prefix("/api/messages")
    ->middleware(['auth', 'verified'])
    ->group(function () {
       Route::get("/", [MessageController::class, "index"]);
    });
