import { Address } from './Address';
export default interface IEmployee {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
}