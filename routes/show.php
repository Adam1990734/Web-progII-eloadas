<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::prefix("/show")
    ->group(function() {
       Route::inertia("/inventions", "databaseOnlyRead/invention");
       Route::inertia("/inventors", "databaseOnlyRead/inventor");
    });
