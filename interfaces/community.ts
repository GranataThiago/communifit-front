export interface ICommunity {
  _id?: string; //only in some endpoints
  name: string;
  displayname: string;
  image: string;
  description: string;
  posts: IPost[] | [];
}

export type CommunityEssential = Omit<ICommunity, 'posts' | 'image'>

export interface IPost {
  fullname: string;
  username: string;
  body: string;
  datepublished: string;
}

export interface ICommunities {
	owner_username: string;
	owner_fullname: string;
	users_quantity: number;
	name: string;
	displayname: string;
	description: "test community";
	createdat: string;
	average_rating: number;
}
