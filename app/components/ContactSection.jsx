"use client";
import React, { useState } from "react";
// import GithubIcon from "../../../public/projectPics/github-mark.png";
// import LinkedinIcon from "../../../public/projectPics/icons8-linkedin-150.png";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="flex items-center text-xl font-bold text-indigo-950 my-2">
          Let&apos;s Connect!
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>
        </h5>

        <p className="text-indigo-950 mb-4 max-w-md">
          {" "}
          I&apos;m actively seeking new opportunities and my inbox is always open. 
          Whether you&apos;re curious about something or simply want to say hello, I&apos;m here and ready to connect. 
          I&apos;ll get back to you as soon as possible!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/charmieduhh">
            <Image src="/projectPics/github.png" className="transform hover:scale-105 transition duration-200" alt="GitHub Icon" width={50} height={50} />
          </Link>
          <Link href="https://www.linkedin.com/in/charmie-d/">
            <Image src="/projectPics/icons8-linkedin-150.png" className="transform hover:scale-105 transition duration-200" alt="Linkedin Icon" width={50} height={50} />
          </Link>
          <a href="/resume.pdf" download>
            <Image src="/projectPics/cv.png" className="transform hover:scale-105 transition duration-200" alt="Linkedin Icon" width={50} height={50} />
          </a>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-indigo-950 block mb-2 text-md font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-indigo-800 text-sm rounded-lg block w-full p-2.5"
                placeholder="johndoe@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-indigo-950 block text-md mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-indigo-950 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-indigo-950 block text-md mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-white border border-[#33353F] placeholder-[#9CA2A9] text-indigo-800 text-sm rounded-lg w-full block p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <div className="flex justify-center">
            <button
              type="submit"
              className="bg-indigo-950 hover:bg-primary-600 text-white font-md py-2.5 px-5 md:w-auto rounded-lg w-full transform hover:scale-105 transition duration-200"
            >
              Send Message
            </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;