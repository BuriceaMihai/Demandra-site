import React from "react";
import { motion } from "framer-motion";
import "./ContactPage.css";

const titleContact = "Get In Contact With Us".split(" ");

const infoContact =
  " Email: contact@demandra.com <br> Phone: +1-800-123-4567".split(" ");

const ContactPage: React.FC = () => {
  return (
    <div className="bodyContact">
        <div className="titleContainer">
          <div className="titleContact">
            {titleContact.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: i / 7,
                }}
                key={i}
              >
                {el === "<br>" ? <br /> : `${el} `}
              </motion.span>
            ))}
          </div>
          {/* Subtitle text below the main title */}
          <motion.div
            className="subtitleContact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.5 }}
          >
            If you want to find more about us, or even want to become partners, hit us with any question you'd like.
          </motion.div>
        </div>

        <div className="textContainer">
          <motion.div
            className="infoContainer"
            initial={{ opacity: 0, y: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.9, delay: 1 },
            }}
            viewport={{ once: true }}
          >
            {infoContact.map((el, i) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1.25,
                  delay: 1.25 + i / 7,
                }}
                key={i}
              >
                {el === "<br>" ? <br /> : `${el} `}
              </motion.span>
            ))}
          </motion.div>
        

        <motion.div
          className="directContact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 1.5 },
          }}
          viewport={{ once: true }}
        >
          <form className="contact-form">
            <div>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required />
            </div>
            <button type="submit">Send</button>
          </form>
        </motion.div>
      </div>
      
    </div>
  );
};

export default ContactPage;
