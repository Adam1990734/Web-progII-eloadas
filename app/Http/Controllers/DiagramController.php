<?php

namespace App\Http\Controllers;

use App\Services\DiagramService;

class DiagramController extends Controller
{
    public function __construct(
        private readonly DiagramService $diagramService
    ) {}
    public function inventorsWithInventionsCount() {

    }
    public function inventorsTimeline() {

    }
}
