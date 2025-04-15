// import {
//   // ConflictException,
//   Injectable,
//   InternalServerErrorException,
// } from '@nestjs/common';
// import { DataSource, Repository } from 'typeorm';

// import { User } from 'src/user/user.entity';

// @Injectable()
// export class UserRepository extends Repository<User> {
//   constructor(private dataSource: DataSource) {
//     super(User, dataSource.createEntityManager());
//   }

//   async findChatRoomByUserUuid(userUuid: string): Promise<User> {
//     try {
//       const user = await this.findOne({
//         where: { userUuid },
//       });

//       if (!user)
//         throw new InternalServerErrorException(`${uuid} User is not found`);

//       return user;
//     } catch (e: unknown) {
//       if (e instanceof Error) {
//         throw new InternalServerErrorException(e.message);
//       } else {
//         throw new InternalServerErrorException('Internal Server Error');
//       }
//     }
//   }
// }
