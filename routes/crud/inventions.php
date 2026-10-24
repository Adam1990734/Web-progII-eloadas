<?php

use Illuminate\Support\Facades\Route;

Route::prefix("/crud/inventions")
    ->group(function() {
        Route::inertia("/", "invention/index")->name("inventions");
    });
