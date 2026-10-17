<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

use \App\Services\InventorService;
use \App\Services\InventionService;
use \App\Services\Implementations;

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
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
