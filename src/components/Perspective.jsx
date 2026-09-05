import React from 'react';

export default function Perspective() {
  return (
    <section id="perspective" className="py-12">
      <div className="site-container">
        <div className="section-marker">
          <span className="section-label">PERSPECTIVE</span>
          <span className="section-num">04 // EDUCATION &amp; DOCTRINE</span>
        </div>

        <div className="perspective-grid">
          <div>
            <h2 className="editorial-statement-heading">
              I am interested in the space between <span className="serif-italic">mathematical models</span>, robust software engineering, and real-world utility.
            </h2>
            <div className="perspective-body-copy">
              <p>
                My work centers on machine learning pipelines and clean software development. Rather than treating AI models as black boxes, I am dedicated to understanding the linear algebra, statistical assumptions, and algorithmic tradeoffs that dictate how systems generalize in production.
              </p>
              <p>
                Whether fine-tuning classification thresholds for credit risk evaluation or architecting transactional inventory schemas, I strive for clarity, deterministic behavior, and zero unnecessary bloat.
              </p>
            </div>
          </div>

          <div>
            <div className="timeline-block">
              <div className="timeline-node">
                <div className="timeline-year">2024 — PRESENT</div>
                <div className="timeline-degree">B.S. in Applied AI &amp; Data Science</div>
                <div className="timeline-institution">Indian Institute of Technology Jodhpur (IIT Jodhpur)</div>
                <div className="timeline-desc">
                  Core curriculum &amp; practical coursework: Statistical Foundations of AI, Linear Algebra for Machine Learning, Data Structures &amp; Algorithms, and Python Data Pipelines.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-typographic-matrix">
          <div>
            <div className="matrix-group-title">01 // LANGUAGES</div>
            <ul className="matrix-list">
              <li className="matrix-item">Python</li>
              <li className="matrix-item">C++</li>
              <li className="matrix-item">SQL</li>
              <li className="matrix-item">JavaScript (ES6+)</li>
              <li className="matrix-item">TypeScript</li>
            </ul>
          </div>
          <div>
            <div className="matrix-group-title">02 // AI &amp; DATA SCIENCE</div>
            <ul className="matrix-list">
              <li className="matrix-item">NumPy (Vectorization)</li>
              <li className="matrix-item">Pandas (Pipelines)</li>
              <li className="matrix-item">Scikit-Learn</li>
              <li className="matrix-item">Matplotlib &amp; Seaborn</li>
              <li className="matrix-item">Feature Engineering</li>
            </ul>
          </div>
          <div>
            <div className="matrix-group-title">03 // SYSTEMS &amp; TOOLING</div>
            <ul className="matrix-list">
              <li className="matrix-item">React &amp; Framer Motion</li>
              <li className="matrix-item">Tailwind CSS v4 &amp; Modern CSS</li>
              <li className="matrix-item">Vite Bundler</li>
              <li className="matrix-item">Git &amp; GitHub Versioning</li>
              <li className="matrix-item">Vercel Edge Serverless</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}