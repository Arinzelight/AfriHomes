// postData.js
import Image from "./assets/images/LandingPage/landing_7.jpg";
export const post = {
  id: 1,
  isSaved: false,
  images: [Image, Image, Image, Image],
  title: "Beautiful Apartment in the City Center",
  address: "123 Main St, Cityville",
  price: 1200,
  user: {
    avatar: "/avatar.jpg",
    username: "JohnDoe",
  },
  postDetail: {
    desc: "<p>This is a lovely apartment in the heart of the city with all modern amenities and close to public transport more space for outdoor activities. This is a lovely apartment in the heart of the city with all modern amenities and close to public transport more space for outdoor activities.</p>",
    utilities: "owner",
    pet: "allowed",
    income: "Minimum income should be 3x the rent",
    size: 1200,
    school: 500,
    bus: 200,
    restaurant: 300,
  },
  bedroom: 2,
  bathroom: 2,
};
