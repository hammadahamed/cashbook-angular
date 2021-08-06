import { Log } from "./log";

export class TransactionLog {
    name: string = "";
    amount: number = 0;
    type: boolean = false;
    logs: Log[] = []
}
