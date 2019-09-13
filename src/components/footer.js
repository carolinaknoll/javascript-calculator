import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="social-list">
        <li className="social-small-box"><a href="mailto:carolinasknoll@gmail.com"><i className="social-icon fa fa-envelope-o"></i></a></li>
        <li className="social-small-box"><a href="https://www.linkedin.com/in/carolinaknoll"><i className="social-icon fa fa-linkedin"></i></a></li>
        <li className="social-small-box"><a href="https://github.com/carolinaknoll"><i className="social-icon fa fa-github"></i></a></li>
        <li className="social-small-box"><a href="https://twitter.com/carolina_knoll"><i className="social-icon fa fa-twitter"></i></a></li>
        <li className="social-small-box"><a href="http://codepen.io/carolinaknoll/"><i className="social-icon fa fa-codepen"></i></a></li>
        <li className="social-small-box"><a href="http://www.freecodecamp.com/carolinaknoll"><i className="social-icon fa fa-free-code-camp"></i></a></li>
      </ul>

      <p className="bottom-note">Handcrafted with <i className="fa fa-heart"></i> and <i className="fa fa-coffee"></i> by Carolina Knoll.</p>
    </footer>
  );
}
