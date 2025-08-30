import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';

function AppFooter() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 400) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container fluid>
      <div className="copyright">&copy; 2025 Corporate website. All Right Reserved.</div>
      <div className="socials">
        <ul>
          <li><a href="https://github.com/Sachin-kumar987"><i className="fa-brands fa-github"></i></a></li>
         <li><a href="https://linkedin.com/in/sachin-kumar232"><i className="fab fa-linkedin-in"></i></a></li>
         <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
        </ul>
      </div>
      {
        showTopBtn && (
          <div className="go-top" onClick={goTop}></div>
        )
      }
    </Container>
  )
}

export default AppFooter;