<?php

namespace App\Services;

use App\Models\Inventor;
use App\Models\InventorDto\InventorTimelineResponseDto;
use App\Models\InventorDto\InventorInventionCountResponseDto;

interface DiagramService
{
    function getAllInventorPairedWithInventionCount() : array;
    function getAllInventorTimeline() : array;

    static function toTimeLineResp(Inventor $inventor) : InventorTimelineResponseDto;
    static function toInventionCountResp(Inventor $inventor) : InventorInventionCountResponseDto;
}
