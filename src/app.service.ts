import { Injectable } from '@nestjs/common';
import { User } from './entities/User';
import { CreateUserDTO } from './dtos/create.user.dto';

const users: User[] = [];

@Injectable()
export class AppService {
  createUser(createUserDTO: CreateUserDTO) {
    const { username, avatar } = createUserDTO;
    const user = new User(username, avatar);
    users.push(user);
  }
}
