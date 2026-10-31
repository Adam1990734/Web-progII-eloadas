<?php

namespace App\Models\MessageDto;

class MessageRequestDto implements MessageDto
{
    public function __construct(
        public string $content,
        public int|null $user_id
    ){}

    public static function fromArray(array $message)
    {
        return new self(
            htmlspecialchars(
                trim(strip_tags($message["content"]))
            ),
            $message["user_id"] ?? null
        );
    }
}
