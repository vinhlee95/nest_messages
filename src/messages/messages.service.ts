import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageService {
  getMessages(): string[] {
    return ['message 1', 'message 2']
  }
}
