"use client";

import { useState } from "react";

export type Project = {
  no: string;
  title: string;
  type: string;
  year: string;
  desc: string;
  result: string;
  context: string;
  challenge: string;
  process: string[];
  contribution: string;
};

export function ProjectShowcase({ projects }: { projects: Project[] }) {
  const [selectedNo, setSelectedNo] = useState<string | null>(null);
  const selected = projects.find((project) => project.no === selectedNo);

  if (selected) {
    return (
      <div className="project-expanded" aria-live="polite">
        <button className="project-card project-card-selected" type="button" onClick={() => setSelectedNo(null)} aria-label={`收起项目 ${selected.title}`}>
          <div className="project-meta"><span>{selected.no}</span><span>{selected.type}</span><span>{selected.year}</span></div>
          <div className="project-visual" aria-hidden="true"><span>{selected.no}</span><i /></div>
          <h3>{selected.title}</h3><p>{selected.desc}</p>
          <div className="project-result"><span>{selected.result}</span><b>←</b></div>
        </button>

        <article className="project-detail">
          <div className="project-detail-head">
            <div><small>PROJECT {selected.no}</small><h3>{selected.title}</h3></div>
            <button type="button" onClick={() => setSelectedNo(null)}>返回全部项目 ×</button>
          </div>
          <div className="project-detail-grid">
            <section><span>项目背景</span><p>{selected.context}</p></section>
            <section><span>核心挑战</span><p>{selected.challenge}</p></section>
            <section className="process"><span>我的过程</span><ol>{selected.process.map((step) => <li key={step}>{step}</li>)}</ol></section>
            <section><span>个人贡献</span><p>{selected.contribution}</p></section>
            <section className="detail-outcome"><span>项目结果</span><strong>{selected.result}</strong></section>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="project-list">
      {projects.map((project) => (
        <button className="project-card" type="button" key={project.no} onClick={() => setSelectedNo(project.no)} aria-label={`展开项目 ${project.title}`}>
          <div className="project-meta"><span>{project.no}</span><span>{project.type}</span><span>{project.year}</span></div>
          <div className="project-visual" aria-hidden="true"><span>{project.no}</span><i /></div>
          <h3>{project.title}</h3><p>{project.desc}</p>
          <div className="project-result"><span>{project.result}</span><b>↗</b></div>
        </button>
      ))}
    </div>
  );
}
