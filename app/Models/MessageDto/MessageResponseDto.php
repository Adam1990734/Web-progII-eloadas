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

    public static function fromArray(array $message): MessageResponseDto
    {
        return new self(
            (int) $message["id"],
            $message["content"],
            $message["createdAt"],
            (int) $message["userId"],
            $message["userName"]
        );
    }
}
