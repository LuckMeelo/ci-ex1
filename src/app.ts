type Role =  "admin" | "user" | "guest";

interface Product {
    readonly id: number;
    name: string;
    price?: number;
}

interface User {
    firstName: string;
    lastName: string;
    age: number;
    role: Role;
    isActive: boolean;
    createdAt?: Date;
    products: Product[];
}

let user: User = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    role: "user",
    isActive: true,
    createdAt: new Date(),
    products: [
        {
            id: 1,
            name: "Product 1",
            price: 20,
        },
        {
            id: 2,
            name: "Product 2",
        }
    ]
}

const fullName = (user: User): string => {
    return `${user.firstName} ${user.lastName}`;
}
