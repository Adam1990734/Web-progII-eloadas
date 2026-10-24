<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::inertia("/contact", "message/create")->name("messages");
Route::inertia("/messages", "message/index");
