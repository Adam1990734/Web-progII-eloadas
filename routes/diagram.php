<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::prefix("/diagrams")
    ->group(function (){
        Route::inertia("/timeline", "diagram/timeline");
        Route::inertia("/withcount", "diagram/inventorsWithInvCount");
    });
