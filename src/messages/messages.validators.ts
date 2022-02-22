import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMessageBody {
  @IsString()
  @IsNotEmpty()
  body: string
}
