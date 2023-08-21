import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTweetDTO {
  @IsNotEmpty({ message: 'All fields are required!' })
  @IsString({ message: 'All fields are required!' })
  username: string;
  @IsNotEmpty({ message: 'All fields are required!' })
  @IsString({ message: 'All fields are required!' })
  tweet: string;
}
