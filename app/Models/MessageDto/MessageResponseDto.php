<?php

namespace App\Models\MessageDto;

use App\Models\MessageDto\MessageDto;
use DateTime;

class MessageResponseDto implements MessageDto
{
    public function __construct(
        public readonly int $id,
        public readonly string $content,
        public readonly DateTime $createdAt,
        public readonly int $userId,
        public readonly string $userName
    ){}

    public static function fromArray()
    {
        // TODO: Implement fromArray() method.
    }
}
