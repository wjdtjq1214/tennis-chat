import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';

import { SendMessageReqDto } from './dto/chat.send-message-req.dto';
import { CreateChatRoomReqDto } from './dto/chat.create-chat-room-req.dto';

@Controller('chat')
export class ChatController {
  @Post('/:chatRoomId/message')
  sendChatMessage(
    @Param('chatRoomId') chatRoomId: string,
    @Body() sendMessageReqDto: SendMessageReqDto,
  ) {}

  @Post('/:chatRoomId/user')
  enterChatRoom(@Param('chatRoomId') chatRoomId: string, @Req() req) {}

  @Get('/:chatRoomId')
  getChatMessage(@Param('chatRoomId') chatRoomId: string) {}

  @Post()
  createChatRoom(@Body() createChatRoomReqDto: CreateChatRoomReqDto) {}

  @Get()
  getChatRoom() {}
}
