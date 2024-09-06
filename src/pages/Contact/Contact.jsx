import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa6";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_c6qufit', 'template_8mvopiq', form.current, {
        publicKey: 'Bf6XIBvFewxn6bSAQ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
      <div className="contact-container">
        <div className="cont">
          <div className="containe1">
            <h1 className="empla">Empalacement </h1>
            <p className="para">
              Hackerspace, 1 Place Tahar Haddad, 1 Tunis 1053. +216 39 143 ..
            </p>
          </div>
          <div className="container2">
            <h1>Suivez nous</h1>
            <div>
              <ul className="icons">
                <FaFacebook />
                <FaTwitter />
                <FaInstagramSquare />
                <FaGooglePlus />
              </ul>
            </div>
          </div>
        </div>
        <div className="container3">
          <h1 className="form">Formulaire de contact</h1>
          <form className="input-contact" ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
          
        </div>
      </div>
    </>
  );
};

export default Contact;
