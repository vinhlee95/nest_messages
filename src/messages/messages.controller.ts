import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Message } from "./messages.type";
import { MessageService } from './messages.service';
import { CreateMessageBody } from './messages.validators';

@Controller('messages')
export class MessagesController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  async getMessages(): Promise<Message[]> {
    return this.messageService.getAll()
  }

  @Post()
  createMessage(@Body() body: CreateMessageBody) {
    return this.messageService.createOne(body)
  }

  @Get('/:id')
  getMessageById(@Param('id') id: string) {
    return this.messageService.getById(id)
  }
}
