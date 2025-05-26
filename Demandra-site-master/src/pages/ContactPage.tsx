import React from "react";
import { motion } from "framer-motion";
import "./ContactPage.css";

const titleContact = "Get In Contact With Us".split(" ");

const infoContact =
  " Email: contact@demandra.com <br> Phone: +1-800-123-4567".split(" ");

const ContactPage: React.FC = () => {
  return (
    <div className="bodyContact">
      <div className="textContainer">
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
      </div>
    </div>
  );
};

export default ContactPage;
