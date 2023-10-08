import { Injectable } from '@nestjs/common';

import { IUser } from 'src/interfaces/IUser';

@Injectable()
export class UserService {

    createUser(user: Omit<IUser, 'id'>): IUser {
        return {
            ...user,
            id: '3876139871387'
        };
    }
    
}
