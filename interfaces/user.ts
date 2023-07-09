export interface User{
    fullName: string;
    email: string;
    image: string;
}

export interface RegisterUser{
    birthdate: Date;
    username: string;
    gender: string;
    password: string;
    type: string;
    fullName: string;
    email: string;
    objective?: string,
}