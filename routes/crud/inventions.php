<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::prefix("/crud/inventions")
    ->group(function() {
        Route::inertia("/", "invention/index")->name("inventions");
        Route::inertia("/create", "invention/create");
        Route::get("/{id}", fn(int $id) => Inertia::render("invention/details", [
            "id" => $id
        ]));
        Route::get("/update/{id}", fn(int $id) => Inertia::render("invention/update", [
            "id" => $id
        ]));
        Route::get("/delete/{id}", fn(int $id) => Inertia::render("invention/delete", [
            "id" => $id
        ]));
    });
