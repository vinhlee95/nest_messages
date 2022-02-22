import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessageRepo } from './messages.repository';
import { MessageService } from './messages.service';

@Module({
  controllers: [MessagesController],
  providers: [MessageService, MessageRepo],
})
export class MessagesModule {}
