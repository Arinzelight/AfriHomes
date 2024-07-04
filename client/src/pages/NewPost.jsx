import { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function NewPostPage() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const quillRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    imageUrls: [],
    title: "",
    state: "",
    country: "Nigeria",
    location: "Lagos, NGA",
    description: "",
    address: "",
    city: "",
    latitude: "",
    longitude: "",
    category: "rent",
    bedrooms: 0,
    property: "Apartment",
    pet: "",
    size: "",
    bathrooms: 0,
    parking: 0,
    furnished: false,
  });
  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleImageSubmit = (e) => {
    if (files.length > 0 && files.length + formData.imageUrls.length <= 6) {
      setUploading(true);
      setImageUploadError(false);
      const promises = [];

      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }
      Promise.all(promises)
        .then((urls) => {
          setFormData({
            ...formData,
            imageUrls: formData.imageUrls.concat(urls),
          });
          setImageUploadError(false);
          setUploading(false);
        })
        .catch((err) => {
          setImageUploadError("Image upload failed (2 MB max per image)");
          setUploading(false);
        });
    } else {
      setImageUploadError("You can only upload up to 6 images per listing");
      setUploading(false);
    }
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.imageUrls.length < 1)
        return setError("You must upload at least one image");
      setLoading(true);
      setError(false);
      const res = await fetch("/api/listing/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          userRef: currentUser._id,
        }),
      });
      const data = await res.json();
      setLoading(false);
      if (res.ok) {
        // Handle success, maybe redirect or show success message
        navigate(`/single-page/${data._id}`);
        toast.success("listing sunmitted successfully");
      } else {
        // Handle validation errors or other errors
        if (data.statusCode === 500 && data.message) {
          // Extract and format detailed validation errors
          const errorMessages = Object.values(data.message).join(". ");
          setError(`Validation Error: ${errorMessages}`);
        } else {
          setError(data.message || "Unknown error occurred");
        }
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="h-full flex flex-col md:flex-row justify-between mx-10"
      >
        <div className="md:w-[60%] w-full">
          <div className="mx-8 mt-8 mb-24">
            <h1 className="text-2xl font-bold mb-6">Add New List</h1>
            <div className="flex flex-wrap text-sm justify-between gap-4 md:gap-6">
              <div className="w-full md:w-1/4 flex flex-col gap-2">
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  className="p-4 rounded border border-gray-300"
                  onChange={handleChange}
                  value={formData.title}
                  required
                />
              </div>
              <div className="w-full md:w-1/4 flex flex-col gap-2">
                <label htmlFor="price">Price</label>
                <input
                  min={50}
                  id="price"
                  name="price"
                  type="number"
                  className="p-4 rounded border border-gray-300"
                  onChange={handleChange}
                  value={formData.price}
                  required
                />
              </div>
              <div className="w-full md:w-1/4 flex flex-col gap-2">
                <label htmlFor="address">Address</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  className="p-4 rounded border border-gray-300"
                  onChange={handleChange}
                  value={formData.address}
                  required
                />
              </div>
              <div className="w-full flex flex-col gap-2 h-80 mb-16">
                <label htmlFor="description">Description</label>
                <ReactQuill
                  theme="snow"
                  onChange={(value) =>
                    setFormData({ ...formData, description: value })
                  }
                  value={formData.description || ""}
                  className="h-full"
                  ref={quillRef}
                  required
                />
              </div>
              <div className="w-full md:w-1/4 flex flex-col gap-2">
                <label htmlFor="location">Location</label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  className="p-4 rounded border border-gray-300"
                  onChange={handleChange}
                  value={formData.location}
                  required
                />
              </div>
              <div className="w-full md:w-1/4 flex flex-col gap-2">
                <label htmlFor="city">City</label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  className="p-4 rounded border border-gray-300"
                  onChange={handleChange}
                  value={formData.city}
                  required
                />
              </div>
              <div className="w-full md:w-1/4 flex flex-col gap-2">
                <label htmlFor="state">State</label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  className="p-4 rounded border border-gray-300"
                  onChange={handleChange}
                  value={formData.state}
                  required
                />
              </div>
              <div className="w-full md:w-1/4 flex flex-col gap-2">
                <label htmlFor="country">Country</label>
                <select
                  id="country"
                  name="country"
                  className="p-4 rounded border border-gray-300"
                  onChange={handleChange}
                  value={formData.country}
                  required
                >
                  <option value="rent">Nigeria</option>
                  <option value="sell">Ghana</option>
                </select>
              </div>
              <div className="w-full md:w-1/4 flex flex-col gap-2">
                <label htmlFor="bedrooms">Bedroom Number</label>
                <input
                  min={0}
                  id="bedrooms"
                  name="bedrooms"
                  type="number"
                  className="p-4 rounded border border-gray-300"
                  onChange={handleChange}
                  value={formData.bedrooms}
                />
              </div>
              <div className="w-full md:w-1/4 flex flex-col gap-2">
                <label htmlFor="bathrooms">Bathroom Number</label>
                <input
                  min={0}
                  id="bathrooms"
                  name="bathrooms"
                  type="number"
                  className="p-4 rounded border border-gray-300"
                  onChange={handleChange}
                  value={formData.bathrooms}
                />
              </div>
              <div className="w-full md:w-1/4 flex flex-col gap-2">
                <label htmlFor="parking">Parking space</label>
                <input
                  min={0}
                  id="parking"
                  name="parking"
                  type="number"
                  className="p-4 rounded border border-gray-300"
                  onChange={handleChange}
                  value={formData.parking}
                  required
                />
              </div>
              <div className="w-full md:w-1/4 flex flex-col gap-2">
                <label htmlFor="furnished">Furnished</label>
                <select
                  id="furnished"
                  name="furnished"
                  className="p-4 rounded border border-gray-300"
                  onChange={handleChange}
                  value={formData.furnished}
                  required
                >
                  <option value={false}>False</option>
                  <option value={true}>True</option>
                </select>
              </div>
              <div className="w-full md:w-1/4 flex flex-col gap-2">
                <label htmlFor="latitude">Latitude</label>
                <input
                  id="latitude"
                  name="latitude"
                  type="number"
                  className="p-4 rounded border border-gray-300"
                  onChange={handleChange}
                  value={formData.latitude}
                  required
                />
              </div>
              <div className="w-full md:w-1/4 flex flex-col gap-2">
                <label htmlFor="longitude">Longitude</label>
                <input
                  id="longitude"
                  name="longitude"
                  type="number"
                  className="p-4 rounded border border-gray-300"
                  onChange={handleChange}
                  value={formData.longitude}
                  required
                />
              </div>
              <div className="w-full md:w-1/4 flex flex-col gap-2">
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  name="category"
                  className="p-4 rounded border border-gray-300"
                  onChange={handleChange}
                  value={formData.category}
                  required
                >
                  <option value="rent">Rent</option>
                  <option value="sale">Sale</option>
                </select>
              </div>
              <div className="w-full md:w-1/4 flex flex-col gap-2">
                <label htmlFor="property">Property Type</label>
                <select
                  id="property"
                  name="property"
                  className="p-4 rounded border border-gray-300"
                  onChange={handleChange}
                  value={formData.property}
                  required
                >
                  <option value="villa">Apartment</option>
                  <option value="apartment">Land</option>
                </select>
              </div>
              <div className="w-full md:w-1/4 flex flex-col gap-2">
                <label htmlFor="pet">Pet Friendly</label>
                <select
                  id="pet"
                  name="pet"
                  className="p-4 rounded border border-gray-300"
                  onChange={handleChange}
                  value={formData.pet}
                  required
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
              <div className="w-full md:w-1/4 flex flex-col gap-2">
                <label htmlFor="size">Land Size</label>
                <input
                  id="size"
                  name="size"
                  type="text"
                  className="p-4 rounded border border-gray-300"
                  onChange={handleChange}
                  value={formData.size}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[30%] w-full">
          <div className="flex flex-col gap-4 justify-between mx-8 mt-8 mb-24">
            <div className="flex flex-col gap-2">
              <label htmlFor="images">Images</label>
              <input
                multiple
                id="images"
                name="images"
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                className="p-2 rounded border border-gray-300"
                onChange={(e) => setFiles(e.target.files)}
              />
              {imageUploadError && (
                <p className="text-red-500">{imageUploadError}</p>
              )}
              <button
                type="button"
                onClick={handleImageSubmit}
                className="p-4 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 ease-in-out mt-4"
                disabled={uploading}
              >
                {uploading ? "Uploading images..." : "Upload Images"}
              </button>
              <div className="flex gap-2 flex-wrap w-full mt-4">
                {formData.imageUrls.length > 0 &&
                  formData.imageUrls.map((url, i) => (
                    <div className="w-[150px] h-[150px] relative" key={i}>
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(i)}
                        className="absolute top-0 right-0 bg-white z-20"
                      >
                        <img
                          src="https://img.icons8.com/ios-filled/50/000000/delete-sign--v1.png"
                          width={20}
                          height={20}
                          alt="remove"
                        />
                      </button>
                      <img
                        src={url}
                        className="w-full h-full rounded"
                        alt="Uploaded"
                      />
                    </div>
                  ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white p-4"
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit Listing"}
            </button>
            {error && (
              <div className="bg-red-100 text-red-600 p-4 border border-red-600 my-4">
                <p>{error}</p>
              </div>
            )}
          </div>
        </div>
      </form>
    </>
  );
}
