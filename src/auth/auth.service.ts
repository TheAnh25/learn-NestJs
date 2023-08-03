import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import * as argon from 'argon2';
import { AuthDTO } from './dto';

@Injectable({})
export class AuthService {
  constructor(private prismaService: PrismaService) {}
  async register(authDTO: AuthDTO) {
    //hash password
    const hashedPassword = await argon.hash(authDTO.password);
    //insert data to database
    const user = await this.prismaService.user.create({
      data: {
        email: authDTO.email,
        hashedPassword: hashedPassword,
        firstName: authDTO.firstname,
        lastName: authDTO.lastname,
      },
    });
    return user;
  }
  login() {
    return {
      message: 'login',
    };
  }
}
//export make public
