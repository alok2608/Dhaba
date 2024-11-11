import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
             Welcome to Khana Khazana! Our mission is to bring you a delightful dining experience 
             through a seamless combination of delicious food, excellent service, and an easy-to-use app that
             enhances your visit. Whether you're craving a quick bite or planning a family meal, we have 
             something for everyone.
              Our team is passionate about creating fresh, flavorful dishes with the finest ingredients,
               and we believe in making every meal memorable. With our app, you can easily explore our menu,
                place an order, or make a reservation—all from the convenience of your phone.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
