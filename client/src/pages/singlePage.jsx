import Slider from "../components/Slider";
// import Map from "../../components/map/Map";
import { useNavigate, useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { post } from "../postData";
import Image from "../assets/images/LandingPage/landing_7.jpg";
import Ping from "../assets/post-icons/pin.png";
import Utility from "../assets/post-icons/utility.png";
import Fee from "../assets/post-icons/fee.png";
import Pet from "../assets/post-icons/pet.png";
import Size from "../assets/post-icons/size.png";
import Bed from "../assets/post-icons/bed.png";
import Bath from "../assets/post-icons/bath.png";
import School from "../assets/post-icons/school.png";
import Chat from "../assets/post-icons/chat.png";
import Save from "../assets/post-icons/save.png";
import Bus from "../assets/post-icons/bus.png";
import Restaurant from "../assets/post-icons/restaurant.png";
import GoogleMapComponent from "../components/GoogleMap";

function SinglePage() {
  // const post = useLoaderData();
  const [saved, setSaved] = useState(post.isSaved);
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
    }
    setSaved((prev) => !prev);
    try {
      await axios.post("/users/save", { postId: post.id });
    } catch (err) {
      console.log(err);
      setSaved((prev) => !prev);
    }
  };

  return (
    <div className="flex h-full flex-col justify-between gap-10 lg:flex-row p-0 md:p-10">
      <div className="flex-3 h-full  md:mb-12 md:h-auto w-full p-5 lg:w-[60%]">
        <div className=" flex flex-col gap-3 justify-between items-center ">
          <Slider images={post.images} />
          <div>
            <div className="flex flex-col justify-between sm:flex-row sm:gap-5">
              <div className="flex flex-col gap-5">
                <h1 className="font-normal">{post.title}</h1>
                <div className="flex items-center gap-1 text-gray-600 text-sm">
                  <img src={Ping} alt="" className="w-4 h-4" />
                  <span>{post.address}</span>
                </div>
                <div className="p-1.5 bg-yellow-200 rounded text-lg font-light w-max">
                  $ {post.price}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-5 py-5 px-12 bg-yellow-100 rounded text-base font-semibold sm:py-5">
                <img
                  src={Image}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div
              className="mt-12 text-gray-700 leading-5"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.postDetail.desc),
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex-2 bg-pink-100 h-full md:mb-12 md:h-auto w-full lg:w-[40%]">
        <div className="px-5 py-5 flex flex-col gap-5 md:px-5">
          <p className="font-bold text-lg mb-2">General</p>
          <div className="flex flex-col gap-5 p-5 bg-white rounded">
            <div className="flex items-center gap-2">
              <img src={Utility} alt="" className="w-6 h-6 bg-yellow-100" />
              <div>
                <span className="font-bold">Utilities</span>
                {post.postDetail.utilities === "owner" ? (
                  <p className="text-sm">Owner is responsible</p>
                ) : (
                  <p className="text-sm">Tenant is responsible</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src={Pet} alt="" className="w-6 h-6 bg-yellow-100" />
              <div>
                <span className="font-bold">Pet Policy</span>
                {post.postDetail.pet === "allowed" ? (
                  <p className="text-sm">Pets Allowed</p>
                ) : (
                  <p className="text-sm">Pets not Allowed</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src={Fee} alt="" className="w-6 h-6 bg-yellow-100" />
              <div>
                <span className="font-bold">Income Policy</span>
                <p className="text-sm">{post.postDetail.income}</p>
              </div>
            </div>
          </div>
          <p className="font-bold text-lg mb-2">Sizes</p>
          <div className="flex justify-between text-sm">
            <div className="flex items-center gap-2 p-2 bg-white rounded">
              <img src={Size} alt="" className="w-6 h-6" />
              <span>{post.postDetail.size} sqft</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-white rounded">
              <img src={Bed} alt="" className="w-6 h-6" />
              <span>{post.bedroom} beds</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-white rounded">
              <img src={Bath} alt="" className="w-6 h-6" />
              <span>{post.bathroom} bathroom</span>
            </div>
          </div>
          <p className="font-bold text-lg mb-2">Nearby Places</p>
          <div className="flex gap-6 justify-between text-sm p-5 bg-white rounded">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <img src={School} alt="" className="w-6 h-6" />
              <div>
                <span className="font-bold">School</span>
                <p>
                  {post.postDetail.school > 999
                    ? post.postDetail.school / 1000 + "km"
                    : post.postDetail.school + "m"}{" "}
                  away
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2">
              <img src={Bus} alt="" className="w-6 h-6" />
              <div>
                <span className="font-bold">Bus Stop</span>
                <p>{post.postDetail.bus}m away</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2">
              <img src={Restaurant} alt="" className="w-6 h-6" />
              <div>
                <span className="font-bold">Restaurant</span>
                <p>{post.postDetail.restaurant}m away</p>
              </div>
            </div>
          </div>
          <p className="font-bold text-lg mb-2">Location</p>
          <div className="w-full h-48">
            {<Map items={[post]} />}
            <GoogleMapComponent />
          </div>
          <div className="flex justify-between">
            <button className="px-5 py-5 flex items-center gap-2 bg-white border border-yellow-200 rounded cursor-pointer">
              <img src={Chat} alt="" className="w-4 h-4" />
              Send a Message
            </button>
            <button
              onClick={handleSave}
              className={`px-5 py-5 flex items-center gap-2 bg-white border border-yellow-200 rounded cursor-pointer ${
                saved ? "bg-yellow-400" : ""
              }`}
            >
              <img src={Save} alt="save img" className="w-4 h-4" />
              {saved ? "Place Saved" : "Save the Place"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
