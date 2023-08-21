import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
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
  getTweets(page: string) {
    const noPageSent = page === undefined;
    const pageValue = parseInt(page);
    const invalidPageNumber = !(pageValue >= 1 || noPageSent);
    if (invalidPageNumber) {
      throw new BadRequestException('Informe uma página válida!');
    }
    let initialIndex;
    let finalIndex;

    if (!noPageSent) {
      initialIndex = (pageValue - 1) * 15;
      finalIndex = pageValue * 15;
    }
    const reversedTweets = [...tweets].reverse();
    return noPageSent || pageValue === 1
      ? reversedTweets.slice(0, 15).map((tweet) => ({
          avatar: tweet.getUser().getAvatar(),
          username: tweet.getUser().getUsername(),
          tweet: tweet.getTweet(),
        }))
      : reversedTweets.slice(initialIndex, finalIndex).map((tweet) => ({
          avatar: tweet.getUser().getAvatar(),
          username: tweet.getUser().getUsername(),
          tweet: tweet.getTweet(),
        }));
  }
}
