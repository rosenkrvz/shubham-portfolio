import React from 'react';

export default function WorkIndex({ onOpenCaseStudy, onHoverCursor }) {
  const indexRows = [
    { id: 'loan-predictor', num: '01', name: 'Loan Risk Classification Engine', domain: 'MACHINE LEARNING', tech: 'Python · Scikit-Learn · Pandas', year: '2026' },
    { id: 'nirogshaala', num: '02', name: 'Nirogshaala Botanical Commerce Platform', domain: 'FULL-STACK SYSTEM', tech: 'TypeScript · REST APIs · Schema', year: '2026' },
    { id: 'idle-suite', num: '03', name: 'Python Numeric & Algorithmic Suite', domain: 'ALGORITHMS', tech: 'Python 3 · Complexity Analysis', year: '2025' },
    { id: 'krvz-platform', num: '04', name: 'krvz.dev Editorial Engineering Platform', domain: 'INFRASTRUCTURE', tech: 'React · Tailwind · Framer · Vercel', year: '2026' },
  ];

  return (
    <section id="work-index" className="py-12">
      <div className="site-container">
        <div className="section-marker">
          <span className="section-label">WORK ARCHIVE</span>
          <span className="section-num">03 // INDEXED REPOSITORIES</span>
        </div>

        <table className="work-index-table">
          <tbody>
            {indexRows.map((row) => (
              <tr
                key={row.id}
                className="index-row"
                onClick={() => onOpenCaseStudy(row.id)}
                onMouseEnter={() => onHoverCursor('READ')}
                onMouseLeave={() => onHoverCursor('')}
              >
                <td className="index-cell index-num">{row.num}</td>
                <td className="index-cell index-name">{row.name}</td>
                <td className="index-cell index-domain">{row.domain}</td>
                <td className="index-cell index-tech">{row.tech}</td>
                <td className="index-cell index-year">{row.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}