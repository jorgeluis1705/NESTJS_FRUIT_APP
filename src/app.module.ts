import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CitiesModule } from './cities/cities.module';
import { FruitsModule } from './fruits/fruits.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://node_user:pBYi9t$bOcal2^C@cluster0.ayyll.mongodb.net/redes',
    ),
    UserModule,
    CitiesModule,
    FruitsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
