<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\MessageDto\MessageResponseDto;
use App\Models\MessageDto\MessageRequestDto;
use App\Services\MessageService;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
class MessageController extends Controller
{
    public function __construct(
        private readonly MessageService $messageService
    ){}

    public function index()
    {
        return response()->json(
            $this->messageService->findAll(25)
        );
    }

    public function create(Request $request)
    {
        $message = MessageRequestDto::fromArray($request->validate([
            'content' => ['required', "max:500"]
        ]));
        //ide még kell az id a message-be!
        return response()->json(
            $this->messageService->create($message),
            Response::HTTP_CREATED
        );
    }
}
