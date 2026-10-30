<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function adminPage(Request $request)
    {
        if($request->user()->role === 1 || $request->user()->role === 2)
            return Inertia::render('welcome');
        else
            return Inertia::render('welcome');
    }
}
