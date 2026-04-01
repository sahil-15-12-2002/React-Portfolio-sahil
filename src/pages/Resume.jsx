import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Resume = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  return (
    <div>
      <main className="main">

        <section id="resume" className="resume section  mt-4">

          <div className="container section-title" data-aos="fade-up">
            <h2>Resume</h2>
            <p>Overview of my education & experience</p>
          </div>

          <div className="container">
            <div className="row">

              {/* Left Column: Summary + Education */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                {/* Summary */}
                <h3 className="resume-title">Summary</h3> <div className="resume-item pb-0"> <h4>Sahil Kumar</h4>
                  <p><em>Full Stack Developer passionate about building scalable and user-friendly web applications with modern technologies.</em></p>
                  <ul> <li>Chandigarh, India</li> <li>+91 7973014002</li> <li>10sahilkumar2002@gmail.com</li> </ul> </div>

                {/* Education */}
                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>Bachelor of Computer Applications (BCA)</h4>
                  <h5>08/2021 – 06/2024</h5>
                  <p><em>Sri Guru Gobind Singh College, Sector 26, Chandigarh</em></p>
                  <p>Focused on software development, web technologies, and database management. Completed several projects in MERN stack development.</p>
                </div>
                <div className="resume-item">
                  <h4>Information Technology</h4>
                  <h5>03/2019 – 03/2021</h5>
                  <p><em>Govt. Model Sr. Secondary School, Sarangpur, Chandigarh</em></p>
                  <p>Learned fundamental IT skills including programming, networking, and basic web development.</p>
                </div>

              </div>

              {/* Right Column: Experience + Projects */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">

                {/* Professional Experience */}
                <h3 className="resume-title">Professional Experience</h3>

                <div className="resume-item">
                  <h4>Frontend Developer</h4>
                  <h5>12/2025 – 02/2026</h5>
                  <p><em>Global Adeevatech Private Limited, Zirakpur, India</em></p>
                  <p>Developed responsive web interfaces and improved UI/UX for client projects using React JS and Bootstrap.</p>
                </div>

                <div className="resume-item">
                  <h4>MEAN Stack Developer</h4>
                  <h5>06/2025 – 09/2025</h5>
                  <p><em>Kommuno Technologies Pvt. Ltd., Mohali Phase 8B, India</em></p>
                  <p>Worked on end-to-end development of web applications using MongoDB, Express, Angular, and Node.js.</p>
                </div>

                <div className="resume-item">
                  <h4>Intern – MERN Stack Developer</h4>
                  <h5>08/2024 – 02/2025</h5>
                  <p><em>Techlive Solutions, Mohali Phase 8A, India (6 months)</em></p>
                  <p>Assisted in building full-stack web applications and collaborated with senior developers on real-world projects.</p>
                </div>

              </div>

            </div>
          </div>

        </section>

      </main>
    </div>
  );
};

export default Resume;