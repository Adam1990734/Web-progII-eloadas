<?php

namespace App\Providers;

use App\Services\DiagramService;
use Illuminate\Support\ServiceProvider;

use \App\Services\InventorService;
use \App\Services\InventionService;
use App\Services\MessageService;
use \App\Services\Implementations;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(
            InventionService::class,
            Implementations\InventionServiceImp::class
        );
        $this->app->bind(
            InventorService::class,
            Implementations\InventorServiceImp::class
        );
        $this->app->bind(
            MessageService::class,
            Implementations\MessageServiceImp::class
        );
        $this->app->bind(
            DiagramService::class,
            Implementations\DiagramServiceImp::class
        );
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        /* Inertia::setRootView('components.mainpage'); */
        \Inertia\Inertia::setRootView('components.mainpage');
    }
}
