import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";
import { randomUUID } from "crypto";
import { Message } from "./messages.type";

@Injectable()
export class MessageRepo {
  async getAll(): Promise<Message[]> {
    const contents = await readFile('messages.json', 'utf-8')
    return Object.values(JSON.parse(contents))
  }

  async createOne(body: string): Promise<Message> {
    const contents = await readFile('messages.json', 'utf-8')
    const parsedContents = JSON.parse(contents)

    const newMessage: Message = {
      id: randomUUID(),
      body
    }

    parsedContents[newMessage.id] = newMessage
    await writeFile('messages.json', JSON.stringify(parsedContents))

    return newMessage
  }

  async getById(id: string): Promise<Message> {
    const contents = await readFile('messages.json', 'utf-8')
    const parsedContents = Object.values<Message>(JSON.parse(contents))
    return parsedContents.find(i => i.id === id)
  }
}
