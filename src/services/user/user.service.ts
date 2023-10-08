import { Injectable } from '@nestjs/common';

import { IUser } from 'src/interfaces/IUser';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    createUser(user: Omit<IUser, 'id'>) {
        return this.prisma.user.create({
            data: user
        });
    }

    getUserByEmail(email: string) {
        return this.prisma.user.findUnique({
            where: {
                email
            }
        });
    }
    
}
