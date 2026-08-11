import type { Metadata } from "next";
import { ProjectShowcase, type Project } from "./ProjectShowcase";

export const metadata: Metadata = {
  title: "阿迪莱 Adila｜个人网站",
  description: "阿迪莱 Adila 的个人介绍、实习经历、项目经历与技能。",
};

const experiences = [
  {
    period: "2025.03 — 至今",
    company: "某头部互联网公司",
    role: "产品设计实习生 · 用户增长",
    intro: "负责增长场景中的核心体验设计，从问题定义、用户研究到方案落地，与产品和研发共同推进实验。",
    points: ["重构新用户激活路径，关键步骤转化率提升 18%", "建立可复用的营销组件规范，交付效率提升 30%", "独立完成 12 场用户访谈，将洞察转化为 4 项产品优化"],
    tags: ["用户研究", "交互设计", "A/B Test", "数据分析"],
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

const projects: Project[] = [
  { no: "01", title: "让校园信息不再错过", type: "独立产品设计", year: "2025", desc: "从 0 到 1 设计校园活动聚合与提醒工具，解决信息分散、报名遗忘的问题。", result: "访谈 24 人 · 可用性测试完成率 92%", context: "校园活动信息散落在公众号、群聊与海报中，学生经常在看到信息后忘记报名或错过时间。", challenge: "既要降低信息获取成本，又不能让提醒本身成为新的打扰，同时需要适配校内活动频繁变化的实际情况。", process: ["访谈 24 位学生，梳理信息发现、收藏与报名链路", "归纳三类高频使用情境，搭建活动聚合信息架构", "完成两轮原型测试，优化筛选、收藏和提醒设置", "设计核心界面与可复用组件，整理完整交付说明"], contribution: "独立负责研究计划、需求定义、交互设计、视觉设计与可用性测试，并根据反馈推动两轮方案迭代。" },
  { no: "02", title: "AI 求职陪练", type: "课程团队项目", year: "2024", desc: "面向应届生的结构化面试练习产品，提供岗位题库、实时追问与复盘建议。", result: "5 人团队 · 4 周完成 MVP", context: "应届生往往缺少低压力、高频次的模拟面试机会，也很难在练习后得到结构化反馈。", challenge: "如何让 AI 追问既贴近真实面试，又避免泛泛而谈，并将反馈转化为下一次练习中可以执行的行动。", process: ["分析 8 款求职与 AI 面试产品，确定差异化机会", "梳理岗位、题目、追问、复盘四段式核心流程", "与团队共同完成提示词测试和高保真原型", "邀请目标用户试用，依据反馈调整复盘信息层级"], contribution: "负责用户调研、核心流程与复盘模块设计，并协调团队在四周内完成可演示 MVP。" },
  { no: "03", title: "社区内容增长实验", type: "数据分析项目", year: "2024", desc: "基于行为漏斗定位创作者流失节点，并设计分层激励与回流实验。", result: "提出 3 组实验 · 预估激活提升 15%", context: "社区新创作者注册后发布意愿较低，团队需要找出流失节点并验证低成本的激活方式。", challenge: "数据只能描述用户在哪里离开，还需要结合行为与动机解释为什么离开，并让策略具有可测试性。", process: ["拆解注册到首发的行为漏斗，识别三个关键流失点", "结合内容样本与访谈信息形成创作者分层", "针对不同人群设计引导、示例与激励实验", "明确实验指标、样本需求与风险监控方案"], contribution: "负责漏斗分析、用户分层与实验方案设计，将分析结论整理为团队可执行的增长路线图。" },
];

export default function Home() {
  return (
    <main id="top">
      <header className="nav shell">
        <a className="brand" href="#top">ADILA.</a>
        <nav aria-label="主导航">
          <a href="#about">About</a><a href="#work">Experience</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
        </nav>
        <span className="status"><i /> Open to work</span>
      </header>

      <section className="hero shell">
        <div className="portrait" role="img" aria-label="阿迪莱的个人照片占位区域">
          <div className="portrait-frame">
            <div className="portrait-placeholder"><span>ADILA</span><small>请在这里放置你的照片</small></div>
          </div>
          <p>Based in China · Available in 2026</p>
        </div>
        <div className="hero-copy">
          <p className="kicker">Product · Design · Strategy</p>
          <h1><span>阿迪莱</span><span>Adila</span></h1>
          <p className="hero-intro">你好，我是阿迪莱。<br/>一个对人、体验与好问题保持好奇的产品实践者。</p>
          <a className="text-link" href="#about">继续了解我 <span>↓</span></a>
        </div>
      </section>

      <section className="about section shell" id="about">
        <div className="section-label"><span>01</span><p>About me</p></div>
        <div className="about-copy">
          <h2>我喜欢从细微之处观察，<br/>把复杂问题整理成<br/><em>清晰、自然的体验。</em></h2>
          <div className="about-notes">
            <p>目前就读于 XX 大学 XX 专业，预计 2026 年毕业。我关心用户为什么做出某个选择，也享受把洞察变成真实产品的过程。</p>
            <p>过去两年，我在互联网与消费科技团队中参与产品设计、增长实验和内容策略。比起只完成一张漂亮的界面，我更在意方案是否真正解决问题。</p>
          </div>
        </div>
      </section>

      <section className="work-nav section shell" id="work">
        <div className="section-label"><span>02</span><p>My journey</p></div>
        <div className="work-links">
          <a href="#experience"><small>01 · WORK</small><h2>实习经历</h2><p>我参与过的团队与真实业务实践</p><b>查看经历 →</b></a>
          <a href="#projects"><small>02 · PROJECTS</small><h2>项目经历</h2><p>从问题、思考到结果的完整过程</p><b>查看项目 →</b></a>
        </div>
      </section>

      <section className="detail-section shell" id="experience">
        <div className="detail-title"><span>Experience</span><h2>实习经历</h2><p>真实内容将在下一阶段替换</p></div>
        <div className="experience-list">
          {experiences.map((item, idx) => (
            <article className="exp-row" key={item.period}>
              <span className="row-no">0{idx + 1}</span>
              <div className="exp-meta"><p>{item.period}</p><h3>{item.company}</h3><span>{item.role}</span></div>
              <div className="exp-body"><p>{item.intro}</p><ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul><div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-section shell" id="projects">
        <div className="detail-title"><span>Selected projects</span><h2>项目经历</h2><p>从真实问题出发，以可验证结果收尾</p></div>
        <ProjectShowcase projects={projects} />
      </section>

      <section className="skills section shell" id="skills">
        <div className="section-label"><span>03</span><p>Skills</p></div>
        <div className="skills-copy"><h2>我的工作方式</h2><p>研究问题、设计方案、推动落地。保持好奇，也尊重每一个真实的限制。</p></div>
        <div className="skill-grid">
          <div><span>01</span><h3>产品与设计</h3><p>用户研究 · 信息架构 · 交互设计 · 原型测试 · 设计系统</p></div>
          <div><span>02</span><h3>策略与数据</h3><p>竞品分析 · 增长实验 · 数据分析 · SQL · 项目复盘</p></div>
          <div><span>03</span><h3>常用工具</h3><p>Figma · FigJam · Notion · Axure · Python · Tableau</p></div>
        </div>
      </section>

      <footer className="shell" id="contact">
        <div><p>04 · Contact</p><h2>期待与你<br/>认识。</h2></div>
        <div className="contact-links"><a href="mailto:hello@example.com">hello@example.com ↗</a><a href="#">LinkedIn ↗</a><a href="#">下载简历 ↗</a></div>
        <div className="footer-note"><p>阿迪莱 Adila</p><p>© 2026 · China</p><a href="#top">回到顶部 ↑</a></div>
      </footer>
    </main>
  );
}
