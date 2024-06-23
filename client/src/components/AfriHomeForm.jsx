import React from "react";
import "../styles/AfriHomeForm.css";

const AfriHomeForm = () => {
    return (
        <div className="flex flex-grow flex-row afrihome-form">
            <div className="flex w-1/2 flex-col p-4 text-form">
                <h2 className="text-4xl font-bold h2-1-1">Talk to an AfriHomes Agent</h2>
                <p className="text-2xl p-1-1">
                    Interested in a Location? Talk to an AfriHome Agent who specializes 
                    in the real estate of that location or area to discuss your expectations</p>
            </div>
            <div className="flex w-1/2 flex-col p-4 form-1">
                <form className="flex flex-col space-y-4 form-1-1">
                    <div>
                        <label className="block text-xl mb-2" htmlFor="name">Location Interest</label>
                        <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" name="name" required />
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
                    <button className="w-full text-white p-2 rounded mt-4" type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default AfriHomeForm;