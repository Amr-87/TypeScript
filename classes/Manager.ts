import { Address } from '../interfaces/Address';
import IEmployee from './../interfaces/IEmployee';
import Employee from './Employee';

export default class Manager extends Employee{
    constructor(manager: IEmployee){
        super(manager);
    }
    GetAddress(): Address{
        return this.address;
    }
}