export class CreateTransactionDto {
  amount: number;
  description: string;
  date: Date;
  category: string;
  type: string;
  user: string;
}