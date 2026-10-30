<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdminController;

Route::get('/', function () {return Inertia::render('welcome');})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', "dashboard")->name("dashboard");
    Route::get('user', [AdminController::class, "adminPage"])->name("user");
    Route::get('admin', [AdminController::class, "adminPage"])->name("admin");
    Route::inertia('introduction', "welcome")->name("introduction");
});

//Rendszer alap:
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

//Rest API-k:
require __DIR__.'/rest/inventions.php';
require __DIR__.'/rest/inventors.php';
require __DIR__.'/rest/message.php';
require __DIR__.'/rest/diagram.php';

//React page-ek:
require __DIR__.'/crud/inventions.php';
require __DIR__.'/crud/inventors.php';
require __DIR__.'/messages.php';
require __DIR__.'/show.php';
require __DIR__.'/diagram.php';
