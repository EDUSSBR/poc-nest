import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDTO } from './dtos/create.user.dto';
import { CreateTweetDTO } from './dtos/create.tweet.dto';
import { Tweet } from './entities/Tweet';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/sign-up')
  @HttpCode(200)
  createUser(@Body() body: CreateUserDTO) {
    this.appService.createUser(body);
  }
  @Post('/tweets')
  createTweet(@Body() body: CreateTweetDTO) {
    this.appService.createTweets(body);
  }
  @Get('/tweets')
  getTweets(
    @Query('page') page: string,
  ): Omit<Tweet, 'user'> | { username: string }[] {
    return this.appService.getTweets(page);
  }
  @Get('/tweets/:username')
  getTweetsByUsername(
    @Query('page') page: string,
    @Param('username') username,
  ): Omit<Tweet, 'user'> | { username: string }[] {
    return this.appService.getTweetsByUserName(username, page);
  }
  @Get('/')
  getHealth(): string {
    return "I'm okay!";
  }
}
