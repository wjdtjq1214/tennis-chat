import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import {
  MongoTypeOrmConfigService,
  PostgresTypeOrmConfigService,
} from './config/typeorm.config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env/.env.' + process.env.NODE_ENV,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresTypeOrmConfigService,
    }),
    TypeOrmModule.forRootAsync({
      useClass: MongoTypeOrmConfigService,
      name: 'mongo',
    }),
    ChatModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
