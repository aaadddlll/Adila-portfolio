import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "林知夏｜产品设计与策略",
  description: "林知夏的个人作品与经历：产品设计、用户研究与增长策略。",
};

const experiences = [
  {
    period: "2025.03 — NOW",
    company: "某头部互联网公司",
    role: "产品设计实习生 · 用户增长",
    intro: "负责增长场景中的核心体验设计，从问题定义、用户研究到方案落地，与产品和研发共同推进实验。",
    points: ["重构新用户激活路径，关键步骤转化率提升 18%", "建立可复用的营销组件规范，交付效率提升 30%", "独立完成 12 场用户访谈，将洞察转化为 4 项产品优化"],
    tags: ["用户研究", "交互设计", "A/B TEST", "数据分析"],
  },
  {
    period: "2024.07 — 2024.12",
    company: "创新消费科技公司",
    role: "产品运营实习生 · 内容与社区",
    intro: "围绕年轻用户的内容消费与创作链路，参与社区策略、活动策划和产品需求梳理。",
    points: ["策划 3 期主题活动，累计覆盖 20W+ 用户", "搭建内容质量评估框架，优质内容占比提升 11%", "跟进 2 个版本迭代，从需求文档到上线复盘全程参与"],
    tags: ["策略分析", "内容运营", "项目管理", "SQL"],
  },
];

const projects = [
  { no: "01", title: "让校园信息不再错过", type: "独立产品设计", year: "2025", desc: "从 0 到 1 设计校园活动聚合与提醒工具，解决信息分散、报名遗忘的问题。", result: "访谈 24 人 · 可用性测试完成率 92%", color: "lime" },
  { no: "02", title: "AI 求职陪练", type: "课程团队项目", year: "2024", desc: "面向应届生的结构化面试练习产品，提供岗位题库、实时追问与复盘建议。", result: "5 人团队 · 4 周完成 MVP", color: "blue" },
  { no: "03", title: "社区内容增长实验", type: "数据分析项目", year: "2024", desc: "基于行为漏斗定位创作者流失节点，并设计分层激励与回流实验。", result: "提出 3 组实验 · 预估激活提升 15%", color: "coral" },
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="返回首页">LZX<sup>®</sup></a>
        <nav aria-label="主导航">
          <a href="#about">关于</a><a href="#experience">经历</a><a href="#projects">项目</a><a href="#contact">联系</a>
        </nav>
        <a className="availability" href="mailto:hello@example.com"><i /> 期待 2026 秋招机会</a>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span>PRODUCT · DESIGN · STRATEGY</span><span>SHANGHAI / CHINA</span></div>
        <h1>林知夏<br/><em>MAKES IDEAS</em><br/>WORK.</h1>
        <div className="hero-bottom">
          <p>你好，我是一名相信好产品始于理解、成于细节的<br/>产品设计与策略实践者。</p>
          <a className="round-link" href="#about" aria-label="向下查看个人介绍">↓</a>
        </div>
      </section>

      <section className="about" id="about">
        <p className="section-no">01 / ABOUT</p>
        <div className="about-copy">
          <h2>我喜欢把复杂问题<br/>变成<span>清晰、自然</span>的体验。</h2>
          <div className="about-grid">
            <p>目前就读于 XX 大学 XX 专业，预计 2026 年毕业。我关心用户为什么做出某个选择，也享受把洞察变成真实产品的过程。</p>
            <p>过去两年，我在互联网与消费科技团队中参与产品设计、增长实验和内容策略。比起只完成一张漂亮的界面，我更在意方案是否真正解决问题。</p>
          </div>
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="section-head"><p className="section-no">02 / EXPERIENCE</p><h2>实习经历</h2></div>
        {experiences.map((item, idx) => (
          <article className="exp-row" key={item.period}>
            <div className="exp-index">0{idx + 1}</div>
            <div className="exp-meta"><span>{item.period}</span><h3>{item.company}</h3><p>{item.role}</p></div>
            <div className="exp-body"><p className="exp-intro">{item.intro}</p><ul>{item.points.map(p => <li key={p}>{p}</li>)}</ul><div className="tags">{item.tags.map(t => <span key={t}>{t}</span>)}</div></div>
          </article>
        ))}
      </section>

      <section className="projects" id="projects">
        <div className="section-head light"><p className="section-no">03 / SELECTED WORK</p><h2>项目经历</h2><p>精选三个项目。每一个都从真实问题出发，以可验证的结果收尾。</p></div>
        <div className="project-list">
          {projects.map(project => (
            <article className={`project-card ${project.color}`} key={project.no}>
              <div className="card-top"><span>{project.no}</span><span>{project.type}</span><span>{project.year}</span></div>
              <div className="card-art" aria-hidden="true"><b>{project.no}</b><i /><i /></div>
              <h3>{project.title}</h3><p>{project.desc}</p><div className="card-result">{project.result}<span>↗</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills" id="skills">
        <p className="section-no">04 / TOOLKIT</p>
        <h2>研究问题，<br/>设计方案，<br/>推动落地。</h2>
        <div className="skill-grid">
          <div><span>01</span><h3>产品与设计</h3><p>用户研究 · 信息架构 · 交互设计 · 原型测试 · 设计系统</p></div>
          <div><span>02</span><h3>策略与数据</h3><p>竞品分析 · 增长实验 · 数据分析 · SQL · 项目复盘</p></div>
          <div><span>03</span><h3>工具</h3><p>Figma · FigJam · Notion · Axure · Python · Tableau</p></div>
        </div>
      </section>

      <footer id="contact">
        <p className="section-no">05 / CONTACT</p>
        <h2>一起做点<br/><em>有意义</em>的事。</h2>
        <div className="footer-bottom">
          <a href="mailto:hello@example.com">HELLO@EXAMPLE.COM ↗</a>
          <div><a href="#">小红书 ↗</a><a href="#">LinkedIn ↗</a><a href="#">下载简历 ↗</a></div>
          <p>© 2026 林知夏<br/>目前常驻上海</p>
        </div>
      </footer>
    </main>
  );
}
