import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { User } from "src/users/entities/user.entity";

export type TransactionDocument = Transaction & Document;

@Schema()
export class Transaction {
  @Prop()
  amount: number;

  @Prop()
  description: string;

  @Prop()
  date: Date;

  @Prop()
  category: string;

  @Prop()
  type: string;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
  user: User;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);