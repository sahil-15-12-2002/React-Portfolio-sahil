import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh(); 
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application built with MERN stack featuring user authentication, product management, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      githubLink: "https://github.com/sahil-15-12-2002/ecommerce-platform",
      liveDemoLink: "https://ecommerce-demo.vercel.app",
      image: "/images/project1.png",
      category: "Full-Stack"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      githubLink: "https://github.com/sahil-15-12-2002/task-manager",
      liveDemoLink: "https://taskmanager-demo.netlify.app",
      image: "/images/project2.png",
      category: "Web App"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather conditions and forecasts using OpenWeatherMap API with beautiful visualizations.",
      technologies: ["React", "Chart.js", "OpenWeatherMap API", "CSS3"],
      githubLink: "https://github.com/sahil-15-12-2002/weather-dashboard",
      liveDemoLink: "https://weather-dashboard-demo.herokuapp.com",
      image: "/images/project3.png",
      category: "Frontend"
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media management with data visualization, engagement tracking, and automated reporting.",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Express"],
      githubLink: "https://github.com/sahil-15-12-2002/social-analytics",
      liveDemoLink: "https://social-analytics-demo.com",
      image: "/images/project4.png",
      category: "Full-Stack"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects, skills, and experience with smooth animations and interactive elements.",
      technologies: ["React", "Vite", "AOS", "Bootstrap", "CSS3"],
      githubLink: "https://github.com/sahil-15-12-2002/portfolio",
      liveDemoLink: "https://sahil-portfolio.vercel.app",
      image: "/images/project5.png",
      category: "Frontend"
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Real-time chat application with private messaging, group chats, file sharing, and emoji support built with modern web technologies.",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com/sahil-15-12-2002/chat-app",
      liveDemoLink: "https://chat-app-demo.herokuapp.com",
      image: "/images/project6.png",
      category: "Full-Stack"
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Full-Stack':
        return 'bi bi-stack';
      case 'Frontend':
        return 'bi bi-window';
      case 'Web App':
        return 'bi bi-globe';
      default:
        return 'bi bi-code-slash';
    }
  };

  return (
    <main className="main">
      <section id="projects" className="projects section mt-4">
        <div className="container section-title" data-aos="fade-up">
          <h2>My Projects</h2>
          <p>
            Here are some of the projects I’ve delivered for clients, showcasing my ability to turn ideas into high-quality, real-world solutions
          </p>
        </div>

        <div className="container">
          <div className="row gy-4">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
              >
                <div className="project-card">
                  <div className="project-header">
                    <div className="project-category">
                      <i className={`${getCategoryIcon(project.category)} category-icon`}></i>
                      <span>{project.category}</span>
                    </div>
                    <div className="project-links">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-icon"
                        title="View on GitHub"
                      >
                        <i className="bi bi-github"></i>
                      </a>
                      <a
                        href={project.liveDemoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-icon"
                        title="Live Demo"
                      >
                        <i className="bi bi-box-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>

                  <div className="project-image-container">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                      onError={(e) => {
                        e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlByb2plY3QgSW1hZ2U8L3RleHQ+PC9zdmc+";
                      }}
                    />
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <div className="project-tech-stack">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="tech-tag more-tech">+{project.technologies.length - 4}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;