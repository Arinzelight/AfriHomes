import React, { useState } from "react";
import Header from "./Header";
import Footer from "../../components/Footer";
import avatarImage from "../../images/Dashboard/avatar-01.jpg";

const UserUpdate = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState({
        name: "Nana Adwoa Boadiwaa",
        email: "nana.b@email.com",
        phone: "+244 544247890",
        gender: "Female"
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    return (
        <div>
            <Header />
            <div>
                <div className="container mx-auto mt-3 px-4 border-b pb-4">
                    {/* Profile Header */}
                    <div className="flex justify-between items-center border-b pb-4">
                        <h1 className="text-2xl font-bold">Profile</h1>
                        <button className="bg-purple-600 text-white py-2 px-4 rounded-lg">Logout</button>
                    </div>

                    {/* Main Content */}
                    <div className="flex md:flex-row flex-col mt-2 space-x-2">
                        {/* Left Container */}
                        <div>
                            <div className="flex flex-col">
                                <div className="h-40 w-40 mb-4 items-center">
                                    <img src={avatarImage} alt="User Avatar" className="rounded-full object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Right Container */}
                        <div className="sm:mt-0 mt-3 sm:px-2 px-1 pb-3 md:w-3/4 w-full">
                            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-xl mb-2" htmlFor="name">Name</label>
                                    {isEditing ? (
                                        <input 
                                            className="w-full p-2 border border-gray-300 rounded" 
                                            type="text" 
                                            id="name" 
                                            name="name" 
                                            value={user.name}
                                            onChange={handleChange}
                                            required 
                                        />
                                    ) : (
                                        <p>{user.name}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-xl mb-2" htmlFor="email">Email</label>
                                    {isEditing ? (
                                        <input 
                                            className="w-full p-2 border border-gray-300 rounded" 
                                            type="email" 
                                            id="email" 
                                            name="email" 
                                            value={user.email}
                                            onChange={handleChange}
                                            required 
                                        />
                                    ) : (
                                        <p>{user.email}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-xl mb-2" htmlFor="phone">Phone</label>
                                    {isEditing ? (
                                        <input 
                                            className="w-full p-2 border border-gray-300 rounded" 
                                            type="text" 
                                            id="phone" 
                                            name="phone" 
                                            value={user.phone}
                                            onChange={handleChange}
                                            required 
                                        />
                                    ) : (
                                        <p>{user.phone}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-xl mb-2" htmlFor="gender">Gender</label>
                                    {isEditing ? (
                                        <select 
                                            className="w-full p-2 border border-gray-300 rounded" 
                                            type="text" 
                                            id="gender" 
                                            name="gender" 
                                            value={user.gender}
                                            onChange={handleChange}
                                            required 
                                        >
                                            <option value="Female">Female</option>
                                            <option value="Male">Male</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    ) : (
                                        <p>{user.gender}</p>
                                    )}
                                </div>
                                <button 
                                    className="w-full bg-purple-600 text-white p-2 rounded mt-4 hover:bg-white hover:border-2 hover:border-purple-600 hover:text-purple-600 font-bold transition duration-200" 
                                    type="button"
                                    onClick={() => setIsEditing(!isEditing)}
                                >
                                    {isEditing ? "Update Profile" : "Edit"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default UserUpdate;