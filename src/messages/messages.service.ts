import { Injectable } from '@nestjs/common';
import { MessageRepo } from './messages.repository';
import { Message } from "./messages.type";
import { CreateMessageBody } from './messages.validators';

@Injectable()
export class MessageService {
  constructor(private readonly messageRepo: MessageRepo) {}

  getAll(): Promise<Message[]> {
    return this.messageRepo.getAll()
  }

  createOne(req: CreateMessageBody): Promise<Message> {
    return this.messageRepo.createOne(req.body)
  }

  getById(id: string): Promise<Message> {
    return this.messageRepo.getById(id)
  }
}
