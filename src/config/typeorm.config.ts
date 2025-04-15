import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class PostgresTypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.DB_HOST_POSTGRES,
      port: Number(process.env.DB_PORT_POSTGRES),
      username: process.env.DB_USER_POSTGRES,
      password: process.env.DB_PASS_POSTGRES,
      database: process.env.DB_DATABASE_POSTGRES,
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: Boolean(process.env.DB_SYNCHRONIZE_POSTGRES),
    };
  }
}

@Injectable()
export class MongoTypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mongodb',
      host: process.env.DB_HOST_MONGO,
      port: Number(process.env.DB_PORT_MONGO),
      username: process.env.DB_USER_MONGO,
      password: process.env.DB_PASS_MONGO,
      database: process.env.DB_DATABASE_MONGO,
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      synchronize: Boolean(process.env.DB_SYNCHRONIZE_MONGO),
    };
  }
}
