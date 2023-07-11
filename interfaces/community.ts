export interface Community{
    name: string;
    image: string;
    description: string;
    posts: Post[]
}

export interface Post{
    fullname: string;
    username: string;
    body: string;
    datepublished: string;
}