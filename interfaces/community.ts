export interface ICommunity {
  name: string;
  displayname: string;
  image: string;
  description: string;
  posts: IPost[] | [];
}

export type CommunityEssential = Omit<ICommunity, 'posts' | 'image'>

export interface IPost {
  fullName: string;
  username: string;
  body: string;
  datepublished: string;
}
