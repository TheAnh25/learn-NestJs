import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NoteDTO } from './dto';

@Injectable({})
export class NoteService {
  constructor(private prismaService: PrismaService) {}

  show() {
    return {
      message: 'show note',
    };
  }
}
