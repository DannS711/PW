import LinkedIn from "../assets/linkedin.svg";
import Github from "../assets/github-logo.svg";
import Gmail from "../assets/gmail.svg";
import Whatsapp from "../assets/whatsapp-logo.svg";
import { ValidationError, useForm } from "@formspree/react";
import { useEffect, useState } from "react";

export default function Contact({ onPageChange }) {
  const [state, handleSubmit] = useForm("myyqwzrd");
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (state.succeeded) {
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
        if (countdown === 1) {
          onPageChange("introPage"); // Redirect when countdown reaches zero
        }
      };
    }
  }, [state.succeeded, onPageChange, countdown]);

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center my-32 text-3xl font-bold">
        <p>Thank you for contacting me. Please wait for my response.</p>
        <p>Redirecting to Introduction in {countdown} seconds...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center my-20">
      <div className="flex justify-center p-8 rounded-2xl gap-8 shadow-round-md">
        <div className="flex flex-col my-28">
          <a
            href="https://www.linkedin.com/in/danny-setiawan-syah-aa5495281/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 my-1"
          >
            <img src={LinkedIn} alt="LinkedIn" className="w-8 h-8" />
            <p className="text-sm">Danny Setiawan Syah</p>
          </a>
          <a
            href="https://github.com/DannS711"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 my-1"
          >
            <img src={Github} alt="Github" className="w-8 h-8" />
            <p className="text-sm">DannS711</p>
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 my-1"
          >
            <img src={Gmail} alt="Gmail" className="w-8 h-8" />
            <p className="text-sm">danns.6969@gmail.com</p>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 my-1"
          >
            <img src={Whatsapp} alt="Gmail" className="w-8 h-8" />
            <p className="text-sm">+62 85715568129</p>
          </a>
        </div>
        <div className="flex border-l-2 pl-8">
          <form
            action="https://formspree.io/f/myyqwzrd"
            className="grid gap-4"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="p-1 border-2 rounded-md"
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-1 border-2 rounded-md"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              cols="30"
              rows="5"
              className="p-1 border-2 rounded-md"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-blue-400 mt-2 w-20 rounded-full active:bg-blue-500 font-medium"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
