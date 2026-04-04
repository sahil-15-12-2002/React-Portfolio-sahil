import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PureCounter from "@srexi/purecounterjs";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const About = () => {
  SwiperCore.use([Pagination, Autoplay]);
  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({ duration: 1000, once: true });

    // Initialize PureCounter for stats
    new PureCounter();
  }, []);

  const [filled, setFilled] = useState(false);

  useEffect(() => {
    // Watch scroll and fill progress when skills section is in view
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setFilled(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check immediately
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Skills data
  const skills = [
    { name: "JavaScript", value: 75 },
    { name: "Node JS", value: 75 },
    { name: "React", value: 85 },
    { name: "Express JS", value: 65 },
    { name: "MongoDB", value: 80 },
    { name: "GIT", value: 70 },
    { name: "Photoshop", value: 65 },
    { name: "Adobe Illustrator", value: 60 },
  ];

  // Stats data
  const stats = [
    { label: "Clients", end: 12 },
    { label: "Projects", end: 62 },
    { label: "Hours Of Support", end: 458 },
    { label: "Workers", end: 8 },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      img: "/images/testimonials.jpg",
      text: "John is an exceptional leader and visionary. His guidance helped our team achieve remarkable results and growth over the past year.",
    },
    {
      name: "Jane Smith",
      role: "Lead Designer",
      img: "/images/testimonials.jpg",
      text: "Working with Jane was a pleasure. Her creativity and attention to detail transformed our ideas into stunning visuals that impressed our clients.",
    },
    {
      name: "Michael Lee",
      role: "Product Manager",
      img: "/images/testimonials.jpg",
      text: "Michael’s strategic insights and problem-solving skills made our product launch seamless and successful. Highly recommended for any project.",
    },
    {
      name: "Emily Clark",
      role: "Freelancer",
      img: "/images/testimonials.jpg",
      text: "Emily is talented, reliable, and professional. She consistently delivers high-quality work that exceeds expectations. A true asset to any team.",
    },
    {
      name: "Robert Johnson",
      role: "Entrepreneur",
      img: "/images/testimonials.jpg",
      text: "Robert’s entrepreneurial mindset and innovative ideas inspired our collaboration. He brings passion, creativity, and dedication to every project.",
    },
  ];

  return (
    <main className="main">
      <section id="about" className="about section mt-4">
        <div className="container section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>
            Hello! I'm Sahil, a passionate MERN Stack Developer who enjoys building modern, responsive, and user-friendly web applications. I focus on writing clean, efficient code and creating seamless user experiences.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <img src="/images/about.jpeg" className="img-fluid" alt="Sahil Kumar portrait" />
            </div>
            <div className="col-lg-8 content">
              <h2>MERN Stack Developer || Web & Logo Designer</h2>
              <p className="fst-italic py-3">
                I specialize in developing full-stack web applications using MongoDB, Express.js, React, and Node.js. I enjoy turning ideas into real-world projects and continuously improving my skills by working on new technologies. My goal is to build scalable and impactful digital solutions.
              </p>

              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right" aria-hidden="true"></i> <strong>Birthday:</strong> <span>15 Dec 2002</span></li>
                    <li><i className="bi bi-chevron-right" aria-hidden="true"></i> <strong>Website:</strong> <span><a className="text-decoration-none" href="http://executionbyte.com" target="_blank" rel="noopener noreferrer">executionbyte.com</a></span></li>
                    <li><i className="bi bi-chevron-right" aria-hidden="true"></i> <strong>Phone:</strong> <span>+91 7973014002</span></li>
                    <li><i className="bi bi-chevron-right" aria-hidden="true"></i> <strong>City:</strong> <span>Chandigarh, India</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right" aria-hidden="true"></i> <strong>Age:</strong> <span>23</span></li>
                    <li><i className="bi bi-chevron-right" aria-hidden="true"></i> <strong>Degree:</strong> <span>Bachelor</span></li>
                    <li><i className="bi bi-chevron-right" aria-hidden="true"></i> <strong>Email:</strong> <span>10sahilkumar2002@example.com</span></li>
                    <li><i className="bi bi-chevron-right" aria-hidden="true"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>

              <p className="py-3">
                I am always open to new opportunities, collaborations, and challenging projects that help me grow as a developer. Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Skills</h2>
          <p>My technical expertise across various technologies.</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row skills-content">
            {skills.map((skill, idx) => (
              <div className="col-lg-6" key={idx} data-aos="fade-right">
                <div className="progress" style={{ marginBottom: "15px" }}>
                  <span style={{ display: "flex", justifyContent: "space-between", fontWeight: 600, marginBottom: "5px" }}>
                    {skill.name} <i>{skill.value}%</i>
                  </span>
                  <div style={{ width: "100%", background: "#e0e0e0", borderRadius: "20px", overflow: "hidden" }}>
                    <div
                      role="progressbar"
                      aria-valuenow={skill.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{
                        width: filled ? `${skill.value}%` : "0%",
                        height: "10px",
                        background: "#34b7a7",
                        borderRadius: "10px",
                        transition: "width 2.5s ease-in-out",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stats" className="stats section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Facts</h2>
          <p>Here are some interesting facts and achievements that highlight my work and experience.</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {stats.map((stat, idx) => (
              <div className="col-lg-3 col-md-6" key={idx}>
                <div className="stats-item text-center w-100 h-100">
                  <span data-purecounter-start="0" data-purecounter-end={stat.end} data-purecounter-duration="1" className="purecounter"></span>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>What clients are saying about my work and the experiences we’ve shared.</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            loop={true}
            autoplay={{ delay: 5000 }}
            slidesPerView="auto"
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="testimonial-item">
                  <img src={t.img} className="testimonial-img" alt={`${t.name} picture`} />
                  <h3>{t.name}</h3>
                  <h4>{t.role}</h4>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => <i className="bi bi-star-fill" key={i}></i>)}
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>{t.text}</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  );
};

export default About;