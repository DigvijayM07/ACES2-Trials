import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";

const Contact = () => {

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden pic-bg">
      <div>
        <motion.div className="flex-[0.75] bg-black-100 p-8 rounded-2xl overflow-hidden">
          <div className="custom-bg p-4 w-[37rem] border border-white focus:border-primary focus:ring focus:ring-primary rounded-lg">
            <p className={styles.sectionSubText}>Get in touch</p>
            <h3 className={styles.sectionHeadText}>Contact.</h3>

            <form className="mt-4 flex flex-col gap-6"> {/* Adjusted spacing */}
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2">Your Name</span> {/* Adjusted spacing */}
                <input
                  type="text"
                  name="name"
                  placeholder="What's your good name?"
                  className="pic-bg py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border border-white focus:border-primary focus:ring focus:ring-primary font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2">Your Email</span> {/* Adjusted spacing */}
                <input
                  type="email"
                  name="email"
                  placeholder="What's your web address?"
                  className="pic-bg py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border border-white focus:border-primary focus:ring focus:ring-primary font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2">Your Message</span> {/* Adjusted spacing */}
                <textarea
                  rows={7}
                  name="message"
                  placeholder="What you want to say?"
                  className="pic-bg py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border border-white focus:border-primary focus:ring focus:ring-primary font-medium"
                />
              </label>

              <button
                type="submit"
                className="pic-bg py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary border border-white"
              >
                {"Send"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      <motion.div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        {/* ... rest of the content */}
      </motion.div>
    </div>
  );
};

export default Contact;
