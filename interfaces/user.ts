export interface User{
    fullname: string;
    username: string;
    email: string;
    image: string;
}

export interface RegisterUser{
    birthdate: Date;
    username: string;
    gender: string;
    password: string;
    type: string;
    fullname: string;
    email: string;
    objective?: string,
}