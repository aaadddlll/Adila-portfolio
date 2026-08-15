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
  images?: { src: string; alt: string; caption: string }[];
};

export function ProjectShowcase({ projects }: { projects: Project[] }) {
  const project = projects[0];
  if (!project) return null;
  return <article className="project-static-row"><span className="row-no">{project.no}</span><div className="exp-meta"><p>{project.year}</p><h3>{project.title}</h3><span>{project.type}</span>{project.images && <div className="project-photo-wrap"><div className="project-photo-hint"><span>活动现场记录</span><b>移入展开 · 4 张</b></div><div className="project-photo-stack" tabIndex={0} aria-label="田园小戏匠活动现场照片，移入或聚焦展开">{project.images.map((image, index)=><figure key={image.src}><img src={image.src} alt={image.alt}/><figcaption><span>0{index + 1}</span>{image.caption}</figcaption></figure>)}</div></div>}</div><div className="exp-body"><p>{project.desc}</p><ul><li><strong>项目背景</strong>{project.context}</li><li><strong>核心挑战</strong>{project.challenge}</li>{project.process.map(step=><li key={step}>{step}</li>)}<li><strong>个人贡献</strong>{project.contribution}</li></ul><div className="project-static-result"><span>项目结果</span><b>{project.result}</b></div></div></article>;
}
