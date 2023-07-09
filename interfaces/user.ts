export interface User{
    fullName: string;
    email: string;
    image?: string;
}

export interface RegisterUser extends User{
    birthdate: Date;
    username: string;
    gender: string;
    password: string;
    type: string;
}