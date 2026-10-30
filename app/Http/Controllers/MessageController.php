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

    public function index(Request $request)
    {
        return response()->json(
            $this->messageService->findAll(
                25,
                $request->query("page", 1)
            )
        );
    }

    public function create(Request $request)
    {
        $messageData = $request->validate([
            'content' => ['required', "max:500"]
        ]);
        $messageData['user_id'] = $request->user() !== null ? $request->user()->id : null;
        $message = MessageRequestDto::fromArray($messageData);
        $this->messageService->create($message);
        return response()->noContent(Response::HTTP_CREATED);
    }
}
