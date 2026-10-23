<?php

namespace App\Services\Implementations;

use App\Models\Message;
use App\Models\MessageDto\MessageRequestDto;
use App\Models\MessageDto\MessageResponseDto;
use App\Services\MessageService;

class MessageServiceImp implements MessageService
{
    public function findAll($len, $page): array
    {
        $result = Message::with("user")->paginate(perPage: $len, page: $page);
        $result->setCollection(
            $result->getCollection()->map(
                fn (Message $message) => MessageServiceImp::toRespDto($message)
            )
        );
        return $result->toArray();
    }

    public function create(MessageRequestDto $dto): MessageResponseDto
    {
        $message = Message::create(get_object_vars($dto));
        return MessageServiceImp::toRespDto($message);
    }

    public function toReqDto(Message $message) : MessageRequestDto
    {
        return new MessageRequestDto(
            $message->content,
            $message->user_id
        );
    }
    public function toRespDto(Message $message) : MessageResponseDto
    {
        return new MessageResponseDto(
            $message->id,
            $message->content,
            $message->created_at->toDateTime(),
            $message->user_id,
            $message->user->name ?? null
        );
    }
}
