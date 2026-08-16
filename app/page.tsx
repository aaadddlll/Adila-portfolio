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
    imagePosition: "center",
    intro: "负责新品发酵燕麦的种草推广与品牌升级营销，围绕消费者认知增长推进社媒传播、品类策略、Campaign 与 AI 营销探索。",
    points: [{ text: "合作 59 位达人，实现曝光 1.05 亿+、互动 105 万+，核心人群规模增长 40%", detail: "videos" }, { text: "参与桂格 × 奈雪的茶联名 Social Seeding 与发酵燕麦 14 天打卡活动，触达 1 万+ 人次", detail: "activation" }, { text: "开展燕麦竞品、产品矩阵与包装趋势研究，跟进 slogan、包装等消费者测试" }, { text: "参与 GEO 项目，优化豆包、DeepSeek 等 AI 平台内容素材与搜索场景匹配" }],
    tags: ["社媒营销", "消费者洞察", "Campaign", "AI 营销"],
  },
  {
    period: "2026.03 — 2026.06",
    company: "玛氏中国",
    role: "Marketing Intern · 皇家宠物食品 Pro 业务线",
    image: "/experience-mars.jpg",
    imagePosition: "center",
    intro: "面向 B 端繁育客户开展客户教育与赋能，同时连接繁育客户与 C 端消费者，负责内容增长、活动执行、生态运营及行业研究。",
    points: [{ text: "社媒内容增长：从 0 到 1 搭建账号近两年数据库，数据复盘输出优化意见；运营期间小红书粉丝由 6000 增至 1.3 万，平均互动率提升 30%", detail: "mars-social" }, { text: "深度参与大型活动——2026 上海它博会，推进论坛、晚宴、展位、现场活动与内容传播", detail: "mars-event" }, { text: "客户运营与赋能：通过专业课程、客户内容共创与持续服务赋能 B 端繁育客户；协助运营皇家繁育学园小程序，收集客户反馈、梳理 User Journey，推动新课程、专业书籍及功能上线与体验优化", detail: "mars-customer" }, { text: "KOL 运营：评估宠物垂类达人，2 位合作达人内容达到平台“质爆”标准", detail: "mars-kol" }],
    tags: ["内容增长", "客户运营", "项目运营", "达人投放", "市场研究"],
  },
  {
    period: "2025.06 — 2025.09",
    company: "国融乐养健康科技公司",
    role: "项目运营实习生",
    image: "/experience-guorong.jpg",
    imagePosition: "center 52%",
    intro: "面向上海社区老年群体开展需求研究与项目运营，围绕 AI 工具、短视频创作和直播学习等数字化内容，推动课程策划、用户运营、潜客培育与服务转化。",
    points: [{ text: "通过访谈、活动反馈与线上社群观察识别老年群体数字化学习需求，支持课程体系优化" }, { text: "策划并落地 AI 学习、短视频制作及直播教学等 10 余场活动，覆盖 500 余名用户，满意度达 95%；“老年剧组”项目获得长宁区奖项并获央视报道", detail: "senior-film" }, { text: "以课程活动作为潜客触达入口，通过现场互动与社群运营持续培育信任，有效推动老年用户转化并购买上门清洁、陪诊等服务", detail: "senior-conversion" }, { text: "对接讲师、场地及内部运营团队，协调排期、资源和执行需求，持续优化项目流程" }, { text: "收集满意度问卷 400+ 份，复盘参与数据、预算与执行效果，输出项目总结报告" }],
    tags: ["需求洞察", "项目运营", "客户挖掘与运营", "数据复盘"],
  },
];

const projects: Project[] = [
  { no: "01", title: "“田园小戏匠”公益项目", type: "乡村振兴 × 少儿戏剧", year: "2025.02 — 2025.06", desc: "在拾星者社会工作机构参与“田园小戏匠”项目，以戏剧体验连接乡村文化与少儿公益教育，推进项目策划、现场执行、内容传播与效果复盘。", result: "活动参与人数较往期提升 25% · 收集有效问卷 100+ 份", context: "项目面向儿童与家庭，将乡村振兴主题转化为可参与的戏剧活动，希望让孩子在角色扮演和共同创作中认识乡村文化，同时提升公益项目的参与度与传播力。", challenge: "需要兼顾少儿活动的趣味性、教育意义与现场可执行性，并通过完整的影像和公众号内容，把一次线下活动沉淀为可持续传播、可复盘优化的项目资产。", process: ["结合往期活动反馈参与方案打磨，梳理戏剧环节、人员分工与现场流程，协同团队保障项目顺利落地", "负责签到、秩序维护与现场影像记录，并独立完成活动纪录片的脚本撰写、拍摄和剪辑", "参与机构公众号运营，完成活动宣传与项目介绍类推文的撰写、排版及发布，把控内容质量与传播节奏", "活动后统计核心数据并收集 100+ 份有效满意度问卷，提炼项目亮点、用户反馈与后续优化方向"], contribution: "贯穿项目前期策划、现场执行、纪录片制作、公众号传播与效果复盘全流程，将活动体验转化为完整的内容资产与改进依据。", images: [{ src: "/stargazer/project-01.jpg", alt: "田园小戏匠活动开场现场", caption: "田间戏剧大冒险" }, { src: "/stargazer/project-02.jpg", alt: "孩子们共同阅读戏剧脚本", caption: "剧本共创" }, { src: "/stargazer/project-03.jpg", alt: "孩子制作纸板戏剧道具", caption: "道具制作" }, { src: "/stargazer/project-04.jpg", alt: "田园小戏匠成果汇演现场", caption: "成果汇演" }] },
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
          <p className="kicker">User Insight · Operations · Integrated Marketing</p>
          <h1><span>阿迪莱</span><span>Adila</span></h1>
          <p className="hero-intro">你好，我是阿迪莱，一名把社会学带进运营现场的人。<br/>我喜欢从用户反馈和数据里找线索，再把它们变成内容、活动和更顺手的用户体验。</p>
          <a className="text-link" href="#about">继续了解我 <span>↓</span></a>
        </div>
      </section>

      <section className="about section shell" id="about">
        <div className="section-label"><span>01</span><p>About me</p></div>
        <div className="about-copy">
          <h2>我喜欢观察人和市场，<br/>也喜欢和用户、客户聊一聊，<br/><em>找到真正值得做的事。</em></h2>
          <div className="about-notes">
            <p>我在华东师范大学读社会学，将于 2027 年毕业。比起只凭感觉做判断，我更习惯一边听人怎么说、一边看数据怎么走：做访谈、看社媒，也用 Excel、SPSS 和 NVivo 把零散信息理清楚。</p>
            <p>我更享受把研究变成行动：做内容、跑活动、运营客户、复盘数据，也和不同团队一起把想法落地。希望下一份工作继续靠近用户，在互联网运营或市场营销中，把“为什么”想明白，也把“怎么做”做扎实。</p>
          </div>
        </div>
      </section>

      <section className="work-nav section shell" id="work">
        <div className="section-label"><span>02</span><p>My journey</p></div>
        <div className="work-links">
          <a href="#experience"><small>01 · WORK</small><h2>实习经历</h2><p>我参与过的团队与真实业务实践</p><b>查看经历 →</b></a>
          <a href="#projects"><small>02 · PROJECTS</small><h2>项目经历</h2><p>活动策划、现场运营与内容传播实践</p><b>查看项目 →</b></a>
        </div>
      </section>

      <section className="detail-section shell" id="experience">
        <div className="detail-title"><span>Experience</span><h2>实习经历</h2><p>百事中国 · 玛氏中国 · 国融乐养</p></div>
        <ExperienceShowcase experiences={experiences} />
      </section>

      <section className="detail-section shell" id="projects">
        <div className="detail-title"><span>Selected project</span><h2>项目经历</h2><p>从活动策划、内容传播到效果复盘</p></div>
        <ProjectShowcase projects={projects} />
      </section>

      <section className="skills section shell" id="skills">
        <div className="section-label"><span>03</span><p>Skills</p></div>
        <div className="skills-copy"><h2>我的能力组合</h2><p>从消费者洞察出发，用内容和项目连接品牌、合作伙伴与真实用户。</p></div>
        <div className="skill-grid">
          <div><span>01</span><h3>消费者洞察与行业研究</h3><p>深度访谈 · 问卷调查 · 社媒观察 · 竞品研究 · 市场趋势与机会分析</p></div>
          <div><span>02</span><h3>整合营销</h3><p>Campaign 策划执行 · KOL/KOC 合作 · Social Seeding · 线上线下联动 · 投后复盘</p></div>
          <div><span>03</span><h3>用户运营</h3><p>B 端客户运营 · 用户旅程 · 客户教育与赋能 · 社群维护 · 用户反馈 · 服务转化</p></div>
          <div><span>04</span><h3>数据分析</h3><p>Excel · SPSS · NVivo · 数据清洗 · 数据透视表 · 定量与定性分析 · 可视化复盘</p></div>
          <div><span>05</span><h3>内容与文案</h3><p>公众号运营 · 活动传播 · 视频脚本 · 项目报告 · 内容策划 · 多平台文案</p></div>
          <div><span>06</span><h3>AI 工作流</h3><p>数据分析思路 · 视频创意辅助 · 标准化任务提效 · Vibe Coding · 个人网站搭建</p></div>
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
