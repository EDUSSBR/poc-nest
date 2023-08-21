import { IsUrl, IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'All fields are required!' })
  @IsString({ message: 'All fields are required!' })
  username: string;
  @IsNotEmpty({ message: 'All fields are required!' })
  @IsUrl({}, { message: 'All fields are required!' })
  avatar: string;
}
