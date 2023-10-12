export interface Community{
    name: string;
    displayname: string;
    image: string;
    description: string;
    posts: Post[] | []
}

export interface Post{
    fullName: string;
    username: string;
    body: string;
    datepublished: string;
}