import type { Metadata } from "next";
import { ProjectShowcase, type Project } from "./ProjectShowcase";
import { ExperienceShowcase, type Experience } from "./ExperienceShowcase";

export const metadata: Metadata = {
  title: "阿迪莱 Adila｜个人网站",
  description: "阿迪莱 Adila 的个人介绍、实习经历、项目经历与技能。",
};

const experiences: Experience[] = [
  {
    period: "2026.06 — 至今",
    company: "百事中国",
    role: "Marketing Intern · 桂格燕麦 VA 线",
    image: "/experience-pepsico.jpg",
    intro: "负责新品发酵燕麦的种草推广与品牌升级营销，围绕消费者认知增长推进社媒传播、品类策略、Campaign 与 AI 营销探索。",
    points: [{ text: "合作 59 位达人，实现曝光 1.05 亿+、互动 105 万+，核心人群规模增长 40%", detail: "videos" }, { text: "参与桂格 × 奈雪的茶联名 Social Seeding 与发酵燕麦 14 天打卡活动，触达 1 万+ 人次", detail: "activation" }, { text: "开展燕麦竞品、产品矩阵与包装趋势研究，跟进 slogan、包装等消费者测试" }, { text: "参与 GEO 项目，优化豆包、DeepSeek 等 AI 平台内容素材与搜索场景匹配" }],
    tags: ["社媒营销", "消费者洞察", "Campaign", "AI 营销"],
  },
  {
    period: "2026.03 — 2026.06",
    company: "玛氏中国",
    role: "Marketing Intern · 皇家宠物食品 Pro 业务线",
    image: "/experience-mars.jpg",
    intro: "面向 B 端繁育客户开展客户教育与赋能，同时连接繁育客户与 C 端消费者，负责内容增长、活动执行、生态运营及行业研究。",
    points: [{ text: "社媒内容增长：从 0 到 1 搭建账号近两年数据库，数据复盘输出优化意见；运营期间小红书粉丝由 6000 增至 1.3 万，平均互动率提升 30%", detail: "mars-social" }, { text: "深度参与大型活动——2026 上海它博会，推进论坛、晚宴、展位、现场活动与内容传播", detail: "mars-event" }, { text: "客户运营与赋能：通过专业课程与内容共创服务繁育客户", detail: "mars-customer" }, { text: "KOL 运营：评估宠物垂类达人，2 位合作达人内容达到平台“质爆”标准", detail: "mars-kol" }],
    tags: ["内容增长", "客户运营", "项目运营", "达人投放", "市场研究"],
  },
  {
    period: "2025.06 — 2025.09",
    company: "国融乐养健康科技公司",
    role: "项目运营实习生",
    image: "/experience-guorong.jpg",
    intro: "面向上海社区老年群体开展需求研究与项目运营，围绕 AI 工具、短视频创作和直播学习等数字化内容，推动课程策划、用户运营、潜客培育与服务转化。",
    points: [{ text: "通过访谈、活动反馈与线上社群观察识别老年群体数字化学习需求，支持课程体系优化" }, { text: "策划并落地 AI 学习、短视频制作及直播教学等 10 余场活动，覆盖 500 余名用户，满意度达 95%；“老年剧组”项目获得长宁区奖项并获央视报道", detail: "senior-film" }, { text: "以课程活动作为潜客触达入口，通过现场互动与社群运营持续培育信任，有效推动老年用户转化并购买上门清洁、陪诊等服务", detail: "senior-conversion" }, { text: "对接讲师、场地及内部运营团队，协调排期、资源和执行需求，持续优化项目流程" }, { text: "收集满意度问卷 400+ 份，复盘参与数据、预算与执行效果，输出项目总结报告" }],
    tags: ["需求洞察", "项目运营", "客户挖掘与运营", "数据复盘"],
  },
];

const projects: Project[] = [
  { no: "01", title: "桂格发酵燕麦整合营销", type: "新品种草与品牌升级", year: "2026", desc: "围绕新品发酵燕麦，推进达人种草、消费者洞察、联名传播及 AI 内容探索。", result: "曝光 1.05 亿+ · 互动 105 万+", context: "桂格燕麦 VA 线推出发酵燕麦新品，需要提升消费者对新品的认知，同时为品牌升级寻找更清晰的价值表达。", challenge: "针对不同目标消费者提炼准确且有吸引力的产品卖点，并在社媒内容、线下体验与生成式 AI 搜索场景中保持一致的品牌表达。", process: ["围绕目标消费者制定达人 Brief，明确卖点、消费场景与内容方向", "审核并优化达人稿件，结合 CPM、CPE、看后搜等指标复盘表现", "基于社媒评论、用户反馈与竞品研究提炼消费者沟通机会", "参与联名 Social Seeding、14 天打卡活动与 GEO 内容审核"], contribution: "负责达人内容审核优化、传播效果复盘与消费者洞察支持，并参与品牌升级测试及 Campaign 执行。" },
  { no: "02", title: "皇家社媒内容增长", type: "内容运营与数据分析", year: "2026", desc: "从 0 到 1 搭建内容数据库，用数据识别受众偏差并优化小红书、抖音传播策略。", result: "小红书 6000→1.3 万 · 互动率 +200%", context: "皇家宠物食品 Pro 业务线希望通过抖音、小红书连接年轻养宠女性，并提升内容的消费者咨询与购买转化能力。", challenge: "历史内容缺乏系统沉淀，账号用户画像与目标人群存在偏差，需要先建立分析基础，再找到可以持续复制的内容规律。", process: ["搭建近两年内容表现数据库，整理播放、互动、评论与内容特征", "拆解历史表现，识别用户画像偏差与高表现内容规律", "围绕年轻养宠女性调整选题、视频形式与传播策略", "持续观察评论区咨询与购买意向，迭代内容方向"], contribution: "独立搭建内容数据库并完成分析，参与选题与传播策略优化，推动两个平台的粉丝与互动增长。" },
  { no: "03", title: "上海它博会 Campaign", type: "线下活动与用户转化", year: "2026", desc: "围绕品牌曝光、合作伙伴展示和 C 端触达，参与大型宠物展 Campaign 的策划与落地。", result: "注册用户 1000+ · 新增粉丝 4000+", context: "皇家宠物食品希望借助上海它博会连接繁育客户与 C 端消费者，并将线下流量沉淀为可持续运营的用户资产。", challenge: "现场参与方多、触点复杂，需要同时兼顾品牌展示、合作伙伴体验与用户转化，并协调销售、客户、主办方和供应商。", process: ["参与传播内容、活动物料与现场运营方案准备", "设计试吃包体验、Portal 注册与账号关注等转化路径", "协同销售、客户、主办方及供应商推进项目落地", "结合活动反馈优化繁育课程，并支持专业论坛举办"], contribution: "负责传播内容、物料及现场运营支持，参与用户转化路径设计与跨团队协作，并支持论坛与客户赋能环节。" },
];

export default function Home() {
  return (
    <main id="top">
      <header className="nav shell">
        <a className="brand" href="#top">ADILA.</a>
        <nav aria-label="主导航">
          <a href="#about">About</a><a href="#work">Experience</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
        </nav>
        <span className="status"><i /> 2027 届 · Open to work</span>
      </header>

      <section className="hero shell">
        <div className="portrait">
          <div className="portrait-frame">
            <img src="/adila-portrait.jpg" alt="阿迪莱在秋日树林中的个人照片" />
          </div>
          <p>East China Normal University · Class of 2027</p>
        </div>
        <div className="hero-copy">
          <p className="kicker">Consumer Insight · Brand Marketing · Strategy</p>
          <h1><span>阿迪莱</span><span>Adila</span></h1>
          <p className="hero-intro">你好，我是阿迪莱。<br/>华东师范大学社会学本科生，关注消费者洞察、品牌传播与整合营销。</p>
          <a className="text-link" href="#about">继续了解我 <span>↓</span></a>
        </div>
      </section>

      <section className="about section shell" id="about">
        <div className="section-label"><span>01</span><p>About me</p></div>
        <div className="about-copy">
          <h2>我喜欢观察人和市场，<br/>把真实需求转化成<br/><em>清晰、有共鸣的沟通。</em></h2>
          <div className="about-notes">
            <p>目前就读于华东师范大学社会学专业，预计 2027 年毕业。GPA 位于专业前 10%，持英语六级证书，并多次获得校级奖学金。</p>
            <p>曾在百事中国、玛氏中国和国融乐养实习，实践覆盖消费者研究、社媒内容、品牌 Campaign、用户运营与跨部门项目推进。</p>
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
        <div className="detail-title"><span>Experience</span><h2>实习经历</h2><p>百事中国 · 玛氏中国 · 国融乐养</p></div>
        <ExperienceShowcase experiences={experiences} />
      </section>

      <section className="detail-section shell" id="projects">
        <div className="detail-title"><span>Selected projects</span><h2>项目经历</h2><p>从真实问题出发，以可验证结果收尾</p></div>
        <ProjectShowcase projects={projects} />
      </section>

      <section className="skills section shell" id="skills">
        <div className="section-label"><span>03</span><p>Skills</p></div>
        <div className="skills-copy"><h2>我的能力组合</h2><p>从消费者洞察出发，用内容和项目连接品牌、合作伙伴与真实用户。</p></div>
        <div className="skill-grid">
          <div><span>01</span><h3>消费者洞察</h3><p>深度访谈 · 问卷调查 · 社媒观察 · 竞品研究 · 市场机会分析</p></div>
          <div><span>02</span><h3>品牌与营销</h3><p>内容策划 · KOL/KOC 合作 · Campaign 执行 · 小红书 · 抖音</p></div>
          <div><span>03</span><h3>分析与协作</h3><p>NVivo · SPSS · Excel · 数据复盘 · 项目管理 · 跨部门协作</p></div>
          <div><span>04</span><h3>AI 工作流</h3><p>数据分析思路 · 视频创意辅助 · 标准化任务提效 · Vibe Coding · 个人网站搭建</p></div>
        </div>
      </section>

      <footer className="shell" id="contact">
        <div><p>04 · Contact</p><h2>期待与你<br/>认识。</h2></div>
        <div className="contact-links"><a href="mailto:13565459253@163.com">13565459253@163.com ↗</a><a href="tel:13565459253">135 6545 9253 ↗</a><a href="/adila-resume.pdf" download>下载简历 ↗</a></div>
        <div className="footer-note"><p>阿迪莱 Adila</p><p>华东师范大学 · 2027 届</p><a href="#top">回到顶部 ↑</a></div>
      </footer>
    </main>
  );
}
