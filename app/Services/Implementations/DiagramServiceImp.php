<?php

namespace App\Services\Implementations;

use App\Models\Invention;
use App\Models\Inventor;
use App\Models\InventorDto\InventorInventionCountResponseDto;
use App\Models\InventorDto\InventorTimelineResponseDto;
use App\Services\DiagramService;

class DiagramServiceImp implements DiagramService
{
    function getAllInventorPairedWithInventionCount() : array
    {
        $inventors = Inventor::query()
            ->withCount("inventions")
            ->get();
        return $inventors->map(fn($inventor) => DiagramServiceImp::toInventionCountResp($inventor))->toArray();
    }

    function getAllInventorTimeline() : array
    {
        $inventors = Inventor::all();
        return $inventors->map(fn($inventor) => DiagramServiceImp::toTimeLineResp($inventor))->toArray();
    }

    static function toTimeLineResp(Inventor $inventor): InventorTimelineResponseDto
    {
        return new InventorTimelineResponseDto(
            $inventor->name,
            (int) $inventor->bornat,
            $inventor->diedat
        );
    }

    static function toInventionCountResp(Inventor $inventor): InventorInventionCountResponseDto
    {
        return new InventorInventionCountResponseDto(
            $inventor->name,
            $inventor->inventions()->count()
        );
    }
}
