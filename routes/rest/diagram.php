<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DiagramController;

Route::prefix("/api/diagram")
    ->group(function (){
        Route::get("/withcount", [DiagramController::class, "withInventionsCount"]);
        Route::get("/timeline", [DiagramController::class, "timeline"]);
    });
