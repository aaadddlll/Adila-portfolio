"use client";

import { useEffect, useRef, useState } from "react";

export type Experience = {
  period: string;
  company: string;
  role: string;
  intro: string;
  image: string;
  imagePosition?: string;
  imageTransform?: string;
  points: { text: string; detail?: "videos" | "activation" | "mars-social" | "mars-event" | "mars-customer" | "mars-kol" | "senior-film" | "senior-conversion" }[];
  tags: string[];
};

const creatorCases = [
  { image: "/pepsi/douyin-01.png", href: "https://v.douyin.com/hn49QEzu_iI/", metric: "看后搜 7 万+", note: "以一线城市女性生活方式切入，把产品自然放进真实日常；看后搜成本仅 1.64。", mask: "mask-douyin" },
  { image: "/pepsi/douyin-02.png", href: "https://v.douyin.com/FudKLVkeTJM/", metric: "高曝光 · 高互动", note: "内容有效触达“精致妈妈”核心人群，看后搜成本仅 2.03。", mask: "mask-douyin" },
  { image: "/pepsi/douyin-03-new.png", href: "https://v.douyin.com/8J2g673w8SY/", metric: "2.4 万赞", note: "以短平快的全视频广告测试快速验证投放效果，抓住“杯子 + 隔夜燕麦杯”的视觉兴趣点，高效完成产品种草。", mask: "mask-douyin", objectPosition: "center 78%" },
];

const collaborationCases = [
  { image: "/pepsi/naisnow-01.jpg", href: "http://xhslink.cn/o/XRuasMBfFv", metric: "桂格 × 奈雪的茶", note: "以酸奶轻代餐杯建立联名认知，让发酵燕麦进入更年轻、更轻盈的饮用场景。", mask: "" },
  { image: "/pepsi/naisnow-02.jpg", href: "http://xhslink.cn/o/52nxkxitFfY", metric: "互动 7000+", note: "联动营养师从专业视角讲解发酵与轻代餐价值，兼顾可信度与种草效率。", mask: "mask-xhs-bottom" },
  { image: "/pepsi/naisnow-03.jpg", href: "http://xhslink.cn/o/9B8zNxale3U", metric: "互动 1000+", note: "借助奶茶测评创作者的内容语言，将产品自然融入饮品教程与体验分享。", mask: "mask-xhs-top" },
];

function MediaCard({ item, platform }: { item: (typeof creatorCases)[number]; platform: string }) {
  return (
    <a className="case-card" href={item.href} target="_blank" rel="noreferrer" aria-label={`${platform}：${item.metric}，点击查看原内容`}>
      <div className="case-image">
        <img src={item.image} alt="已隐藏创作者昵称的内容表现截图" style={{ objectPosition: item.objectPosition ?? "center 18%" }} />
        {item.mask && <i className={item.mask} aria-hidden="true" />}
        <span>查看原内容 ↗</span>
      </div>
      <small>{platform}</small><h5>{item.metric}</h5>{item.note && <p>{item.note}</p>}
    </a>
  );
}

const marsSocial = [
  { image: "/mars/social-01.png", href: "https://www.xiaohongshu.com/discovery/item/6a6d8d8c0000000028031888", metric: "互动率 40%", note: "以“中国金毛走向国际赛场”的故事引发高质量讨论，精准触达年轻养宠人群。", mask: "mask-xhs-bottom" },
  { image: "/mars/social-02.jpg", href: "https://v.douyin.com/r_Vu-M2I324/", metric: "播放 7 万+", note: "用“狗界体育生学霸”的内容钩子讲专业繁育，带动多名消费者私信咨询。", mask: "mask-douyin" },
];
const marsKol = [
  { image: "/mars/kol-01.png", href: "https://v.douyin.com/8BUC-Rg9tlw/", metric: "质爆案例 01", note: "", mask: "mask-douyin" },
  { image: "/mars/kol-02.png", href: "https://v.douyin.com/ar4NuU8fcRY/", metric: "质爆案例 02", note: "", mask: "mask-douyin" },
];

function MarsCase({ view, onClose }: { view: "mars-social" | "mars-event" | "mars-customer" | "mars-kol"; onClose: () => void }) {
  const [eventSection, setEventSection] = useState<"forum" | "dinner" | "booth" | "social">("forum");
  const headings = { "mars-social": ["SOCIAL GROWTH", "社媒内容增长"], "mars-event": ["2026 TOPS", "上海它博会 Campaign"], "mars-customer": ["CUSTOMER SUCCESS", "客户运营与赋能"], "mars-kol": ["KOL SEEDING", "达人“质爆”案例"] } as const;
  const [eyebrow, title] = headings[view];
  return <article className="pepsi-case mars-case" aria-live="polite">
    <header className="case-head"><div><small>MARS · ROYAL CANIN · {eyebrow}</small><h3>{title}</h3></div><button type="button" onClick={onClose}>返回实习经历 ×</button></header>
    {view === "mars-social" && <><div className="case-summary mars-summary"><p>从 0 到 1 搭建账号近两年内容数据库，用播放、互动、受众与选题表现持续复盘内容方向。</p><dl><div><dt>+7000</dt><dd>小红书涨粉</dd></div><div><dt>+3000</dt><dd>抖音涨粉</dd></div><div><dt>+30%</dt><dd>平均互动率</dd></div></dl></div><section className="case-block"><div className="case-grid case-grid-two">{marsSocial.map(item => <MediaCard key={item.href} item={item} platform={item.image.endsWith("jpg") ? "抖音" : "小红书"}/>)}</div></section></>}
    {view === "mars-kol" && <><div className="case-summary mars-summary"><p>A3 指对品牌产生兴趣并主动搜索、浏览或互动的种草人群。“质爆”代表内容发布三天后，抖音种草 A3 新增率进入行业前 50%，体现内容带来的高质量用户兴趣。</p><dl><div><dt>2</dt><dd>质爆内容</dd></div><div><dt>TOP 50%</dt><dd>种草 A3 新增率</dd></div></dl></div><section className="case-block compact-media-section"><div className="case-grid case-grid-two">{marsKol.map(item => <MediaCard key={item.href} item={item} platform="抖音"/>)}</div></section></>}
    {view === "mars-event" && <>
      <nav className="event-tabs" aria-label="它博会案例板块">{[["forum","高峰论坛","150+ 到场"],["dinner","客户晚宴","关系运营"],["booth","皇家展位","成交 130 万+"],["social","内容传播","四天涨粉 4000+"]].map(([id,label,result],idx)=><button type="button" key={id} className={eventSection===id?"active":""} onClick={()=>setEventSection(id as typeof eventSection)}><small>0{idx+1}</small><strong>{label}</strong><span>{result}</span><b>查看详情 ↗</b></button>)}</nav>
      <div className="event-detail" key={eventSection}>
        {eventSection === "forum" && <section><div className="case-block-title"><span>01</span><div><small>B2B EDUCATION</small><h4>它博会高峰论坛</h4><p>邀请专业兽医与讲师面向繁育客户分享行业知识，到场 150+ 名繁育人，论坛满意度达 98%。</p></div></div><div className="photo-stack"><img src="/mars/forum-01.jpg" alt="皇家繁育高峰论坛现场"/><img src="/mars/forum-02.jpg" alt="皇家繁育高峰论坛资料"/></div></section>}
        {eventSection === "dinner" && <section><div className="case-block-title"><span>02</span><div><small>RELATIONSHIP BUILDING</small><h4>客户晚宴</h4><p>以颁奖、抽奖与乐队表演承接论坛内容，在更轻松的场景中加深客户连接与行业伙伴关系。</p></div></div><div className="photo-stack"><img src="/mars/dinner-01.jpg" alt="皇家繁育客户晚宴"/><img src="/mars/dinner-02.jpg" alt="客户晚宴互动环节"/></div></section>}
        {eventSection === "booth" && <section><div className="case-block-title"><span>03</span><div><small>EXHIBITION</small><h4>皇家展位与活体区</h4><p>协同销售、繁育客户、主办方与供应商推进现场落地；活体区 53 家商家中 50 家成交，成交率约 94%，成交犬猫 121 只、金额 130 万+。</p></div></div><div className="event-photo-grid">{[1,2,3,4,5].map(n=><img key={n} src={`/mars/booth-0${n}.jpg`} alt="皇家它博会展位现场"/>)}</div><dl className="event-metrics"><div><dt>94%</dt><dd>入驻商家成交率</dd></div><div><dt>121</dt><dd>成交犬猫数量</dd></div><div><dt>130 万+</dt><dd>成交金额</dd></div><div><dt>4000+</dt><dd>线上直播观看</dd></div></dl></section>}
        {eventSection === "social" && <section><div className="case-block-title"><span>04</span><div><small>SOCIAL ACTIVATION</small><h4>粉丝互动与视频测试</h4><p>展前赠票连接 20 名粉丝；展中以消费者兴趣设计互动小游戏，推动账号在四天内快速涨粉 4000+。</p></div></div><div className="case-grid case-grid-two"><MediaCard item={{image:"/mars/event-post.jpg",href:"http://xhslink.cn/o/1VsHKDxiOYv",metric:"20 张赠票",note:"从线上福利到线下见面，让粉丝真实参与品牌活动并出镜账号内容。",mask:"mask-xhs-top"}} platform="小红书"/><MediaCard item={{image:"/mars/event-video.jpg",href:"http://xhslink.cn/o/2gxWPmsF4yR",metric:"同期最高互动",note:"基于内容数据库与热门趋势设计 C 端互动测试，验证账号面向消费者的内容潜力。",mask:"mask-xhs-top"}} platform="小红书"/></div></section>}
      </div>
    </>}
    {view === "mars-customer" && <>
      <section className="case-block"><div className="case-block-title"><span>01</span><div><small>PROFESSIONAL EDUCATION</small><h4>皇家繁育学园</h4><p>通过专业课程、书籍、公开课与直播课持续赋能 B 端繁育客户；负责对接讲师、审核并发布课程，以及用问卷沉淀反馈。</p></div></div><div className="academy-gallery"><figure><img src="/mars/academy.jpg" alt="皇家繁育学园小程序首页"/><figcaption>平台首页</figcaption></figure><figure><img src="/mars/academy-courses.jpg" alt="皇家繁育学园课程专区"/><figcaption>课程专区 · 新媒体赋能</figcaption></figure><figure><img src="/mars/academy-library.jpg" alt="皇家繁育学园专业书籍专区"/><figcaption>专业书籍 · 繁育知识库</figcaption></figure></div><div className="academy-intro"><strong>持续的客户教育平台</strong><p>除线上课程外，也组织繁育人自媒体、直播等实操课程，帮助客户提升经营和内容能力。</p></div></section>
      <section className="case-block"><div className="case-block-title"><span>02</span><div><small>CO-CREATION</small><h4>繁育客户内容共创</h4><p>为繁育舍提供脚本、拍摄、剪辑与投流支持；共创内容及其后续引流视频的平均播放与互动表现较未合作内容提升 200%–400%。</p></div></div><div className="case-grid case-grid-two compact-media-section"><MediaCard item={{image:"/mars/customer-01.png",href:"https://v.douyin.com/W-nQkPU7z-0/",metric:"客户共创案例 01",note:"",mask:"mask-douyin"}} platform="抖音"/><MediaCard item={{image:"/mars/customer-02.png",href:"https://v.douyin.com/rMOCv6FukvY/",metric:"客户共创案例 02",note:"",mask:"mask-douyin"}} platform="抖音"/></div></section>
    </>}
    <div className="case-bottom-return"><button type="button" onClick={onClose}>返回 ↑</button></div>
  </article>;
}

function PepsiCase({ view, onClose }: { view: "videos" | "activation"; onClose: () => void }) {
  return (
    <article className="pepsi-case" aria-live="polite">
      {view === "videos" ? <><header className="case-head">
        <div><small>PEPSICO · QUAKER</small><h3>桂格发酵燕麦<br/>Social Seeding</h3></div>
        <button type="button" onClick={onClose}>返回实习经历 ×</button>
      </header>
      <div className="case-summary">
        <p>围绕发酵燕麦新品的消费者认知增长，我参与达人筛选、Brief 制定、内容审核与投后复盘，并协同推进联名传播及用户体验活动。</p>
        <dl><div><dt>59</dt><dd>合作达人</dd></div><div><dt>1.05 亿+</dt><dd>累计曝光</dd></div><div><dt>105 万+</dt><dd>累计互动</dd></div><div><dt>+40%</dt><dd>核心人群增长</dd></div></dl>
      </div></> : <div className="case-close-row"><span>PEPSICO · QUAKER</span><button type="button" onClick={onClose}>返回实习经历 ×</button></div>}

      {view === "videos" && <section className="case-block"><div className="case-block-title"><span>01</span><div><small>CREATOR SEEDING</small><h4>爆款视频</h4><p>从内容表现、互动质量及看后搜效率复盘投放，筛选具有代表性的高表现内容。</p></div></div><div className="case-grid">{creatorCases.map((item) => <MediaCard key={item.href} item={item} platform="抖音" />)}</div></section>}
      {view === "activation" && <><section className="case-block"><div className="case-block-title"><span>01</span><div><small>CO-BRANDING</small><h4>桂格 × 奈雪联名</h4></div></div><div className="case-grid">{collaborationCases.map((item) => <MediaCard key={item.href} item={item} platform="小红书" />)}</div></section>
      <section className="case-block checkin-block"><div className="case-block-title"><span>02</span><div><small>CONSUMER ACTIVATION</small><h4>14 天打卡活动</h4><p>围绕“连续体验 14 天”的产品沟通，让消费者扫码打卡并形成真实使用习惯；完成挑战可获一盒产品，幸运用户可获 52 盒年度装。</p></div></div><div className="checkin-layout"><div className="checkin-images"><img src="/pepsi/checkin-01.png" alt="桂格发酵燕麦14天打卡小程序首页"/><img src="/pepsi/checkin-02.png" alt="桂格发酵燕麦14天打卡活动页面"/></div><div className="checkin-results"><div><strong>1 万+</strong><span>活动触达人次</span></div><div><strong>23.3%</strong><span>活动复购率</span></div><small>高于行业常见的 5%–15% 区间</small></div></div></section></>}
      <div className="case-bottom-return"><button type="button" onClick={onClose}>返回 ↑</button></div>
    </article>
  );
}

function SeniorFilmCase({ onClose }: { onClose: () => void }) {
  return <article className="pepsi-case senior-film-case" aria-live="polite"><header className="case-head"><div><small>COMMUNITY PROGRAM · SILVER GENERATION</small><h3>老年剧组<br/>短视频共创计划</h3></div><button type="button" onClick={onClose}>返回实习经历 ×</button></header><div className="case-summary"><p>从老年群体日常刷短视频、追短剧，以及希望与时代保持连接的真实需求出发，组建“老年剧组”，把数字技能学习转化为一场可参与、可产出的内容共创项目。</p><dl><div><dt>10+</dt><dd>系列活动</dd></div><div><dt>500+</dt><dd>覆盖用户</dd></div><div><dt>95%</dt><dd>活动满意度</dd></div></dl></div><section className="case-block senior-story"><div className="case-block-title"><span>01</span><div><small>FROM INSIGHT TO CREATION</small><h4>让老年人从观看者<br/>成为创作者</h4><p>课程从拍摄、录音、表演到短视频制作逐步拆解，让参与者在真实场景中学习镜头表达和内容创作，并共同完成短视频作品。项目获得长宁区奖项、登上长宁区报纸，并获央视财经频道报道。</p></div></div><a className="senior-report" href="https://weixin.qq.com/sph/Agn62r5Kwr" target="_blank" rel="noreferrer"><img src="/senior-film-cctv.jpg" alt="央视财经频道报道老年剧组短视频课程"/><div><small>CCTV-2 · 经济半小时</small><strong>点击观看央视报道</strong><span>查看视频 ↗</span></div></a></section><div className="case-bottom-return"><button type="button" onClick={onClose}>返回 ↑</button></div></article>;
}

function SeniorConversionCase({ onClose }: { onClose: () => void }) {
  return <article className="pepsi-case senior-film-case" aria-live="polite"><header className="case-head"><div><small>LEAD NURTURING · CUSTOMER OPERATION</small><h3>从社区活动<br/>到服务转化</h3></div><button type="button" onClick={onClose}>返回实习经历 ×</button></header><div className="case-summary"><p>课程并非一次性的公益活动，而是面向社区老年群体的长期触达入口：先用真正感兴趣的数字课程建立信任，再通过活动互动与社群运营持续了解需求，将潜在用户沉淀为可进一步服务的客户。</p><dl><div><dt>10+</dt><dd>用户触点活动</dd></div><div><dt>500+</dt><dd>潜在用户覆盖</dd></div><div><dt>400+</dt><dd>反馈问卷</dd></div></dl></div><section className="case-block senior-story"><div className="case-block-title"><span>01</span><div><small>FROM ENGAGEMENT TO CONVERSION</small><h4>用内容建立信任，<br/>让需求自然走向服务</h4><p>在课程招募、现场沟通和活动后的社群维护中，持续识别老年用户在居家生活与健康陪伴方面的真实需求，并介绍上门清洁、陪诊等适老服务。通过内容体验、关系维护和后续沟通完成潜客培育，有效推动活动参与者转化为实际客户并购买服务。</p></div></div></section><div className="case-bottom-return"><button type="button" onClick={onClose}>返回 ↑</button></div></article>;
}

export function ExperienceShowcase({ experiences }: { experiences: Experience[] }) {
  const [selectedCompany, setSelectedCompany] = useState<number | null>(null);
  const [showPepsi, setShowPepsi] = useState<Experience["points"][number]["detail"] | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const companyDetailRef = useRef<HTMLDivElement>(null);
  const closePepsi = () => {
    setShowPepsi(null);
    requestAnimationFrame(() => companyDetailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };
  useEffect(() => {
    if (showPepsi) requestAnimationFrame(() => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, [showPepsi]);
  const selected = selectedCompany === null ? null : experiences[selectedCompany];
  if (!selected) return <div className="experience-company-list">{experiences.map((item, idx) => <button className="experience-company-card" type="button" key={item.company} onClick={() => setSelectedCompany(idx)} aria-label={`展开 ${item.company} 实习经历`}><div className="project-meta"><span>0{idx + 1}</span><span>{item.period}</span><span>WORK</span></div><div className="project-visual experience-company-visual" aria-hidden="true"><img src={item.image} alt="" style={{ objectPosition: item.imagePosition ?? "center", transform: item.imageTransform }}/></div><h3>{item.company}</h3><p>{item.role}</p><div className="project-result"><span>{item.tags.slice(0, idx === 0 ? 2 : 3).join(" · ")}</span><b>↗</b></div></button>)}</div>;

  return <div className="experience-selected" ref={companyDetailRef}>
    <button className="experience-company-card experience-company-card-selected" type="button" onClick={() => { setSelectedCompany(null); setShowPepsi(null); }} aria-label={`返回全部实习经历`}><div className="project-meta"><span>0{selectedCompany! + 1}</span><span>{selected.period}</span><span>WORK</span></div><div className="project-visual experience-company-visual" aria-hidden="true"><img src={selected.image} alt="" style={{ objectPosition: selected.imagePosition ?? "center", transform: selected.imageTransform }}/></div><h3>{selected.company}</h3><p>{selected.role}</p><div className="project-result"><span>返回全部公司</span><b>←</b></div></button>
    <article className="experience-company-detail"><div className="project-detail-head"><div><small>EXPERIENCE 0{selectedCompany! + 1}</small><h3>{selected.company}</h3><p>{selected.role} · {selected.period}</p></div><button type="button" onClick={() => { setSelectedCompany(null); setShowPepsi(null); }}>返回全部实习 ×</button></div><div className="exp-body company-exp-body"><p>{selected.intro}</p><ul>{selected.points.map(point => <li key={point.text}>{point.detail ? <button type="button" onClick={() => setShowPepsi(point.detail!)}>{point.text}<span>查看案例详情 ↗</span></button> : point.text}</li>)}</ul><div className="tags">{selected.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>
    {showPepsi && <div ref={detailRef} className="experience-case-anchor company-case-detail">{showPepsi === "senior-film" ? <SeniorFilmCase onClose={closePepsi}/> : showPepsi === "senior-conversion" ? <SeniorConversionCase onClose={closePepsi}/> : showPepsi.startsWith("mars-") ? <MarsCase view={showPepsi as "mars-social" | "mars-event" | "mars-customer" | "mars-kol"} onClose={closePepsi}/> : <PepsiCase view={showPepsi as "videos" | "activation"} onClose={closePepsi}/>}</div>}
  </div>;
}
