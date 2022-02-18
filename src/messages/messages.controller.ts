import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessageService } from './messages.service';

type CreateMessageBody = {
  body: string
}

@Controller('messages')
export class MessagesController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  getMessages(): string[] {
    return this.messageService.getMessages()
  }

  @Post()
  createMessage(@Body() body: CreateMessageBody) {
    return body
  }

  @Get('/:id')
  getMessageById(@Param('id') id: string) {
    return {
      id,
      body: 'a test message'
    }
  }
}
