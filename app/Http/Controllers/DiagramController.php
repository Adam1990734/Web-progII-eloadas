<?php

namespace App\Http\Controllers;

use App\Services\DiagramService;

class DiagramController extends Controller
{
    public function __construct(
        private readonly DiagramService $diagramService
    ) {}

    public function withInventionsCount() {
        return response()->json(
            $this->diagramService->getAllInventorPairedWithInventionCount()
        );
    }
    public function timeline() {
        return response()->json(
            $this->diagramService->getAllInventorTimeline()
        );
    }
}
