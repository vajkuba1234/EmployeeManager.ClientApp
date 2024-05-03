import { Gender } from '../enums/gender';

export interface IEmployee {
  id: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  gender: Gender;
  birthDay: Date;

  street: string;
  city: string;
  zipCode: string;

  email: string;
  phone: string;

  joinedDate: Date;
  exitedDate?: Date;

  superiorId?: number;
  countryId: number;
}

export interface EmployeeList {
  items: Employee[];
}

export class Employee implements IEmployee {
  id!: number;
  firstName!: string;
  middleName?: string | undefined;
  lastName!: string;
  gender!: Gender;
  birthDay!: Date;
  street!: string;
  city!: string;
  zipCode!: string;
  email!: string;
  phone!: string;
  joinedDate!: Date;
  exitedDate?: Date | undefined;
  superiorId?: number | undefined;
  countryId!: number;
}
