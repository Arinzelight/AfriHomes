import React from "react";

const AfriHomeForm = () => {
    return (
        <div className="flex flex-col lg:flex-row p-10 mt-8 bg-gray-100">
            <div className="flex flex-col lg:w-1/2 p-4 text-center lg:text-left">
                <h2 className="text-4xl font-bold mb-4">Talk to an AfriHomes Agent</h2>
                <p className="text-2xl">
                    Interested in a Location? Talk to an AfriHome Agent who specializes 
                    in the real estate of that location or area to discuss your expectations.
                </p>
            </div>
            <div className="flex flex-col lg:w-1/2 p-4">
                <form className="flex flex-col space-y-4">
                    <div>
                        <label className="block text-xl mb-2" htmlFor="location">Location Interest</label>
                        <input className="w-full p-2 border border-gray-300 rounded" type="text" id="location" name="location" required />
                    </div>
                    <div>
                        <label className="block text-xl mb-2" htmlFor="email">Email</label>
                        <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" placeholder="Email" required />
                    </div>
                    <div>
                        <label className="block text-xl mb-2" htmlFor="phone">Phone</label>
                        <input className="w-full p-2 border border-gray-300 rounded" type="text" id="phone" name="phone" placeholder="Phone" required />
                    </div>
                    <div>
                        <label className="block text-xl mb-2" htmlFor="message">Message</label>
                        <textarea className="w-full p-2 border border-gray-300 rounded" id="message" name="message" rows="4" placeholder="Message" required></textarea>
                    </div>
                    <button className="w-full bg-purple-600 text-white p-2 rounded mt-4 hover:bg-white hover:border-2 hover:border-purple-600 hover:text-purple-600 font-bold transition duration-200" type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default AfriHomeForm;