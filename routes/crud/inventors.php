<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::prefix("/crud/inventors")
    ->middleware(['auth', 'verified', 'admin'])
    ->group(function() {
        Route::inertia("/", "inventor/index")->name("inventors");
        Route::inertia("/create", "inventor/create");
        Route::get("/{id}", fn(int $id) => Inertia::render("inventor/details", [
            "id" => $id
        ]));
        Route::get("/update/{id}", fn(int $id) => Inertia::render("inventor/update", [
            "id" => $id
        ]));
        Route::get("/delete/{id}", fn(int $id) => Inertia::render("inventor/delete", [
            "id" => $id
        ]));
    });
