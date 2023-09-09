import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero is-success is-halfheight has-bg-img">
      <div className="hero-body has-text-centered-mobile">
        <div className="container">
          <p className="title has-text-white">Collections 2030</p>
          <p className="subtitle has-text-weight-semibold	has-text-white">
            Ethically crafted with an unwavering commitment to exceptional
            quality.
          </p>
          <Link to="/shop">
            <button className="button is-black is-medium is-responsive px-5">
              <span>Shop Now</span>
              <span className="icon is-small">
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
