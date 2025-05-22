"use client";
import Link from "next/link";

import image2 from "@/public/reservation/2.png";
import image3 from "@/public/reservation/3.png";
import image4 from "@/public/reservation/4.png";
import image5 from "@/public/reservation/5.png";
import emailjs from "@emailjs/browser";

import Image from "next/image";
import { useState } from "react";
export default function ReservationForm() {
  const [party, setParty] = useState(0);
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [wheelchair, setWheelchair] = useState(false);
  const [time, setTime] = useState("");
  const [mailing, setMailing] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const serviceID = "service_1l17h0b";
  const templateID = "template_coirses";
  const publicKey = "D1IU6lhCQ1LGODkK4";
  const params = {
    name: name,
    phone: phone,
    email: email,
    date: date,
    time: time,
    party: party,
    wheelchair: wheelchair,
  };

  emailjs.init({
    publicKey: publicKey,
    blockHeadless: true,
    blockList: {},
    limitRate: {
      id: "app",
      throttle: 5000,
    },
  });

  function handleSubmit() {
    setSubmitted(true);
    emailjs.send(serviceID, templateID, params);
  }
  return (
    <>
      {submitted && (
        <div className="lg:w-1/2 flex justify-center flex-col items-center py-[50px]">
          <h1 className="text-5xl text-center font-kenao">
            Thank you for making a reservation at CraftRoots.
          </h1>
          <h3 className="text-2xl mt-4 mb-2">
            We have sent an email with your reservation details.
          </h3>
          <div className="flex space-x-1">
            <h4>
              If you made a mistake or would like to cancel your reservation,
              please email us at
            </h4>
            <Link
              href="mailto:tsa.craftroots@gmail.com"
              className="font-bold hover:underline"
              target="_blank"
            >
              tsa.craftroots@gmail.com
            </Link>
          </div>
          <h3 className="mt-8 text-4xl font-seasons">
            Reservation Information
          </h3>
          <div className="flex space-x-1">
            <p className="font-bold">Name:</p>
            <p>{name}</p>
          </div>
          <div className="flex space-x-1">
            <p className="font-bold">Phone:</p>
            <p>{phone}</p>
          </div>
          <div className="flex space-x-1">
            <p className="font-bold">Email:</p>
            <p>{email}</p>
          </div>
          <div className="flex space-x-1">
            <p className="font-bold">Date:</p>
            <p>{date}</p>
          </div>
          <div className="flex space-x-1">
            <p className="font-bold">Time:</p>
            <p>{time}</p>
          </div>
          <div className="flex space-x-1">
            <p className="font-bold">Party Size:</p>
            <p>{party}</p>
          </div>
          <div className="flex space-x-1">
            <p className="font-bold">Wheelchair Accomodations:</p>
            <p>{wheelchair ? "Yes" : "No"}</p>
          </div>
        </div>
      )}

      {!submitted && (
        <div className="lg:w-1/2 flex justify-center flex-col items-center py-[50px]">
          <div className="flex md:flex-row flex-col items-center justify-center space-y-4 md:space-y-0 md:space-x-8 w-full relative">
            <Image
              src={image4}
              alt=""
              className="absolute top-0 left-1/2 -translate-x-3/4 -translate-y-1/2 max-w-[250px] hidden md:block"
            />
            <div className="w-[90%] sm:w-1/2">
              <h3 className="text-[#755d48] text-2xl font-dm">
                Date of Reservation
              </h3>
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                className="font-kenao text-xl px-8 py-4 w-full"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="w-[90%] sm:w-1/2">
              <h3 className="text-[#d17217] text-2xl font-dm">
                Time of Reservation
              </h3>
              <input
                type="time"
                min="09:00"
                max="18:00"
                step="900"
                className="font-kenao text-xl px-8 py-4 w-full"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center relative z-50">
            <h3 className="text-[#1e5541] text-2xl font-dm mt-4 ">
              Number of People
            </h3>

            <div className="flex flex-wrap gap-6 justify-center font-kenao text-2xl my-4">
              <button
                className={`w-[70px] h-[70px] bg-[#de7008] text-white ${
                  party === 1 ? "border-black border-2" : "border-0"
                }`}
                onClick={() => {
                  setParty(1);
                }}
              >
                1
              </button>
              <button
                className={`w-[70px] h-[70px] bg-[#e29953] text-white ${
                  party === 2 ? "border-black border-2" : "border-0"
                }`}
                onClick={() => {
                  setParty(2);
                }}
              >
                2
              </button>
              <button
                className={`w-[70px] h-[70px] bg-[#d5b928] text-white ${
                  party === 3 ? "border-black border-2" : "border-0"
                }`}
                onClick={() => {
                  setParty(3);
                }}
              >
                3
              </button>
              <button
                className={`w-[70px] h-[70px] bg-[#d0b577] text-white ${
                  party === 4 ? "border-black border-2" : "border-0"
                }`}
                onClick={() => {
                  setParty(4);
                }}
              >
                4
              </button>
              <button
                className={`w-[70px] h-[70px] bg-[#9da57f] text-white ${
                  party === 5 ? "border-black border-2" : "border-0"
                }`}
                onClick={() => {
                  setParty(5);
                }}
              >
                5
              </button>
              <button
                className={`w-[70px] h-[70px] bg-[#1e5541] text-white ${
                  party === 6 ? "border-black border-2" : "border-0"
                }`}
                onClick={() => {
                  setParty(6);
                }}
              >
                6
              </button>
            </div>

            <p className="text-[#d95204] text-center text-wrap max-w-[95%]">
              *For party sizes larger than 6 please call to make a reservation:{" "}
              <Link
                href="tel:859-999-999"
                target="_blank"
                className="hover:underline"
              >
                <strong className="text-nowrap">(859) 999-999</strong>
              </Link>
            </p>
          </div>

          <div className="flex md:flex-row flex-col space-y-4 md:space-y-0 items-center md:space-x-8 w-full mt-8 relative">
            <Image
              src={image3}
              alt=""
              className="absolute inset-0 max-w-[300px] -translate-y-[60%] -translate-x-1/2 md:block hidden"
            />
            <Image
              alt=""
              className="absolute right-0 top-0 max-w-[200px] translate-x-[25%] -translate-y-full md:block hidden"
              src={image5}
            />
            <div className="w-[90%] sm:w-1/2">
              <h3 className="text-[#755d48] text-2xl font-dm">Name</h3>
              <input
                type="text"
                className="font-kenao text-xl px-8 py-4 w-full  "
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-[90%] sm:w-1/2">
              <h3 className="text-[#077341] text-2xl font-dm ">
                Phone Number{" "}
              </h3>
              <input
                type="text"
                className="font-kenao text-xl px-8 py-4 w-full"
                placeholder="1234567890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="md:w-full mt-4 w-[90%] sm:w-1/2 relative z-50">
            <h3 className="text-[#1e5541] text-2xl  font-dm ">Email </h3>
            <input
              type="text"
              className="font-kenao text-xl px-8 py-4 w-full"
              placeholder={"example@gmail.com"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex md:flex-row flex-col  items-center justify-center md:space-x-8 text-[#024762] font-kenao relative z-50">
            <div className="flex items-center justify-center space-x-2 mt-2">
              <input
                type="checkbox"
                className="w-[20px] h-[20px]"
                value={wheelchair}
                onChange={(e) => setWheelchair(e.target.checked)}
              />
              <p>Wheelchair Access Needed</p>
            </div>
            <div className="flex items-center justify-center space-x-2 mt-2">
              <input
                type="checkbox"
                className="w-[20px] h-[20px]"
                value={mailing}
                onChange={(e) => setMailing(e.target.checked)}
              />
              <p>Join Mailing List</p>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col relative">
            <Image
              src={image2}
              alt=""
              className="absolute right-0 top-0 max-w-[200px] translate-x-full -translate-y-1/2 -z-50 hidden md:block"
            />
            <div className="flex md:flex-row flex-col items-center justify-center space-x-2 text-2xl font-dm mt-3 text-center">
              <p className="text-[#755d48]">Usual Minimum Wait Time:</p>
              <p className="text-[#d95204]">41 Minutes</p>
            </div>
            <button
              className="text-[#024762] bg-[#78cb43] mt-4 font-seasons w-[85%] sm:w-2/3 md:w-full text-xl py-3"
              onClick={handleSubmit}
            >
              Make Reservation
            </button>
          </div>
        </div>
      )}
    </>
  );
}
