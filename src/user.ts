import { Product } from "./product";

export type Role =  "admin" | "user" | "guest";
 
export interface User {
     firstName: string;
     lastName: string;
     age: number;
     role: Role;
     isActive: boolean;
     createdAt?: Date;
     products: Product[];
 }
 

