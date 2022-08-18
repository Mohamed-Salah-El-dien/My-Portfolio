import React from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/fontawesome-free-solid';
import emailjs from '@emailjs/browser';

import './Contact.css';

const Contact = () => {
  const contact = useSelector((state) => state.pages.contact);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_axqnsod',
        'template_khcniwl',
        form.current,
        'DvIWAz3BgIn9Ijj3A'
      )
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  };

  return (
    <article className={contact ? 'contact active' : 'contact'}>
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6843.0337130364305!2d31.163531210718148!3d30.95605558920677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb567e31d30f%3A0x39c2167fd34fd1b6!2z2KfYs9mI2KfZgiDZgdiq2K0g2KfZhNmE2Ycg2KzZhdmE2KkgLSDZgdix2Lkg2KfZhNmF2K3ZhNip!5e0!3m2!1sar!2seg!4v1660231540004!5m2!1sar!2seg"
            width="400"
            height="300"
            loading="lazy"
            title="map"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form className="form" ref={form} onSubmit={sendEmail}>
          <div className="input-wrapper">
            <input
              type="text"
              name="user_name"
              className="form-input"
              placeholder="Full name"
              required
            />

            <input
              type="email"
              name="user_email"
              className="form-input"
              placeholder="Email address"
              required
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
          ></textarea>

          <button className="form-btn" type="submit">
            <FontAwesomeIcon icon={faPaperPlane} className="icon" />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;
