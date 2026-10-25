<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\Auth2;

Route::get('/', function () {return Inertia::render('welcome');})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {return Inertia::render('dashboard');})->name('dashboard');
});

//Rendszer alap:
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

//Rest API-k:
require __DIR__.'/rest/inventions.php';
require __DIR__.'/rest/inventors.php';
require __DIR__.'/rest/message.php';

//React page-ek:
require __DIR__.'/crud/inventions.php';
require __DIR__.'/crud/inventors.php';
require __DIR__.'/messages.php';
require __DIR__.'/show.php';
