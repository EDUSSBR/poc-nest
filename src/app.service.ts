import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from './entities/User';
import { CreateUserDTO } from './dtos/create.user.dto';
import { Tweet } from './entities/Tweet';
import { CreateTweetDTO } from './dtos/create.tweet.dto';

const users: User[] = [];
const tweets: Tweet[] = [];

@Injectable()
export class AppService {
  createUser(createUserDTO: CreateUserDTO) {
    const { username, avatar } = createUserDTO;
    const user = new User(username, avatar);
    users.push(user);
  }
  createTweets(createTweetDTO: CreateTweetDTO) {
    const { username, tweet } = createTweetDTO;
    const foundUser = users.find((user) => user.is(username));
    if (!foundUser) {
      throw new UnauthorizedException();
    }
    const newTweet = new Tweet(foundUser, tweet);
    tweets.push(newTweet);
  }
}
