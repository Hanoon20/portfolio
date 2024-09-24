import './Contact.css';
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";
import React, { useState } from 'react';
import { MdOutlineDownloadDone } from "react-icons/md";

export default function Contact() {
  const media = {
    links: [
      {
        icon: <FaMobile />,
        href: 'tel:+94 716903578',
        class: 'hover:text-yellow-700 text-4xl'
      },
      {
        icon: <RiWhatsappFill />,
        href: 'https://wa.me/+94716903578',
        target: '_blank',
        rel: 'noopener noreferrer',
        class: 'hover:text-green-600 text-4xl py-auto'
      },
      {
        icon: <FaLinkedin />,
        href: 'https://www.linkedin.com/in/mohammed-hanoon',
        class: 'hover:text-blue-400 text-4xl'
      },
      {
        icon: <FaFacebook />,
        href: 'https://web.facebook.com/mohammed.hanoon.754/',
        class: 'hover:text-blue-900 text-4xl'
      },
      {
        icon: <FaXTwitter />,
        href: 'https://x.com/HanoonCo',
        class: 'hover:text-blue-950 text-4xl'
      }
    ]
  };

  const [result, setResult] = useState("");
  const [isFormVisible, setFormVisible] = useState(true);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(<p className='submitted py-4'>Sending Message...</p>);
    const formData = new FormData(event.target);

    formData.append("access_key", "ca8c9faf-600c-48fa-8019-59251156f2fc");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
        setResult(
            <div className='form-submit text-center px-10 py-6 md:mx-0'>
                <div className="flex justify-center items-center mb-2">
                    <MdOutlineDownloadDone className="text-5xl" />
                </div>
                <span className='submitted text-2xl py-2'>Submitted Successfully!</span>
                <p className="text-base md:text-lg">Thank you! Form Submitted Successfully.</p>
                <p className="text-base md:text-lg">We'll reply to you soon.</p>
            </div>
          );
      setFormVisible(false);
      event.target.reset();
    } else {
      setResult(<p className="text-red-500">{data.message || "An error occurred. Please try again later."}</p>);
    }
  };

  return (
    <section className='contact-sec' id='contact'>
      <div className="media my-auto md:my-auto mx-auto flex flex-col text-center md:flex-row">
        <div className="w-full px-5 md:w-1/2 text-center md:px-24">
          <h2 className="words pb-14 md:pb-20 md:text-center m:w-full">
            <span className="font-bold">"Let's collaborate!</span> <br />
            I'm open to freelance projects, job opportunities, or any inquiries. Feel free to reach out."
          </h2>
          <div className='flex justify-around md:justify-between'>
            {media.links.map((Link, index) => (
              <div key={index}>
                <a 
                  href={Link.href}
                  target={Link.target} 
                  rel={Link.rel}
                  className={Link.class}>
                  {Link.icon}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 text-center">
          {isFormVisible && (
            <form className="py-20 px-10 md:px-32 md:w-full pb-8 mb-5" onSubmit={onSubmit}>
              <h3 className="mb-8 font-bold getIn">Get In Touch</h3>
              <div className="input-parent flex flex-row md:flex-row md:gap-3 gap-1">
                <input type="name" name="name" placeholder="Name" required className="input-child w-1/2 my-3 px-2 py-2 rounded-lg" /><br />
                <input type="email" name="email" placeholder="Email" required className="input-child w-1/2 my-3 px-2 py-2 rounded-lg" />
              </div>
              <div className="grid flex-col md:flex-row">
                <textarea name="message" placeholder="Enter Your Message" className="px-3 rounded-lg col-span-5 py-2" required></textarea>  <br />
              </div>
              <button type='submit' className="submit-btn font-bold bg-primary w-full text-white rounded-lg py-2 mb-5 hover:bg-orange-600">Submit</button>
            </form>
          )}

          {result && (
            <div className="bg-red-200 rounded-lg md:my-24 md:mx-24 mx-6 my-20 flex flex-col items-center justify-center">
              <p className="text-center">{result}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
