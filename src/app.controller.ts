import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDTO } from './dtos/create.user.dto';
import { CreateTweetDTO } from './dtos/create.tweet.dto';

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
  @Get('/')
  getHealth(): string {
    return "I'm okay!";
  }
}
