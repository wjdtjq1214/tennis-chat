import {
  // ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { User } from './user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async findUserByUuid(uuid: string): Promise<User> {
    try {
      const user = await this.findOne({
        where: { uuid },
      });

      if (!user)
        throw new InternalServerErrorException(`${uuid} User is not found`);

      return user;
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new InternalServerErrorException(e.message);
      } else {
        throw new InternalServerErrorException('Internal Server Error');
      }
    }
  }
}
