"use client";

import { useEffect, useRef, useState } from "react";

export type Experience = {
  period: string;
  company: string;
  role: string;
  intro: string;
  points: { text: string; detail?: "videos" | "activation" }[];
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

function PepsiCase({ view, onClose }: { view: "videos" | "activation"; onClose: () => void }) {
  return (
    <article className="pepsi-case" aria-live="polite">
      <header className="case-head">
        <div><small>PEPSICO · QUAKER</small><h3>桂格发酵燕麦<br/>Social Seeding</h3></div>
        <button type="button" onClick={onClose}>返回实习经历 ×</button>
      </header>
      <div className="case-summary">
        <p>围绕发酵燕麦新品的消费者认知增长，我参与达人筛选、Brief 制定、内容审核与投后复盘，并协同推进联名传播及用户体验活动。</p>
        <dl><div><dt>59</dt><dd>合作达人</dd></div><div><dt>1.05 亿+</dt><dd>累计曝光</dd></div><div><dt>105 万+</dt><dd>累计互动</dd></div><div><dt>+40%</dt><dd>核心人群增长</dd></div></dl>
      </div>

      {view === "videos" && <section className="case-block"><div className="case-block-title"><span>01</span><div><small>CREATOR SEEDING</small><h4>爆款视频</h4><p>从内容表现、互动质量及看后搜效率复盘投放，筛选具有代表性的高表现内容。</p></div></div><div className="case-grid">{creatorCases.map((item) => <MediaCard key={item.href} item={item} platform="抖音" />)}</div></section>}
      {view === "activation" && <><section className="case-block"><div className="case-block-title"><span>01</span><div><small>CO-BRANDING</small><h4>桂格 × 奈雪联名</h4><p>通过官方 KV 与垂类创作者内容，连接营养专业、奶茶消费和轻代餐场景。</p></div></div><div className="case-grid">{collaborationCases.map((item) => <MediaCard key={item.href} item={item} platform="小红书" />)}</div></section>
      <section className="case-block checkin-block"><div className="case-block-title"><span>02</span><div><small>CONSUMER ACTIVATION</small><h4>14 天打卡活动</h4><p>围绕“连续体验 14 天”的产品沟通，让消费者扫码打卡并形成真实使用习惯；完成挑战可获一盒产品，幸运用户可获 52 盒年度装。</p></div></div><div className="checkin-layout"><div className="checkin-images"><img src="/pepsi/checkin-01.png" alt="桂格发酵燕麦14天打卡小程序首页"/><img src="/pepsi/checkin-02.png" alt="桂格发酵燕麦14天打卡活动页面"/></div><div className="checkin-results"><p>小程序暂不支持外部跳转，因此保留真实页面截图作为活动呈现。</p><div><strong>1 万+</strong><span>活动触达人次</span></div><div><strong>23.3%</strong><span>活动复购率</span></div><small>高于行业常见的 5%–15% 区间</small></div></div></section></>}
    </article>
  );
}

export function ExperienceShowcase({ experiences }: { experiences: Experience[] }) {
  const [showPepsi, setShowPepsi] = useState<"videos" | "activation" | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (showPepsi) requestAnimationFrame(() => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }, [showPepsi]);
  return <div className="experience-list">
    {experiences.map((item, idx) => (
      <article className="exp-row" key={item.period}>
        <span className="row-no">0{idx + 1}</span>
        <div className="exp-meta"><p>{item.period}</p><h3>{item.company}</h3><span>{item.role}</span></div>
        <div className="exp-body"><p>{item.intro}</p><ul>{item.points.map((point) => <li key={point.text}>{point.detail ? <button type="button" onClick={() => setShowPepsi(point.detail!)}>{point.text}<span>查看案例详情 ↗</span></button> : point.text}</li>)}</ul><div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
      </article>
    ))}
    {showPepsi && <div ref={detailRef} className="experience-case-anchor"><PepsiCase view={showPepsi} onClose={() => setShowPepsi(null)} /></div>}
  </div>;
}
