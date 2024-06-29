import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import UploadWidget from "../components/uploadWidget/UploadWidget";
import { useNavigate } from "react-router-dom";

function NewPostPage() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

    try {
      const res = await apiRequest.post("/posts", {
        postData: {
          title: inputs.title,
          price: parseInt(inputs.price),
          address: inputs.address,
          city: inputs.city,
          bedroom: parseInt(inputs.bedroom),
          bathroom: parseInt(inputs.bathroom),
          type: inputs.type,
          property: inputs.property,
          latitude: inputs.latitude,
          longitude: inputs.longitude,
          images: images,
        },
        postDetail: {
          desc: value,
          utilities: inputs.utilities,
          pet: inputs.pet,
          income: inputs.income,
          size: parseInt(inputs.size),
          school: parseInt(inputs.school),
          bus: parseInt(inputs.bus),
          restaurant: parseInt(inputs.restaurant),
        },
      });
      navigate("/" + res.data.id);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  return (
    <div className="h-full flex flex-col md:flex-row justify-between">
      <div className="md:w-[60%] w-full">
        <div className="mx-8 mt-8 mb-24">
          <h1 className="text-2xl font-bold mb-6">Add New Post</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap text-sm justify-between gap-4 md:gap-6"
          >
            <div className="w-full md:w-1/4 flex flex-col gap-2">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                className="p-4 rounded border border-gray-300"
              />
            </div>
            <div className="w-full md:w-1/4 flex flex-col gap-2">
              <label htmlFor="price">Price</label>
              <input
                id="price"
                name="price"
                type="number"
                className="p-4 rounded border border-gray-300"
              />
            </div>
            <div className="w-full md:w-1/4 flex flex-col gap-2">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                name="address"
                type="text"
                className="p-4 rounded border border-gray-300"
              />
            </div>
            <div className="w-full flex flex-col gap-2 h-80 mb-16">
              <label htmlFor="desc">Description</label>
              <ReactQuill
                theme="snow"
                onChange={setValue}
                value={value}
                className="h-full"
              />
            </div>
            <div className="w-full md:w-1/4 flex flex-col gap-2">
              <label htmlFor="city">City</label>
              <input
                id="city"
                name="city"
                type="text"
                className="p-4 rounded border border-gray-300"
              />
            </div>
            <div className="w-full md:w-1/4 flex flex-col gap-2">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input
                min={1}
                id="bedroom"
                name="bedroom"
                type="number"
                className="p-4 rounded border border-gray-300"
              />
            </div>
            <div className="w-full md:w-1/4 flex flex-col gap-2">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input
                min={1}
                id="bathroom"
                name="bathroom"
                type="number"
                className="p-4 rounded border border-gray-300"
              />
            </div>
            <div className="w-full md:w-1/4 flex flex-col gap-2">
              <label htmlFor="latitude">Latitude</label>
              <input
                id="latitude"
                name="latitude"
                type="text"
                className="p-4 rounded border border-gray-300"
              />
            </div>
            <div className="w-full md:w-1/4 flex flex-col gap-2">
              <label htmlFor="longitude">Longitude</label>
              <input
                id="longitude"
                name="longitude"
                type="text"
                className="p-4 rounded border border-gray-300"
              />
            </div>
            <div className="w-full md:w-1/4 flex flex-col gap-2">
              <label htmlFor="type">Category</label>
              <select
                name="type"
                className="p-4 rounded border border-gray-300"
              >
                <option value="rent" defaultChecked>
                  Rent
                </option>
                <option value="buy">Sale</option>
              </select>
            </div>
            <div className="w-full md:w-1/4 flex flex-col gap-2">
              <label htmlFor="property">Property Type</label>
              <select
                name="property"
                className="p-4 rounded border border-gray-300"
              >
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div className="w-full md:w-1/4 flex flex-col gap-2">
              <label htmlFor="utilities">Utilities Policy</label>
              <select
                name="utilities"
                className="p-4 rounded border border-gray-300"
              >
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="w-full md:w-1/4 flex flex-col gap-2">
              <label htmlFor="pet">Pet Policy</label>
              <select name="pet" className="p-4 rounded border border-gray-300">
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className="w-full md:w-1/4 flex flex-col gap-2">
              <label htmlFor="income">Income Policy</label>
              <input
                id="income"
                name="income"
                type="text"
                placeholder="Income Policy"
                className="p-4 rounded border border-gray-300"
              />
            </div>
            <div className="w-full md:w-1/4 flex flex-col gap-2">
              <label htmlFor="size">Total Size (sqft)</label>
              <input
                min={0}
                id="size"
                name="size"
                type="number"
                className="p-4 rounded border border-gray-300"
              />
            </div>
            <div className="w-full md:w-1/4 flex flex-col gap-2">
              <label htmlFor="school">School</label>
              <input
                min={0}
                id="school"
                name="school"
                type="number"
                className="p-4 rounded border border-gray-300"
              />
            </div>
            <div className="w-full md:w-1/4 flex flex-col gap-2">
              <label htmlFor="bus">Bus</label>
              <input
                min={0}
                id="bus"
                name="bus"
                type="number"
                className="p-4 rounded border border-gray-300"
              />
            </div>
            <div className="w-full md:w-1/4 flex flex-col gap-2">
              <label htmlFor="restaurant">Restaurant</label>
              <input
                min={0}
                id="restaurant"
                name="restaurant"
                type="number"
                className="p-4 rounded border border-gray-300"
              />
            </div>
            <div className="w-full md:w-1/4 py-4">
              <button className="w-full py-6 rounded-md bg-purple-600 hover:bg-purple-700 text-white   cursor-pointer">
                Post property
              </button>
              {error && <span className="text-red-500">Error</span>}
            </div>
          </form>
        </div>
      </div>
      <div className="flex-2 bg-gray-50 md:w-[40%] w-full flex flex-col gap-5 items-center justify-center p-4 md:p-0">
        {images.map((image, index) => (
          <img
            src={image}
            key={index}
            alt=""
            className="w-full md:w-1/2 h-44 object-cover rounded"
          />
        ))}
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "lamadev",
            uploadPreset: "estate",
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
}

export default NewPostPage;
