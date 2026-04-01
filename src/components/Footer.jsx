import React from 'react'

const Footer = () => {
  return (
    <footer id="footer" className="footer light-background">
      <div className="container">

        <div className="copyright text-center">
          <p>
            <span>Copyright</span>{' '}
            © 2026
            <strong className="px-1 sitename">sahil.</strong>{' '}
            <span>All Rights Reserved.</span>
          </p>
        </div>

        <div className="social-links d-flex justify-content-center">
          <a href="https://github.com/sahil-15-12-2002" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/sahil-kumar-9a102b219" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/_sahil_kumar_35" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer