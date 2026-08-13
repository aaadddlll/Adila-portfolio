"use client";

import { useEffect, useRef, useState } from "react";

export type Experience = {
  period: string;
  company: string;
  role: string;
  intro: string;
  points: { text: string; detail?: "videos" | "activation" | "mars-social" | "mars-event" | "mars-customer" | "mars-kol" }[];
  tags: string[];
};

const creatorCases = [
  { image: "/pepsi/douyin-01.png", href: "https://v.douyin.com/hn49QEzu_iI/", metric: "看后搜 7 万+", note: "以一线城市女性生活方式切入，把产品自然放进真实日常；看后搜成本仅 1.64。", mask: "mask-douyin" },
  { image: "/pepsi/douyin-02.png", href: "https://v.douyin.com/FudKLVkeTJM/", metric: "高曝光 · 高互动", note: "内容有效触达“精致妈妈”核心人群，看后搜成本仅 2.03。", mask: "mask-douyin" },
  { image: "/pepsi/douyin-03.png", href: "https://v.douyin.com/8J2g673w8SY/", metric: "2.4 万赞", note: "抓住“杯子 + 隔夜燕麦杯”兴趣点，用高颜值试吃内容同时带动产品搜索与转化。", mask: "mask-douyin" },
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
        <img src={item.image} alt="已隐藏创作者昵称的内容表现截图" />
        {item.mask && <i className={item.mask} aria-hidden="true" />}
        <span>查看原内容 ↗</span>
      </div>
      <small>{platform}</small><h5>{item.metric}</h5><p>{item.note}</p>
    </a>
  );
}

const marsSocial = [
  { image: "/mars/social-01.png", href: "https://www.xiaohongshu.com/discovery/item/6a6d8d8c0000000028031888", metric: "互动率 40%", note: "以“中国金毛走向国际赛场”的故事引发高质量讨论，精准触达年轻养宠人群。", mask: "mask-xhs-bottom" },
  { image: "/mars/social-02.jpg", href: "https://v.douyin.com/r_Vu-M2I324/", metric: "播放 7 万+", note: "用“狗界体育生学霸”的内容钩子讲专业繁育，带动多名消费者私信咨询。", mask: "mask-douyin" },
];
const marsKol = [
  { image: "/mars/kol-01.png", href: "https://v.douyin.com/8BUC-Rg9tlw/", metric: "平台“质爆”", note: "它博会探展内容发布三天后，抖音种草 A3 新增率进入行业前 50%。", mask: "mask-douyin" },
  { image: "/mars/kol-02.png", href: "https://v.douyin.com/ar4NuU8fcRY/", metric: "平台“质爆”", note: "从消费者选购猫犬的真实问题切入，种草 A3 新增率进入行业前 50%。", mask: "mask-douyin" },
];

function MarsCase({ view, onClose }: { view: "mars-social" | "mars-event" | "mars-customer" | "mars-kol"; onClose: () => void }) {
  const headings = { "mars-social": ["SOCIAL GROWTH", "社媒内容增长"], "mars-event": ["2026 TOPS", "上海它博会 Campaign"], "mars-customer": ["CUSTOMER SUCCESS", "客户运营与赋能"], "mars-kol": ["KOL SEEDING", "达人“质爆”案例"] } as const;
  const [eyebrow, title] = headings[view];
  return <article className="pepsi-case mars-case" aria-live="polite">
    <header className="case-head"><div><small>MARS · ROYAL CANIN · {eyebrow}</small><h3>{title}</h3></div><button type="button" onClick={onClose}>返回实习经历 ×</button></header>
    {view === "mars-social" && <><div className="case-summary mars-summary"><p>从 0 到 1 搭建账号近两年内容数据库，用播放、互动、受众与选题表现持续复盘内容方向。</p><dl><div><dt>+7000</dt><dd>小红书涨粉</dd></div><div><dt>+3000</dt><dd>抖音涨粉</dd></div><div><dt>+30%</dt><dd>平均互动率</dd></div></dl></div><section className="case-block"><div className="case-grid case-grid-two">{marsSocial.map(item => <MediaCard key={item.href} item={item} platform={item.image.endsWith("jpg") ? "抖音" : "小红书"}/>)}</div></section></>}
    {view === "mars-kol" && <><div className="case-summary mars-summary"><p>围绕它博会品牌传播需求，从粉丝画像、互动表现、历史内容与预估传播效果等维度评估宠物垂类达人。</p><dl><div><dt>2</dt><dd>质爆内容</dd></div><div><dt>TOP 50%</dt><dd>种草 A3 新增率</dd></div></dl></div><section className="case-block"><div className="case-grid case-grid-two">{marsKol.map(item => <MediaCard key={item.href} item={item} platform="抖音"/>)}</div></section></>}
    {view === "mars-event" && <>
      <div className="event-hero"><img src="/mars/event-intro.png" alt="2026 TOPS 它博会规模介绍"/><p>参与策划执行皇家高峰论坛、客户晚宴、展位活动、现场支持与社媒传播，将大型线下展会转化为客户赋能、品牌触达和用户增长的综合场景。</p></div>
      <section className="case-block"><div className="case-block-title"><span>01</span><div><small>B2B EDUCATION</small><h4>它博会高峰论坛</h4><p>邀请专业兽医与讲师面向繁育客户分享行业知识，到场 150+ 名繁育人，论坛满意度达 98%。</p></div></div><div className="photo-stack"><img src="/mars/forum-01.jpg" alt="皇家繁育高峰论坛现场"/><img src="/mars/forum-02.jpg" alt="皇家繁育高峰论坛资料"/></div></section>
      <section className="case-block"><div className="case-block-title"><span>02</span><div><small>RELATIONSHIP BUILDING</small><h4>客户晚宴</h4><p>以颁奖、抽奖与乐队表演承接论坛内容，在更轻松的场景中加深客户连接与行业伙伴关系。</p></div></div><div className="photo-stack"><img src="/mars/dinner-01.jpg" alt="皇家繁育客户晚宴"/><img src="/mars/dinner-02.jpg" alt="客户晚宴互动环节"/></div></section>
      <section className="case-block"><div className="case-block-title"><span>03</span><div><small>EXHIBITION</small><h4>皇家展位与活体区</h4><p>协同销售、繁育客户、主办方与供应商推进现场落地；活体区 53 家商家中 50 家成交，成交率约 94%，成交犬猫 121 只、金额 130 万+。</p></div></div><div className="event-photo-grid">{[1,2,3,4,5].map(n=><img key={n} src={`/mars/booth-0${n}.jpg`} alt="皇家它博会展位现场"/>)}</div><dl className="event-metrics"><div><dt>94%</dt><dd>入驻商家成交率</dd></div><div><dt>121</dt><dd>成交犬猫数量</dd></div><div><dt>130 万+</dt><dd>成交金额</dd></div><div><dt>4000+</dt><dd>线上直播观看</dd></div></dl></section>
      <section className="case-block"><div className="case-block-title"><span>04</span><div><small>SOCIAL ACTIVATION</small><h4>粉丝互动与视频测试</h4><p>展前赠票连接 20 名粉丝；展中以消费者兴趣设计互动小游戏，推动账号在四天内快速涨粉 4000+。</p></div></div><div className="case-grid case-grid-two"><MediaCard item={{image:"/mars/event-post.jpg",href:"http://xhslink.cn/o/1VsHKDxiOYv",metric:"20 张赠票",note:"从线上福利到线下见面，让粉丝真实参与品牌活动并出镜账号内容。",mask:"mask-xhs-top"}} platform="小红书"/><MediaCard item={{image:"/mars/event-video.jpg",href:"http://xhslink.cn/o/2gxWPmsF4yR",metric:"同期最高互动",note:"基于内容数据库与热门趋势设计 C 端互动测试，验证账号面向消费者的内容潜力。",mask:"mask-xhs-top"}} platform="小红书"/></div></section>
    </>}
    {view === "mars-customer" && <>
      <section className="case-block"><div className="case-block-title"><span>01</span><div><small>PROFESSIONAL EDUCATION</small><h4>皇家繁育学园</h4><p>通过专业课程、书籍、公开课与直播课持续赋能 B 端繁育客户；负责对接讲师、审核并发布课程，以及用问卷沉淀反馈。</p></div></div><div className="academy-layout"><img src="/mars/academy.jpg" alt="皇家繁育学园小程序页面"/><div><strong>持续的客户教育平台</strong><p>除线上课程外，也组织繁育人自媒体、直播等实操课程，帮助客户提升经营和内容能力。</p><small>微信小程序内容无法从网页直接唤起</small></div></div></section>
      <section className="case-block"><div className="case-block-title"><span>02</span><div><small>CO-CREATION</small><h4>繁育客户内容共创</h4><p>为繁育舍提供脚本、拍摄、剪辑与投流支持，在推广客户品牌的同时强化皇家专业形象。</p></div></div><div className="case-summary mars-summary"><p>联动 20 家繁育舍，共创内容及其后续引流视频的平均播放与互动表现较未合作内容提升 200%–400%。</p><dl><div><dt>20</dt><dd>合作繁育舍</dd></div><div><dt>+200%–400%</dt><dd>播放互动提升</dd></div></dl></div><div className="case-grid case-grid-two"><MediaCard item={{image:"/mars/customer-01.png",href:"https://v.douyin.com/W-nQkPU7z-0/",metric:"客户共创案例 01",note:"共同完成内容策划与制作，为繁育舍导流并强化品牌合作关系。",mask:"mask-douyin"}} platform="抖音"/><MediaCard item={{image:"/mars/customer-02.png",href:"https://v.douyin.com/rMOCv6FukvY/",metric:"客户共创案例 02",note:"以皇家挑战赛为内容抓手，帮助客户获得更有效的社媒曝光。",mask:"mask-douyin"}} platform="抖音"/></div></section>
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

export function ExperienceShowcase({ experiences }: { experiences: Experience[] }) {
  const [showPepsi, setShowPepsi] = useState<Experience["points"][number]["detail"] | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const pepsiRef = useRef<HTMLElement>(null);
  const marsRef = useRef<HTMLElement>(null);
  const closePepsi = () => {
    setShowPepsi(null);
    const target = showPepsi?.startsWith("mars-") ? marsRef.current : pepsiRef.current;
    requestAnimationFrame(() => target?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };
  useEffect(() => {
    if (showPepsi) requestAnimationFrame(() => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, [showPepsi]);
  return <div className="experience-list">
    {experiences.map((item, idx) => (
      <article className="exp-row" key={item.period} ref={idx === 0 ? pepsiRef : idx === 1 ? marsRef : undefined}>
        <span className="row-no">0{idx + 1}</span>
        <div className="exp-meta"><p>{item.period}</p><h3>{item.company}</h3><span>{item.role}</span></div>
        <div className="exp-body"><p>{item.intro}</p><ul>{item.points.map((point) => <li key={point.text}>{point.detail ? <button type="button" onClick={() => setShowPepsi(point.detail!)}>{point.text}<span>查看案例详情 ↗</span></button> : point.text}</li>)}</ul><div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
      </article>
    ))}
    {showPepsi && <div ref={detailRef} className="experience-case-anchor">{showPepsi.startsWith("mars-") ? <MarsCase view={showPepsi as "mars-social" | "mars-event" | "mars-customer" | "mars-kol"} onClose={closePepsi}/> : <PepsiCase view={showPepsi as "videos" | "activation"} onClose={closePepsi} />}</div>}
  </div>;
}
