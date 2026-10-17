<?php

namespace App\Services;
use App\Models\Message;
use App\Models\MessageDto\MessageRequestDto;
use App\Models\MessageDto\MessageResponseDto;
interface MessageService
{
    public function findAll($len) : array;
    public function create(MessageRequestDto $dto) : MessageResponseDto;
}
