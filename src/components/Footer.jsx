import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-hero-statement">
          LET'S BUILD <br />
          <span className="serif-italic">SOMETHING USEFUL.</span>
        </div>

        <div className="footer-meta-split">
          <div className="meta-code">
            SHUBHAM SHARMA · KRVZ.DEV<br />
            ALL RIGHTS RESERVED · 2026 EDITION
          </div>

          <div className="footer-links-row">
            <a href="mailto:marksrv047@gmail.com" className="footer-nav-link">EMAIL</a>
            <a href="https://github.com/rosenkrvz" target="_blank" rel="noopener noreferrer" className="footer-nav-link">GITHUB</a>
            <a href="#intro" className="footer-nav-link">TOP ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}