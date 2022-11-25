import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://milimaverde:AmPlS1618%21@milimaverde.bcnjg6m.mongodb.net/test'),
    UsersModule,
    TransactionsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
