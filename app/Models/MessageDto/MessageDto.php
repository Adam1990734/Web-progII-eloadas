<?php

namespace App\Models\MessageDto;

interface MessageDto
{
    public static function fromArray(array $message);
}
