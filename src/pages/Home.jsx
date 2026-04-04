import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh(); 
  }, []);
    return (
        <div>
            <main className="main">
                <section id="hero" className="hero section">

                    <img src="/images/home.png" alt="lkjg" data-aos="fade-in" />

                    <div className="container text-center" data-aos="zoom-out" data-aos-delay="100">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <h2>Sahil</h2>
                                <p className=' text-secondary'>I'm a professional MERN stack developer from Chandigarh, India</p>
                                 <NavLink to="/about" className=" nav-link btn-get-started">About Me</NavLink>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Home