import { User } from './User';

export class Tweet {
  constructor(
    private readonly user: User,
    private readonly tweet: string,
  ) {}
  getUser() {
    return this.user;
  }
  getUserAvatar() {
    return this.user;
  }
  getTweet() {
    return this.tweet;
  }
}
