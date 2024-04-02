import { Address } from "../interfaces/Address";
import IEmployee from "../interfaces/IEmployee";


export default class Employee implements IEmployee {
    id: number;
    name: string;
    private _username: string;
    email: string;
    address: Address;
    constructor(emp: IEmployee){
        this.id = emp.id;
        this.name = emp.name;
        this._username = emp.username;
        this.email = emp.email;
        this.address = emp.address;
    }
    get username(): string {
        return this._username;
    } 
};