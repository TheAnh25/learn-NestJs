import { IsNotEmpty, IsString } from 'class-validator';

// defint a "type" of "authentcation request"

export class NoteDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  url: string;
}
