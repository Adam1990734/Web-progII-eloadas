<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::prefix("/crud/inventions")
    ->middleware(['auth', 'verified', 'admin'])
    ->group(function() {
        Route::inertia("/", "invention/index")->name("inventions");
        Route::inertia("/create", "invention/create");
        Route::get("/{id}", fn(int $id) => Inertia::render("invention/details", [
            "id" => $id
        ]))->whereNumber('id');
        Route::get("/update/{id}", fn(int $id) => Inertia::render("invention/update", [
            "id" => $id
        ]))->whereNumber('id');
        Route::get("/delete/{id}", fn(int $id) => Inertia::render("invention/delete", [
            "id" => $id
        ]))->whereNumber('id');
    });
