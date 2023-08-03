import { Controller, Post, Body } from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteDTO } from './dto';

@Controller('note')
export class NoteController {
  constructor(private noteService: NoteService) {}
}
