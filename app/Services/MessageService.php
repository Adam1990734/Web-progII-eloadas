<?php

namespace App\Services;
use App\Models\Message;
use App\Models\MessageDto\MessageRequestDto;
use App\Models\MessageDto\MessageResponseDto;
interface MessageService
{
    public function findAllDesc(int $len, int $page) : array;
    public function create(MessageRequestDto $dto) : MessageResponseDto;
}
