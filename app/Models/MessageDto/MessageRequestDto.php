<?php

namespace App\Models\MessageDto;

class MessageRequestDto implements MessageDto
{
    public function __construct(
        public readonly string $content,
        public readonly int $userId
    ){}

    public static function fromArray(array $message)
    {
        return new self(
            $message["content"],
            (int) $message["userId"]
        );
    }
}
