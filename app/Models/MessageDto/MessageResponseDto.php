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
        public readonly int|null $user_id,
        public readonly string|null $userName
    ){}

    public static function fromArray(array $message): MessageResponseDto
    {
        return new self(
            (int) $message["id"],
            $message["content"],
            $message["createdAt"],
            $message["user_id"] ?? null,
            $message["userName"] ?? null
        );
    }
}
