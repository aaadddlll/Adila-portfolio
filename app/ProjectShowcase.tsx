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
  const project = projects[0];
  if (!project) return null;
  return <article className="project-static-row"><span className="row-no">{project.no}</span><div className="exp-meta"><p>{project.year}</p><h3>{project.title}</h3><span>{project.type}</span></div><div className="exp-body"><p>{project.desc}</p><ul><li><strong>项目背景</strong>{project.context}</li><li><strong>核心挑战</strong>{project.challenge}</li>{project.process.map(step=><li key={step}>{step}</li>)}<li><strong>个人贡献</strong>{project.contribution}</li></ul><div className="project-static-result"><span>项目结果</span><b>{project.result}</b></div></div></article>;
}
