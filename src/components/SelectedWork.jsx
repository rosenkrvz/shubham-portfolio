import React from 'react';

export default function SelectedWork({ onOpenCaseStudy, onHoverCursor }) {
  return (
    <section id="selected-work" className="py-12">
      <div className="site-container">
        <div className="section-marker">
          <span className="section-label">SELECTED WORK</span>
          <span className="section-num">02 // CASE STUDIES</span>
        </div>

        <div className="projects-editorial-stack">
          {/* Project 01 */}
          <article className="project-spread" id="project-loan">
            <div className="project-spread-info">
              <div>
                <div className="project-top-meta">
                  <span className="project-category-badge">MACHINE LEARNING</span>
                  <span className="meta-code">2026</span>
                </div>
                <h3 className="project-title-large">Loan Approval Predictive Intelligence</h3>
                <p className="project-abstract">
                  Supervised risk assessment pipeline built to balance recall against false positives in applicant default prediction. Features automated skewness treatment, collinearity resolution, and Random Forest ensemble calibration.
                </p>
              </div>

              <div>
                <div className="project-stack-strip">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Scikit-Learn</span>
                  <span className="tech-tag">Pandas</span>
                  <span className="tech-tag">NumPy</span>
                  <span className="tech-tag">Random Forest</span>
                </div>
                <button
                  className="project-action-link"
                  onClick={() => onOpenCaseStudy('loan-predictor')}
                  onMouseEnter={() => onHoverCursor('READ')}
                  onMouseLeave={() => onHoverCursor('')}
                >
                  OPEN CASE STUDY <span>→</span>
                </button>
              </div>
            </div>

            <div className="project-visual-panel">
              <div className="visual-top-strip">
                <span className="meta-code">MODEL_SPEC</span>
                <span className="meta-code">CLASSIFICATION</span>
              </div>
              <div className="visual-center-concept">
                <div className="code-dossier-box">
                  <div className="text-[#d0202b] mb-2 font-mono"># Risk Boundary Calibration</div>
                  <div className="font-mono text-xs">clf = RandomForestClassifier(</div>
                  <div className="font-mono text-xs pl-5">n_estimators=150,</div>
                  <div className="font-mono text-xs pl-5">min_samples_split=4,</div>
                  <div className="font-mono text-xs pl-5">criterion='gini'</div>
                  <div className="font-mono text-xs">)</div>
                  <div className="text-[#585863] text-xs font-mono mt-2">// Optimized for recall on default records</div>
                </div>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="meta-code">TRAINED ON LOAN DATASET</span>
                <span className="meta-code">ZERO LEAKAGE PIPELINE</span>
              </div>
            </div>
          </article>

          {/* Project 02 */}
          <article className="project-spread" id="project-nirog">
            <div className="project-spread-info">
              <div>
                <div className="project-top-meta">
                  <span className="project-category-badge">FULL-STACK PLATFORM</span>
                  <span className="meta-code">2026</span>
                </div>
                <h3 className="project-title-large">Nirogshaala Botanical Health Platform</h3>
                <p className="project-abstract">
                  Comprehensive health inventory and botanical catalog platform featuring real-time batch allocation, invoicing generation, and multi-layered inventory reconciliation across consultations.
                </p>
              </div>

              <div>
                <div className="project-stack-strip">
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">Modern Web</span>
                  <span className="tech-tag">REST APIs</span>
                  <span className="tech-tag">Database Schema</span>
                </div>
                <button
                  className="project-action-link"
                  onClick={() => onOpenCaseStudy('nirogshaala')}
                  onMouseEnter={() => onHoverCursor('READ')}
                  onMouseLeave={() => onHoverCursor('')}
                >
                  OPEN CASE STUDY <span>→</span>
                </button>
              </div>
            </div>

            <div className="project-visual-panel">
              <div className="visual-top-strip">
                <span className="meta-code">ARCHITECTURE</span>
                <span className="meta-code">DISTRIBUTED</span>
              </div>
              <div className="visual-center-concept">
                <div className="code-dossier-box">
                  <div className="text-[#d0202b] mb-2 font-mono">// Atomic Inventory Reservation</div>
                  <div className="font-mono text-xs">reconcileBatchAllocation(&#123;</div>
                  <div className="font-mono text-xs pl-5">productId: entity.id,</div>
                  <div className="font-mono text-xs pl-5">quantity: req.cart.count,</div>
                  <div className="font-mono text-xs pl-5">mode: 'transactional'</div>
                  <div className="font-mono text-xs">&#125;);</div>
                </div>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="meta-code">STOCK RECONCILIATION</span>
                <span className="meta-code">ORDER PROCESSING</span>
              </div>
            </div>
          </article>

          {/* Project 03 */}
          <article className="project-spread" id="project-idle">
            <div className="project-spread-info">
              <div>
                <div className="project-top-meta">
                  <span className="project-category-badge">PYTHON SUITE</span>
                  <span className="meta-code">2025</span>
                </div>
                <h3 className="project-title-large">Numeric Computing &amp; Algorithmic Modules</h3>
                <p className="project-abstract">
                  Pure Python implementations of fundamental computer science algorithms, recursive data structures, graph traversals, and numerical computations with asymptotic complexity assertions.
                </p>
              </div>

              <div>
                <div className="project-stack-strip">
                  <span className="tech-tag">Python 3</span>
                  <span className="tech-tag">Algorithms</span>
                  <span className="tech-tag">Data Structures</span>
                  <span className="tech-tag">Unit Testing</span>
                </div>
                <button
                  className="project-action-link"
                  onClick={() => onOpenCaseStudy('idle-suite')}
                  onMouseEnter={() => onHoverCursor('READ')}
                  onMouseLeave={() => onHoverCursor('')}
                >
                  OPEN CASE STUDY <span>→</span>
                </button>
              </div>
            </div>

            <div className="project-visual-panel">
              <div className="visual-top-strip">
                <span className="meta-code">REPOSITORIES</span>
                <span className="meta-code">OPEN SOURCE</span>
              </div>
              <div className="visual-center-concept">
                <div className="code-dossier-box">
                  <div className="text-[#d0202b] mb-2 font-mono"># Asymptotic Benchmarking</div>
                  <div className="font-mono text-xs">def evaluate_complexity(fn, inputs):</div>
                  <div className="font-mono text-xs pl-5">t0 = time.perf_counter()</div>
                  <div className="font-mono text-xs pl-5">res = fn(inputs)</div>
                  <div className="font-mono text-xs pl-5">return (time.perf_counter() - t0)</div>
                </div>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="meta-code">IDLE-PROJECTS-</span>
                <span className="meta-code">GITHUB ARCHIVE</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}