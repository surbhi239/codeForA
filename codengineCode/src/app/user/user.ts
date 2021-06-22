export interface User{
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    city: string;
    country: number;
    email: string;
    password: string;
    department: Department;
    message: string;
}
export interface Department{
    name: string;
    role: string;
}