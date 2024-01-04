export interface ICommunity {
  name: string;
  displayname: string;
  image: string;
  description: string;
  posts: Post[] | [];
}

export type CommunityEssential = Omit<ICommunity, 'posts' | 'image'>

export interface Post {
  fullName: string;
  username: string;
  body: string;
  datepublished: string;
}
