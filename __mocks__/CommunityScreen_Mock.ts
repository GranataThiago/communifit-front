import { ICommunity } from "../interfaces";

const CommunityScreen_Mock: ICommunity = {
  name: "Test Community",
  displayname: "Test Community",
  image: "https://example.com/community-image.jpg",
  description: "This is a test community description.",
  posts: [
    {
      fullname: "John Doe",
      username: "johndoe123",
      body: "This is a test post.",
      datepublished: "2023-10-15",
    },
    {
      fullname: "Alice Smith",
      username: "alicesmith456",
      body: "Another test post.",
      datepublished: "2023-10-16",
    },
  ],
};

export default CommunityScreen_Mock;
