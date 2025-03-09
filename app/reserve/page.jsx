"use client";

import Link from "next/link";
import { useState } from "react";

export default function Reserve() {
  const [party, setParty] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="flex items-center justify-center w-full   text-white pb-[100px]">
      {submitted && (
        <div className="bg-black p-4 rounded flex flex-col items-center justify-center">
          <h1 className="font-bold text-4xl">
            Thank you for making a reservation at CraftRoots!
          </h1>
          <h2>
            A confirmation email has been sent with your reservation
            information.
          </h2>
          <h2>
            If you wish to cancel your reservation, please call us at{" "}
            <Link
              href="tel:859-999-999"
              target="_blank"
              className="hover:underline"
            >
              <strong>(859) 999-999</strong>
            </Link>
          </h2>
        </div>
      )}

      {!submitted && (
        <div className="bg-black p-4 rounded flex flex-col items-center justify-center mt-[100px] max-w-[800px]">
          <h1 className="font-bold text-5xl">
            Make a Reservation at CraftRoots
          </h1>

          <Link
            href={
              "https://www.google.com/maps/place/Louisville,+KY/@38.2103869,-85.8013648,12.25z/data=!4m6!3m5!1s0x88690b1ab35bd511:0xd4d3b4282071fd32!8m2!3d38.2468618!4d-85.7663724!16zL20vMGZfXzE?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D"
            }
            className="hover:underline"
            target="_blank"
          >
            <p className="font-semibold">1234 Restaurant Ln, Louisville, KY</p>
          </Link>
          <p className="w-[95%] text-center">
            If you would like to order takeout instead, please go to our menu
            and select the items you want and then checkout.
          </p>
          <div className="w-[80%] border-t-[1px] my-4 border-gray-400 h-full"></div>
          <div className="flex flex-col items-center">
            <div className="flex space-x-2">
              <div className="">
                <h2 className="font-bold">Date of Reservation</h2>
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  className="px-4 rounded border-2 border-black mb-4 text-black"
                />
              </div>
              <div>
                <h2 className="font-bold">Time of Reservation</h2>
                <input
                  type="time"
                  min="09:00"
                  max="18:00"
                  step="900"
                  className="px-4 border-2 border-black text-black rounded"
                />
              </div>
            </div>

            <h2 className="text-xl font-semibold text-center mb-1">
              How many in your party?
            </h2>
            <div className="flex space-x-2">
              <button
                className={`w-[50px] h-[50px] rounded text-white ${
                  party === 1 ? "bg-gray-900" : "bg-gray-600 hover:bg-gray-700"
                }`}
                onClick={() => {
                  setParty(1);
                }}
              >
                1
              </button>
              <button
                className={`w-[50px] h-[50px] rounded text-white ${
                  party === 2 ? "bg-gray-900" : "bg-gray-600 hover:bg-gray-700"
                }`}
                onClick={() => {
                  setParty(2);
                }}
              >
                2
              </button>
              <button
                className={`w-[50px] h-[50px] rounded text-white ${
                  party === 3 ? "bg-gray-900" : "bg-gray-600 hover:bg-gray-700"
                }`}
                onClick={() => {
                  setParty(3);
                }}
              >
                3
              </button>
              <button
                className={`w-[50px] h-[50px] rounded text-white ${
                  party === 4 ? "bg-gray-900" : "bg-gray-600 hover:bg-gray-700"
                }`}
                onClick={() => {
                  setParty(4);
                }}
              >
                4
              </button>
              <button
                className={`w-[50px] h-[50px] rounded text-white ${
                  party === 5 ? "bg-gray-900" : "bg-gray-600 hover:bg-gray-700"
                }`}
                onClick={() => {
                  setParty(5);
                }}
              >
                5
              </button>
              <button
                className={`w-[50px] h-[50px] rounded text-white ${
                  party === 6 ? "bg-gray-900" : "bg-gray-600 hover:bg-gray-700"
                }`}
                onClick={() => {
                  setParty(6);
                }}
              >
                6
              </button>
            </div>
            <p>
              Please call for parties larger than 6 -{" "}
              <Link
                href="tel:859-999-999"
                target="_blank"
                className="hover:underline"
              >
                <strong>(859) 999-999</strong>
              </Link>
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 justify-center">
            <h2 className="text-xl font-semibold text-center mb-1">
              Contact Information
            </h2>
            <input
              type="text"
              placeholder="Name"
              className="text-black px-4 rounded border-2 border-black"
            />
            <input
              type="text"
              placeholder="Email"
              className="text-black px-4 rounded border-2 border-black"
            />
            <input
              type="text"
              placeholder="Phone"
              className="text-black px-4 rounded border-2 border-black"
            />
          </div>
          <div className="flex items-center justify-center space-x-4 mt-2">
            <input type="checkbox" className="w-[20px] h-[20px]" />{" "}
            <p>Wheelchair Access Needed</p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <input type="checkbox" className="w-[20px] h-[20px]" />{" "}
            <p>Join our Mailing List</p>
          </div>
          <div className="bg-gray-600 font-bold p-4 rounded text-white mt-2">
            Minimum Wait Time: 35 Minutes
          </div>
          <button
            className="text-bold bg-green-600 hover:bg-green-800 px-4 py-1 text-white mt-4 rounded"
            onClick={() => setSubmitted(true)}
          >
            Make Reservation
          </button>
        </div>
      )}
    </main>
  );
}
