<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\Auth2;

Route::get('/', function () {return Inertia::render('welcome');})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {return Inertia::render('dashboard');})->name('dashboard');
});

//Rest API-k:
require __DIR__.'/rest/inventions.php';
require __DIR__.'/rest/inventors.php';
require __DIR__.'/rest/message.php';

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
