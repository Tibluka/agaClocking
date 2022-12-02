import { Shift } from "./shifts";

export class Users {
    users: Array<User> = [];
}

export class User {
    _id: ObjectId = new ObjectId();
    name: string;
    bank: number;
    bankAccount: string;
    bankAccountDigit: string;
    bankAngency: string;
    bankName: string;
    cnpjCnpj: string;
    email: string;
    password: string;
    userId: number;
    userType: string;
    shifts: Array<Shift> = [];
    totalTime: string;
}

export class ObjectId {
    $oid: string = '';
}