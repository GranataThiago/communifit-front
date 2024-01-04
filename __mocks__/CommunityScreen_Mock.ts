import { ICommunity } from "../interfaces";

const CommunityScreen_Mock: ICommunity = {
  name: "Test Community",
  displayname: "Test Community",
  image: "https://example.com/community-image.jpg",
  description: "This is a test community description.",
  posts: [
    {
      fullName: "John Doe",
      username: "johndoe123",
      body: "This is a test post.",
      datepublished: "2023-10-15",
    },
    {
      fullName: "Alice Smith",
      username: "alicesmith456",
      body: "Another test post.",
      datepublished: "2023-10-16",
    },
  ],
};

export default CommunityScreen_Mock;
