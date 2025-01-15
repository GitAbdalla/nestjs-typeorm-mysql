import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  @HttpCode(HttpStatus.OK)
  async findUsers() {
    const allUsers = await this.userService.findUsers();
    return allUsers;
  }

  @Post('/create')
  @HttpCode(HttpStatus.CREATED)
  craeteUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
 async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
   await this.userService.updateUser(id , updateUserDto);
  }

  @Delete(':id') 
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteUserById(@Param('id', ParseIntPipe) id :number){
    this.userService.deleteUser(id);
  }

}
