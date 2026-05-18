import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import equipeImg from "@/assets/equipe.jpg";
import lawrenceImg from "@/assets/lawrence.jpg";
import svcPortariaImg from "@/assets/svc-portaria.jpg";
import svcLimpezaImg from "@/assets/svc-limpeza.jpg";
import svcControleImg from "@/assets/svc-controle.jpg";
import svcVigiaImg from "@/assets/svc-vigia.jpg";
import logoGisa from "@/assets/logo-gisa.png";

const STYLES = `
  :root{
    --petroleo:#136E8A;
    --petroleo-dark:#0F5870;
    --petroleo-light:#1B8AAB;
    --accent:#D2AC67;
    --accent-dark:#B89556;
    --white:#FFFFFF;
    --bg:#FFFFFF;
    --bg-alt:#FAF8F2;
    --bg-dark:#091E2D;
    --surface-dark:#1A2F45;
    --border:#E8E4DA;
    --border-strong:#D6CFC0;
    --border-dark:rgba(255,255,255,.10);
    --text:#091E2D;
    --text-muted:#4A5A6E;
    --text-on-dark:#C7D2DE;
    --text-on-dark-soft:#8A98AB;
    --radius-sm:8px;
    --radius:14px;
    --radius-lg:22px;
    --shadow-sm:0 1px 2px rgba(9,30,45,.06), 0 1px 1px rgba(9,30,45,.04);
    --shadow:0 12px 30px -12px rgba(9,30,45,.18), 0 4px 10px -4px rgba(9,30,45,.08);
    --shadow-lg:0 30px 60px -20px rgba(9,30,45,.30);
    --ease:cubic-bezier(.2,.7,.1,1);
    --ease-out:cubic-bezier(.16,1,.3,1);
    --container:1200px;
  }
  .gisa,.gisa *,.gisa *::before,.gisa *::after{box-sizing:border-box}
  .gisa{
    font-family:"Plus Jakarta Sans", system-ui, -apple-system, Segoe UI, sans-serif;
    font-size:17px;line-height:1.55;color:var(--text);background:var(--bg);
    -webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;
  }
  html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
  .gisa img{max-width:100%;display:block}
  .gisa a{color:inherit;text-decoration:none}
  .gisa button{font:inherit;cursor:pointer;border:0;background:none;color:inherit}
  .gisa :focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:6px}

  .gisa .container{max-width:var(--container);margin-inline:auto;padding-inline:24px}
  .gisa section{padding:96px 0;position:relative}
  @media (max-width:720px){.gisa section{padding:64px 0}}

  .gisa .eyebrow{
    font-size:12px;letter-spacing:.18em;text-transform:uppercase;
    font-weight:700;color:var(--petroleo);
    display:inline-flex;align-items:center;gap:10px;
  }
  .gisa .eyebrow::before{content:"";width:24px;height:1px;background:var(--accent)}

  .gisa h1,.gisa h2,.gisa h3,.gisa h4{
    font-family:"Plus Jakarta Sans", system-ui, sans-serif;
    font-weight:700;color:var(--text);margin:0;
    letter-spacing:-.02em;text-wrap:balance;
  }
  .gisa h1{font-size:clamp(36px,5.2vw,64px);line-height:1.05;font-weight:800;letter-spacing:-.035em}
  .gisa h2{font-size:clamp(28px,3.4vw,42px);line-height:1.12;font-weight:700;letter-spacing:-.025em}
  .gisa h3{font-size:clamp(20px,2vw,24px);line-height:1.25;font-weight:700;letter-spacing:-.015em}
  .gisa p{margin:0}
  .gisa .lead{font-size:clamp(16px,1.3vw,18px);color:var(--text-muted);line-height:1.6;text-wrap:pretty;font-weight:400}

  .gisa .hl{
    background:linear-gradient(120deg, rgba(210,172,103,.0) 0%, rgba(210,172,103,.35) 40%, rgba(210,172,103,.35) 60%, rgba(210,172,103,.0) 100%);
    background-size:100% 38%;background-repeat:no-repeat;background-position:0 88%;
    padding:0 .06em;border-radius:2px;color:var(--petroleo);font-weight:800;
  }
  .gisa .hl-gold{color:var(--accent-dark);font-weight:800}
  .gisa .hl-red{color:#B23A3A;font-weight:800}

  @property --gisa-angle{ syntax:"<angle>"; initial-value:0deg; inherits:false; }
  @keyframes gisaSpin{ to { --gisa-angle: 360deg; } }
  @keyframes gisaShine{ 0%{ transform:translateX(-110%);} 60%,100%{ transform:translateX(110%);} }

  .gisa .btn{
    position:relative;display:inline-flex;align-items:center;justify-content:center;gap:10px;
    padding:14px 22px;border-radius:999px;font-weight:700;font-size:15px;
    transition:transform .25s var(--ease), box-shadow .3s var(--ease), filter .25s var(--ease);
    will-change:transform;white-space:nowrap;isolation:isolate;border:0;overflow:hidden;
  }
  .gisa .btn::before{
    content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;
    background:linear-gradient(135deg, rgba(199,160,60,.55), rgba(249,222,144,.15) 40%, rgba(199,160,60,.45));
    -webkit-mask:linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
            mask:linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite:xor; mask-composite:exclude;
    opacity:.7;transition:opacity .3s var(--ease);pointer-events:none;z-index:2;
  }
  .gisa .btn:hover::before{opacity:1}
  .gisa .btn-primary{
    background:linear-gradient(135deg, #E5BE78 0%, var(--accent) 45%, var(--accent-dark) 100%);
    color:#091E2D;
    box-shadow:0 10px 24px -10px rgba(184,149,86,.55), inset 0 1px 0 rgba(255,255,255,.45);
  }
  .gisa .btn-primary:hover{transform:translateY(-2px);box-shadow:0 18px 36px -12px rgba(184,149,86,.7), inset 0 1px 0 rgba(255,255,255,.55)}
  .gisa .btn-primary:active{transform:translateY(0)}
  .gisa .btn-primary::after{
    content:"";position:absolute;top:0;bottom:0;left:0;width:55%;border-radius:inherit;pointer-events:none;
    background:linear-gradient(110deg, transparent 0%, rgba(255,255,255,.6) 50%, transparent 100%);
    transform:translateX(-110%);mix-blend-mode:overlay;z-index:1;
  }
  .gisa .btn-primary:hover::after{animation:gisaShine .9s var(--ease) forwards}
  .gisa .btn-primary svg{position:relative;z-index:3;transition:transform .25s var(--ease)}
  .gisa .btn-primary:hover svg{transform:translateX(3px)}
  .gisa .btn-primary > *{position:relative;z-index:3}
  .gisa .btn-outline{
    background:linear-gradient(180deg,#fff,#FAF8F2);color:var(--text);
    box-shadow:0 4px 14px -8px rgba(9,30,45,.15);
  }
  .gisa .btn-outline:hover{transform:translateY(-2px);box-shadow:0 12px 24px -12px rgba(19,110,138,.35)}
  .gisa .btn-outline > *{position:relative;z-index:3}
  .gisa .btn-outline-light{
    background:rgba(255,255,255,.04);color:#fff;
    backdrop-filter:blur(6px);
  }
  .gisa .btn-outline-light:hover{background:rgba(255,255,255,.10);transform:translateY(-2px)}
  .gisa .btn-outline-light > *{position:relative;z-index:3}
  .gisa .btn-lg{padding:18px 28px;font-size:16px}
  @media (prefers-reduced-motion: reduce){
    .gisa .btn::before{animation:none}
    .gisa .btn-primary:hover::after{animation:none}
  }

  .gisa .micro{margin-top:12px;font-size:13.5px;color:var(--text-muted)}

  .gisa .nav{
    position:sticky;top:0;z-index:50;
    background:rgba(255,255,255,.0);
    transition:background-color .3s var(--ease), backdrop-filter .3s var(--ease), box-shadow .3s var(--ease), border-color .3s var(--ease);
    border-bottom:1px solid transparent;
  }
  .gisa .nav.scrolled{
    background:rgba(255,255,255,.82);
    backdrop-filter:saturate(1.4) blur(14px);
    box-shadow:0 6px 24px -18px rgba(9,30,45,.35);
    border-bottom-color:var(--border);
  }
  .gisa .nav-inner{display:flex;align-items:center;justify-content:space-between;height:72px;gap:24px}
  .gisa .logo{font-weight:800;font-size:24px;letter-spacing:-.04em;color:var(--text)}
  .gisa .logo .dot{color:var(--accent)}
  .gisa .nav-links{display:flex;gap:6px;align-items:center}
  .gisa .nav-links a{
    padding:10px 14px;border-radius:999px;font-weight:500;font-size:14.5px;color:var(--text-muted);
    transition:color .2s var(--ease), background-color .2s var(--ease);
  }
  .gisa .nav-links a:hover{color:var(--text);background:var(--bg-alt)}
  .gisa .nav-cta{display:flex;align-items:center;gap:8px}
  .gisa .menu-btn{display:none;padding:10px;border-radius:10px}
  .gisa .menu-btn:hover{background:var(--bg-alt)}
  @media (max-width:900px){
    .gisa .nav-links{
      position:absolute;top:72px;left:0;right:0;
      flex-direction:column;align-items:stretch;gap:0;padding:8px 16px 16px;
      background:#fff;border-bottom:1px solid var(--border);
      transform:translateY(-10px);opacity:0;pointer-events:none;transition:opacity .2s var(--ease), transform .2s var(--ease);
    }
    .gisa .nav-links.open{opacity:1;transform:translateY(0);pointer-events:auto}
    .gisa .nav-links a{padding:14px 12px;border-radius:10px}
    .gisa .menu-btn{display:inline-flex}
    .gisa .nav-cta .btn{display:none}
  }

  .gisa .hero{padding-top:48px;padding-bottom:64px;overflow:hidden;position:relative;isolation:isolate}
  .gisa .hero::before{
    content:"";position:absolute;inset:-10% -10% auto -10%;height:90%;z-index:-2;
    background:
      radial-gradient(60% 50% at 20% 10%, rgba(210,172,103,.18), transparent 70%),
      radial-gradient(50% 45% at 90% 20%, rgba(19,110,138,.18), transparent 70%);
  }
  .gisa .hero::after{
    content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;
    background-image:
      linear-gradient(to right, rgba(9,30,45,.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(9,30,45,.05) 1px, transparent 1px);
    background-size:64px 64px;
    -webkit-mask-image:radial-gradient(ellipse at 50% 30%, #000 30%, transparent 75%);
            mask-image:radial-gradient(ellipse at 50% 30%, #000 30%, transparent 75%);
  }
  .gisa .grain{position:absolute;inset:0;z-index:-1;opacity:.5;pointer-events:none;mix-blend-mode:multiply}
  .gisa .hero-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:64px;align-items:center}
  @media (max-width:900px){.gisa .hero-grid{grid-template-columns:1fr;gap:40px}}
  .gisa .hero-text > *{opacity:0;transform:translateY(14px);animation:gisaRise .8s var(--ease-out) forwards}
  .gisa .hero-text .eyebrow{animation-delay:.05s}
  .gisa .hero-text h1{animation-delay:.13s;margin-top:14px}
  .gisa .hero-text .lead{animation-delay:.21s;margin-top:18px;max-width:56ch}
  .gisa .hero-text .cta-row{animation-delay:.29s;margin-top:28px;display:flex;flex-wrap:wrap;align-items:center;gap:12px}
  .gisa .hero-photo{opacity:0;transform:translateY(14px);animation:gisaRise .9s var(--ease-out) .25s forwards;position:relative}
  .gisa .hero-photo .frame{
    aspect-ratio:4/5;border-radius:var(--radius-lg);overflow:hidden;position:relative;
    background:linear-gradient(160deg,#0F5870,#091E2D 70%);
    box-shadow:var(--shadow-lg);
  }
  .gisa .hero-photo .frame img{width:100%;height:100%;object-fit:cover}
  .gisa .hero-photo .frame::after{content:none}
  .gisa .hero-photo .badge{
    position:absolute;left:50%;bottom:14%;transform:translate(-50%, 50%);z-index:4;
    background:#fff;border:1px solid var(--border);box-shadow:var(--shadow-lg);
    padding:14px 18px;border-radius:14px;display:flex;align-items:center;gap:12px;
  }
  .gisa .hero-photo .badge .num{font-size:28px;font-weight:800;color:var(--petroleo);letter-spacing:-.03em}
  .gisa .hero-photo .badge .lab{font-size:12px;color:var(--text-muted);line-height:1.2;max-width:140px;font-weight:500}

  @keyframes gisaRise{to{opacity:1;transform:translateY(0)}}

  /* Marquee benefits strip */
  .gisa .marquee{
    background:var(--bg-dark);color:#fff;
    border-top:1px solid var(--surface-dark);border-bottom:1px solid var(--surface-dark);
    overflow:hidden;position:relative;padding:18px 0;
  }
  .gisa .marquee::before,.gisa .marquee::after{
    content:"";position:absolute;top:0;bottom:0;width:120px;z-index:2;pointer-events:none;
  }
  .gisa .marquee::before{left:0;background:linear-gradient(to right,var(--bg-dark),transparent)}
  .gisa .marquee::after{right:0;background:linear-gradient(to left,var(--bg-dark),transparent)}
  .gisa .marquee-track{
    display:flex;gap:48px;width:max-content;animation:gisaMarquee 28s linear infinite;
    will-change:transform;
  }
  .gisa .marquee:hover .marquee-track{animation-play-state:paused}
  .gisa .m-item{
    display:inline-flex;align-items:center;gap:14px;
    font-size:18px;font-weight:600;letter-spacing:-.01em;color:#fff;white-space:nowrap;
  }
  .gisa .m-item .dot{
    width:9px;height:9px;border-radius:50%;background:var(--accent);flex:none;
    box-shadow:0 0 0 6px rgba(210,172,103,.10);
    animation:gisaDot 2.4s ease-in-out infinite;
  }
  .gisa .m-item:nth-child(2n) .dot{animation-delay:.6s}
  .gisa .m-item:nth-child(3n) .dot{animation-delay:1.2s}
  @keyframes gisaDot{
    0%,100%{transform:scale(.7);box-shadow:0 0 0 0 rgba(210,172,103,.45)}
    50%{transform:scale(1.15);box-shadow:0 0 0 10px rgba(210,172,103,0)}
  }
  @keyframes gisaMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}

  .gisa .logos{background:var(--bg-alt);padding:64px 0;border-bottom:1px solid var(--border)}
  .gisa .logos .head{text-align:center;margin-bottom:36px}
  .gisa .logo-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:28px;align-items:center}
  @media (max-width:900px){.gisa .logo-grid{grid-template-columns:repeat(3,1fr)}}
  @media (max-width:520px){.gisa .logo-grid{grid-template-columns:repeat(2,1fr)}}
  .gisa .logo-item{
    height:64px;border:1px solid var(--border-strong);border-radius:12px;
    display:flex;align-items:center;justify-content:center;
    color:var(--text-muted);font-weight:700;font-size:14px;letter-spacing:.04em;
    opacity:.7;filter:grayscale(1);transition:opacity .25s var(--ease), filter .25s var(--ease), transform .25s var(--ease);
    background:#fff;text-align:center;padding:0 12px;
  }
  .gisa .logo-item:hover{opacity:1;filter:none;transform:translateY(-2px)}

  .gisa .stats{background:var(--bg-alt);padding:64px 0}
  .gisa .stats-grid{display:grid;grid-template-columns:repeat(3,1fr)}
  @media (max-width:760px){.gisa .stats-grid{grid-template-columns:1fr}}
  .gisa .stat{padding:16px 32px;text-align:center}
  .gisa .stat + .stat{border-left:1px solid var(--border-strong)}
  @media (max-width:760px){
    .gisa .stat + .stat{border-left:0;border-top:1px solid var(--border-strong);padding-top:32px;margin-top:16px}
  }
  .gisa .stat .num{
    font-weight:800;color:var(--accent-dark);
    font-size:clamp(40px,5vw,60px);line-height:1;letter-spacing:-.04em;
    font-variant-numeric:tabular-nums;
  }
  .gisa .stat .lab{margin-top:12px;color:var(--text-muted);font-size:15px;font-weight:500}

  .gisa .diag{position:relative;isolation:isolate}
  .gisa .diag::before{
    content:"";position:absolute;inset:0;z-index:-1;pointer-events:none;
    background:
      radial-gradient(50% 40% at 50% 0%, rgba(178,58,58,.08), transparent 70%),
      radial-gradient(40% 50% at 10% 90%, rgba(210,172,103,.08), transparent 70%);
  }
  .gisa .diag .head{text-align:center;max-width:780px;margin-inline:auto;margin-bottom:48px}
  .gisa .diag h2{margin-top:14px}
  .gisa .diag .sub{margin-top:18px;text-wrap:pretty}
  .gisa .diag .subhead{
    text-align:center;font-weight:700;color:#B23A3A;font-size:14px;
    letter-spacing:.06em;text-transform:uppercase;margin:8px 0 28px;
  }
  .gisa .scenes{display:grid;grid-template-columns:repeat(2,1fr);gap:14px 28px;max-width:980px;margin:0 auto}
  @media (max-width:760px){.gisa .scenes{grid-template-columns:1fr}}
  .gisa .scene{
    position:relative;display:flex;gap:14px;align-items:flex-start;
    padding:18px 18px;border-radius:14px;border:1px solid rgba(178,58,58,.18);
    background:linear-gradient(180deg, #FFF8F6 0%, #FFFCFB 100%);
    transition:border-color .25s var(--ease), transform .25s var(--ease), box-shadow .25s var(--ease);
    overflow:hidden;
  }
  .gisa .scene::before{
    content:"";position:absolute;left:0;top:0;bottom:0;width:3px;
    background:linear-gradient(180deg, #C44 0%, rgba(178,58,58,.2) 100%);
  }
  .gisa .scene:hover{border-color:rgba(178,58,58,.45);transform:translateY(-2px);box-shadow:0 18px 30px -20px rgba(178,58,58,.35)}
  .gisa .scene .ico{
    flex:none;width:36px;height:36px;border-radius:10px;
    background:rgba(178,58,58,.10);color:#B23A3A;
    display:flex;align-items:center;justify-content:center;
  }
  .gisa .scene p{font-size:15.5px;color:var(--text);line-height:1.5}
  .gisa .diag .close{
    margin:48px auto 0;max-width:720px;text-align:center;
    font-style:italic;font-size:clamp(19px,1.8vw,22px);
    color:var(--text);line-height:1.45;font-weight:500;
  }
  .gisa .diag .close::before, .gisa .diag .close::after{
    content:"";display:block;width:40px;height:1px;background:var(--accent);margin:24px auto;
  }
  .gisa .section-cta{display:flex;justify-content:center;margin-top:40px}

  .gisa .servicos{
    background:
      radial-gradient(60% 50% at 100% 0%, rgba(19,110,138,.08), transparent 70%),
      radial-gradient(50% 50% at 0% 100%, rgba(210,172,103,.10), transparent 70%),
      var(--bg-alt);
    position:relative;
  }
  .gisa .servicos .head{max-width:760px;margin-bottom:48px}
  .gisa .servicos h2{margin-top:14px}
  .gisa .servicos .sub{margin-top:14px}
  .gisa .cards-4{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
  @media (max-width:1000px){.gisa .cards-4{grid-template-columns:repeat(2,1fr)}}
  @media (max-width:560px){.gisa .cards-4{grid-template-columns:1fr}}
  .gisa .svc{
    position:relative;background:#fff;border:1px solid var(--border);border-radius:var(--radius-lg);
    overflow:hidden;transition:transform .35s var(--ease), box-shadow .35s var(--ease), border-color .25s var(--ease);
    display:flex;flex-direction:column;isolation:isolate;
  }
  .gisa .svc:hover{transform:translateY(-6px);box-shadow:0 30px 50px -25px rgba(9,30,45,.30);border-color:var(--accent)}
  .gisa .svc .photo{
    position:relative;aspect-ratio:4/3;overflow:hidden;background:#0F5870;
  }
  .gisa .svc .photo img{
    width:100%;height:100%;object-fit:cover;
    transition:transform .8s var(--ease-out), filter .5s var(--ease);
    filter:saturate(.85);
  }
  .gisa .svc:hover .photo img{transform:scale(1.06);filter:saturate(1.05)}
  .gisa .svc .photo::after{
    content:"";position:absolute;inset:0;
    background:linear-gradient(180deg, rgba(9,30,45,0) 40%, rgba(9,30,45,.55) 100%);
  }
  .gisa .svc .photo .ico{
    position:absolute;left:18px;bottom:14px;z-index:2;
    width:42px;height:42px;border-radius:12px;color:#fff;
    background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.35);
    backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;
  }
  .gisa .svc .body{padding:24px 22px;display:flex;flex-direction:column;gap:10px;flex:1}
  .gisa .svc h3{font-size:19px}
  .gisa .svc p{color:var(--text-muted);font-size:15px;line-height:1.6}

  .gisa .fund{
    position:relative;
    background:
      radial-gradient(40% 50% at 0% 50%, rgba(19,110,138,.06), transparent 70%),
      radial-gradient(40% 50% at 100% 100%, rgba(210,172,103,.07), transparent 70%);
  }
  .gisa .fund-grid{display:grid;grid-template-columns:1fr 1.1fr;gap:56px;align-items:center}
  @media (max-width:900px){.gisa .fund-grid{grid-template-columns:1fr;gap:40px}}
  .gisa .fund-photo{display:flex;justify-content:center}
  .gisa .fund-photo .frame{
    aspect-ratio:4/5;width:100%;max-width:380px;border-radius:var(--radius-lg);overflow:hidden;position:relative;
    background:linear-gradient(160deg,#1A2F45,#091E2D);box-shadow:var(--shadow-lg);
  }
  .gisa .fund-photo .frame img{width:100%;height:100%;object-fit:cover;object-position:center 25%}
  .gisa .fund-text h2{margin-top:14px}
  .gisa .fund-text p{color:var(--text-muted);font-size:17px;line-height:1.65;margin-top:18px;max-width:54ch}
  .gisa .fund-text .sig{
    margin-top:28px;display:inline-flex;align-items:center;gap:14px;
    padding:12px 16px;border-radius:999px;background:#fff;border:1px solid var(--border);
  }
  .gisa .fund-text .sig .av{width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,var(--petroleo),var(--accent))}
  .gisa .fund-text .sig span{font-weight:700;font-size:14px}
  .gisa .fund-text .cta-row{margin-top:32px;display:flex;flex-wrap:wrap;gap:12px}

  .gisa .plano{
    background:
      radial-gradient(50% 50% at 50% 0%, rgba(19,110,138,.07), transparent 70%),
      var(--bg-alt);
  }
  .gisa .plano .head{max-width:760px;margin-bottom:48px}
  .gisa .plano h2{margin-top:14px}
  .gisa .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;position:relative}
  @media (max-width:900px){.gisa .steps{grid-template-columns:1fr}}
  .gisa .steps::before{
    content:"";position:absolute;top:38px;left:8%;right:8%;height:1px;
    background:repeating-linear-gradient(to right, var(--accent) 0 6px, transparent 6px 12px);
    z-index:0;
  }
  @media (max-width:900px){.gisa .steps::before{display:none}}
  .gisa .step{
    position:relative;background:#fff;border:1px solid var(--border);border-radius:var(--radius-lg);
    padding:28px 24px;z-index:1;overflow:hidden;isolation:isolate;
    transition:transform .35s var(--ease), box-shadow .35s var(--ease), border-color .25s var(--ease);
  }
  .gisa .step::before{
    content:"";position:absolute;inset:0;z-index:-1;opacity:0;
    background:radial-gradient(60% 80% at 50% 0%, rgba(210,172,103,.18), transparent 70%);
    transition:opacity .4s var(--ease);
  }
  .gisa .step::after{
    content:"";position:absolute;left:0;right:0;top:0;height:3px;
    background:linear-gradient(90deg, var(--accent), var(--petroleo-light));
    transform:scaleX(0);transform-origin:left;transition:transform .5s var(--ease);
  }
  .gisa .step:hover{transform:translateY(-5px);box-shadow:0 25px 45px -22px rgba(9,30,45,.25);border-color:var(--accent)}
  .gisa .step:hover::before{opacity:1}
  .gisa .step:hover::after{transform:scaleX(1)}
  .gisa .step .badge{
    display:inline-flex;align-items:center;justify-content:center;
    width:56px;height:56px;border-radius:999px;
    background:linear-gradient(135deg,var(--accent),var(--accent-dark));color:#091E2D;
    font-weight:800;font-size:20px;letter-spacing:-.03em;
    box-shadow:0 8px 20px -8px rgba(184,149,86,.6);
    transition:transform .4s var(--ease);
  }
  .gisa .step:hover .badge{transform:rotate(-6deg) scale(1.05)}
  .gisa .step h3{margin-top:18px;font-size:19px}
  .gisa .step p{margin-top:10px;color:var(--text-muted);font-size:15px;line-height:1.6}

  .gisa .transf{
    background:
      radial-gradient(50% 50% at 100% 0%, rgba(210,172,103,.07), transparent 70%),
      radial-gradient(50% 50% at 0% 100%, rgba(19,110,138,.07), transparent 70%);
  }
  .gisa .transf .head{max-width:780px;margin-bottom:48px}
  .gisa .transf h2{margin-top:14px}
  .gisa .transf-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;align-items:stretch}
  @media (max-width:900px){.gisa .transf-grid{grid-template-columns:1fr}}
  .gisa .tcol{
    padding:32px 26px;border-radius:var(--radius-lg);position:relative;
    display:flex;flex-direction:column;gap:18px;
    transition:transform .35s var(--ease), box-shadow .35s var(--ease);
  }
  .gisa .tcol:hover{transform:translateY(-4px)}
  .gisa .tcol .tag{
    font-size:11px;letter-spacing:.18em;text-transform:uppercase;font-weight:800;
    display:inline-flex;align-items:center;gap:8px;
  }
  .gisa .tcol p{font-size:15.5px;line-height:1.65}
  .gisa .tcol.antes{
    background:linear-gradient(180deg,#F6F2E8,#EFEAD9);color:var(--text-muted);
    border:1px solid #D8CFB8;box-shadow:inset 0 1px 0 rgba(255,255,255,.6);
  }
  .gisa .tcol.antes .tag{color:#8A7B5C}
  .gisa .tcol.ponte{
    background:linear-gradient(180deg,#fff,#FAF8F2);border:1px solid var(--accent);
    color:var(--text);box-shadow:0 18px 40px -22px rgba(184,149,86,.45);
  }
  .gisa .tcol.ponte .tag{color:var(--accent-dark)}
  .gisa .tcol.depois{
    background:linear-gradient(170deg,var(--petroleo),var(--bg-dark));color:#fff;
    border:1px solid rgba(210,172,103,.35);box-shadow:0 20px 50px -20px rgba(19,110,138,.55);
  }
  .gisa .tcol.depois .tag{color:var(--accent)}
  .gisa .tcol.depois p{color:var(--text-on-dark)}
  .gisa .tcol .arrow{position:absolute;top:50%;right:-20px;transform:translateY(-50%);z-index:2;color:var(--accent)}
  @media (max-width:900px){.gisa .tcol .arrow{display:none}}

  /* Form section — rebalanced */
  .gisa #form{
    background:var(--bg-dark);color:#fff;position:relative;overflow:hidden;isolation:isolate;
  }
  .gisa #form::before{
    content:"";position:absolute;inset:0;z-index:-1;
    background:
      radial-gradient(50% 60% at 15% 10%, rgba(210,172,103,.15), transparent 60%),
      radial-gradient(60% 60% at 90% 90%, rgba(27,138,171,.18), transparent 60%);
  }
  .gisa .cta-grid{
    display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start;
    max-width:1080px;margin-inline:auto;
  }
  @media (max-width:900px){.gisa .cta-grid{grid-template-columns:1fr;gap:40px}}
  .gisa .cta-text{padding-top:8px}
  .gisa .cta-text .eyebrow{color:var(--accent)}
  .gisa .cta-text .eyebrow::before{background:var(--accent)}
  .gisa .cta-text h2{
    color:#fff;margin-top:14px;
    font-size:clamp(26px,2.6vw,34px);line-height:1.18;
  }
  .gisa .cta-text .sub{color:var(--text-on-dark-soft);margin-top:18px;font-size:16px;line-height:1.6;max-width:46ch}
  .gisa .cta-bullets{margin-top:24px;display:flex;flex-direction:column;gap:12px}
  .gisa .cta-bullets li{
    display:flex;align-items:flex-start;gap:12px;list-style:none;
    color:var(--text-on-dark);font-size:15px;
  }
  .gisa .cta-bullets svg{flex:none;color:var(--accent);margin-top:2px}
  .gisa .form-card{
    position:relative;background:#fff;color:var(--text);border-radius:var(--radius-lg);
    padding:28px;box-shadow:var(--shadow-lg);width:100%;
    border:1px solid var(--border);
  }
  .gisa .form-card::before{
    content:"";position:absolute;inset:0;border-radius:var(--radius-lg);padding:1px;
    -webkit-mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite:xor;mask-composite:exclude;
    background:linear-gradient(225deg, rgba(210,172,103,.6) 0%, rgba(255,255,255,0) 50%, rgba(27,138,171,.5) 100%);
    pointer-events:none;
  }
  .gisa .form-card h3{font-size:19px;letter-spacing:-.02em}
  .gisa .field{display:flex;flex-direction:column;gap:6px;margin-top:14px}
  .gisa .field label{font-size:13px;font-weight:600;color:var(--text)}
  .gisa .field input,.gisa .field select{
    appearance:none;-webkit-appearance:none;
    width:100%;padding:13px 14px;border:1px solid var(--border-strong);background:#fff;
    border-radius:10px;font:inherit;color:var(--text);transition:border-color .2s var(--ease), box-shadow .2s var(--ease);
  }
  .gisa .field select{background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%234A5A6E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m6 9 6 6 6-6'/></svg>");background-repeat:no-repeat;background-position:right 14px center;padding-right:40px}
  .gisa .field input:focus,.gisa .field select:focus{outline:0;border-color:var(--petroleo);box-shadow:0 0 0 3px rgba(19,110,138,.15)}
  .gisa .field .err{font-size:12.5px;color:#B23A3A;display:none}
  .gisa .field.invalid input,.gisa .field.invalid select{border-color:#B23A3A;box-shadow:0 0 0 3px rgba(178,58,58,.12)}
  .gisa .field.invalid .err{display:block}
  .gisa .submit-row{margin-top:20px}
  .gisa .submit-row .btn{width:100%}

  .gisa .faq .head{max-width:760px;margin-bottom:40px}
  .gisa .faq h2{margin-top:14px}
  .gisa .faq-list{max-width:820px;margin:0 auto;display:flex;flex-direction:column;gap:10px}
  .gisa details.qa{
    background:#fff;border:1px solid var(--border);border-radius:14px;padding:4px 4px;
    transition:border-color .2s var(--ease), box-shadow .2s var(--ease), background-color .2s var(--ease);
  }
  .gisa details.qa[open]{border-color:var(--border-strong);box-shadow:var(--shadow-sm)}
  .gisa details.qa > summary{
    list-style:none;cursor:pointer;padding:18px 18px;display:flex;align-items:center;justify-content:space-between;gap:18px;
    font-weight:600;font-size:16px;color:var(--text);
  }
  .gisa details.qa > summary::-webkit-details-marker{display:none}
  .gisa details.qa > summary .ic{
    flex:none;width:30px;height:30px;border-radius:50%;background:var(--bg-alt);
    display:flex;align-items:center;justify-content:center;color:var(--petroleo);
    transition:transform .25s var(--ease), background-color .2s var(--ease);
  }
  .gisa details.qa[open] > summary .ic{transform:rotate(45deg);background:rgba(210,172,103,.18);color:var(--accent-dark)}
  .gisa details.qa .ans{padding:0 18px 20px;color:var(--text-muted);line-height:1.65;font-size:15.5px}

  .gisa .close-sec{background:var(--bg-alt);padding:72px 0}
  .gisa .close-inner{max-width:600px;margin:0 auto;text-align:center}
  .gisa .close-inner h3{font-size:clamp(24px,2.6vw,30px);line-height:1.2}
  .gisa .close-inner .btn{margin-top:24px}

  .gisa footer{background:var(--bg-dark);color:var(--text-on-dark);padding:72px 0 28px}
  .gisa .foot-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:40px}
  @media (max-width:900px){.gisa .foot-grid{grid-template-columns:1fr 1fr}}
  @media (max-width:560px){.gisa .foot-grid{grid-template-columns:1fr}}
  .gisa footer .logo{color:#fff}
  .gisa footer .col p, .gisa footer .col a{color:var(--text-on-dark);font-size:14.5px;line-height:1.7}
  .gisa footer .col a{display:inline-flex;align-items:center;gap:10px;padding:4px 0;border-radius:6px;transition:color .2s var(--ease)}
  .gisa footer .col a:hover{color:var(--accent)}
  .gisa footer .eyebrow{color:var(--accent);margin-bottom:16px}
  .gisa footer .eyebrow::before{background:var(--accent)}
  .gisa footer .stack{display:flex;flex-direction:column;gap:6px;margin-top:6px}
  .gisa .bottom-bar{
    margin-top:48px;padding-top:24px;border-top:1px solid var(--border-dark);
    color:var(--text-on-dark-soft);font-size:13px;text-align:center;
  }

  .gisa .i{width:20px;height:20px;stroke-width:2;stroke:currentColor;fill:none;stroke-linecap:round;stroke-linejoin:round}
  .gisa .i-lg{width:24px;height:24px}

  @media (prefers-reduced-motion: reduce){
    .gisa *{animation:none!important;transition:none!important}
    html{scroll-behavior:auto}
  }

  /* Logo da marca (substitui texto Gisa) */
  .gisa .nav .logo img{display:block;height:36px;width:auto}
  @media (max-width:640px){
    .gisa .nav .logo img{height:32px}
  }

  /* WhatsApp FAB (floating action button) */
  .zap-fab{position:fixed;bottom:20px;right:20px;width:56px;height:56px;border-radius:50%;background:#25D366;color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 20px rgba(9,30,45,.25);z-index:100;transition:transform .2s ease, box-shadow .2s ease;text-decoration:none}
  .zap-fab:hover{transform:scale(1.05);box-shadow:0 10px 28px rgba(37,211,102,.4)}
  .zap-fab:active{transform:scale(.96)}
  .zap-fab:focus-visible{outline:3px solid #fff;outline-offset:3px}
  .zap-fab svg{width:30px;height:30px;fill:currentColor}
  @media (max-width:640px){
    .zap-fab{width:52px;height:52px;bottom:16px;right:16px}
    .zap-fab svg{width:28px;height:28px}
  }
`;

const BODY_HTML = `
<header class="nav" id="nav">
  <div class="container nav-inner">
    <a href="#hero" class="logo" aria-label="Gisa, página inicial"><img src="${logoGisa}" alt="Gisa" /></a>
    <nav class="nav-links" id="navLinks" aria-label="Navegação principal">
      <a href="#hero">Início</a>
      <a href="#servicos">Serviços</a>
      <a href="#fundador">Sobre</a>
      <a href="#faq">Perguntas frequentes</a>
    </nav>
    <div class="nav-cta">
      <a href="#form" class="btn btn-primary">Quero uma avaliação gratuita</a>
      <button class="menu-btn" id="menuBtn" aria-label="Abrir menu" aria-expanded="false" aria-controls="navLinks">
        <svg class="i i-lg" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </div>
  </div>
</header>

<section class="hero" id="hero">
  <svg class="grain" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
    <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 0.04  0 0 0 0 0.12  0 0 0 0 0.18  0 0 0 0.08 0"/></filter>
    <rect width="100%" height="100%" filter="url(#n)"/>
  </svg>
  <div class="container hero-grid">
    <div class="hero-text">
      <span class="eyebrow">Facilities no Rio de Janeiro</span>
      <h1>Portaria, limpeza, controle de acesso e vigia da sua operação sob uma <span class="hl">única cultura de segurança</span>.</h1>
      <p class="lead"><span class="hl-gold">Mais de 30 anos</span> no setor de facilities, atendendo condomínios residenciais e operações corporativas no <span class="hl-gold">Rio de Janeiro</span>.</p>
      <div class="cta-row">
        <a href="#form" class="btn btn-primary btn-lg">Quero uma avaliação gratuita
          <svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
        <a href="#servicos" class="btn btn-outline btn-lg">Ver serviços</a>
      </div>
    </div>
    <div class="hero-photo">
      <div class="frame">
        <img src="${equipeImg}" alt="Equipe Gisa uniformizada em postura de trabalho, com rádio e crachá" loading="eager" />
      </div>
      <div class="badge" aria-hidden="true">
        <span class="num">30+</span>
        <span class="lab">anos no setor de facilities no Rio</span>
      </div>
    </div>
  </div>
</section>

<div class="marquee" aria-label="Benefícios">
  <div class="marquee-track" id="marqueeTrack">
    <span class="m-item"><span class="dot"></span>Controle</span>
    <span class="m-item"><span class="dot"></span>Tranquilidade</span>
    <span class="m-item"><span class="dot"></span>Confiança</span>
    <span class="m-item"><span class="dot"></span>Responsabilidade</span>
    <span class="m-item"><span class="dot"></span>Controle</span>
    <span class="m-item"><span class="dot"></span>Tranquilidade</span>
    <span class="m-item"><span class="dot"></span>Confiança</span>
    <span class="m-item"><span class="dot"></span>Responsabilidade</span>
  </div>
</div>

<section class="logos" aria-label="Quem confia na operação da Gisa">
  <div class="container">
    <div class="head"><span class="eyebrow">Quem confia na operação da Gisa</span></div>
    <div class="logo-grid">
      <div class="logo-item">CEASA RJ</div>
      <div class="logo-item">Unidas Locadora</div>
      <div class="logo-item">Unidas Seminovos</div>
      <div class="logo-item">Condomínio 1</div>
      <div class="logo-item">Condomínio 2</div>
      <div class="logo-item">Condomínio 3</div>
    </div>
  </div>
</section>

<section class="stats" aria-label="Números da Gisa">
  <div class="container">
    <div class="stats-grid">
      <div class="stat">
        <div class="num"><span>+</span><span class="count" data-to="30">0</span><span> anos</span></div>
        <div class="lab">de experiência no setor</div>
      </div>
      <div class="stat">
        <div class="num"><span>+</span><span class="count" data-to="15000">0</span><span> pessoas</span></div>
        <div class="lab">sob responsabilidade diária da Gisa</div>
      </div>
      <div class="stat">
        <div class="num"><span>+</span><span class="count" data-to="500000">0</span><span> m²</span></div>
        <div class="lab">de área operada no Rio de Janeiro</div>
      </div>
    </div>
  </div>
</section>

<section class="diag">
  <div class="container">
    <div class="head">
      <h2>Você <span class="hl">comanda o dia a dia</span> ou <span class="hl-red">apaga incêndio</span> em todos eles?</h2>
      <p class="lead sub">Cada frente atende por um contato diferente, um padrão diferente. Funciona enquanto você está em cima. Quando você precisa cuidar de outra coisa, alguma frente afrouxa.</p>
    </div>
    <p class="subhead">Cenas que provavelmente já apareceram na sua operação</p>
    <div class="scenes">
      <div class="scene"><span class="ico"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12h6m-3-3v6M14 19a4 4 0 0 1 8 0M18 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg></span><p>Porteiro do plantão noturno dormindo em serviço</p></div>
      <div class="scene"><span class="ico"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21V7l9-4 9 4v14M3 21h18M9 21v-6h6v6"/></svg></span><p>Portão de garagem deixado aberto após a passagem de um morador</p></div>
      <div class="scene"><span class="ico"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 8 12 3 3 8l9 5 9-5ZM3 8v8l9 5 9-5V8"/></svg></span><p>Encomenda jogada na portaria, caixas largadas sem registro</p></div>
      <div class="scene"><span class="ico"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="7" r="4"/><path d="M3 21a6 6 0 0 1 12 0M17 11l2 2 4-4"/></svg></span><p>Empresa terceirizada que faltou na escala e não repôs</p></div>
      <div class="scene"><span class="ico"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h18M3 12h18M3 17h12"/></svg></span><p>Recepção corporativa perdeu o controle de quem entrou em horário de pico</p></div>
      <div class="scene"><span class="ico"><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M1 17h2V7h11v10h2M16 17h2l3-4v-2h-5M5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/></svg></span><p>Caminhão de carga parado na portaria porque a triagem é manual</p></div>
    </div>
    <p class="close">A equipe está fazendo o que foi treinada pra fazer. O problema não é nenhuma frente isolada. É a operação inteira tratada como peças soltas.</p>
    <div class="section-cta">
      <a href="#form" class="btn btn-primary btn-lg">Quero um diagnóstico do meu prédio
        <svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
    </div>
  </div>
</section>

<section class="servicos" id="servicos">
  <div class="container">
    <div class="head">
      <span class="eyebrow">Serviços</span>
      <h2>Como a Gisa <span class="hl">atua no seu prédio</span></h2>
      <p class="lead sub">Uma só cultura de operação aplicada a cada frente, em cada turno, em todo o prédio.</p>
    </div>
    <div class="cards-4">
      <article class="svc">
        <div class="photo">
          <img src="${svcPortariaImg}" alt="Porteiro Gisa em frente a portaria de condomínio" loading="lazy" width="800" height="600" />
          <span class="ico"><svg class="i i-lg" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 4 4 6v15h6v-6h4v6h6V10"/><path d="M13 4v17"/><circle cx="11" cy="12" r=".8" fill="currentColor"/></svg></span>
        </div>
        <div class="body">
          <h3>Portaria e recepção</h3>
          <p>Identificam, autorizam e registram a entrada de moradores, visitantes, prestadores e fornecedores. Gerenciam o fluxo do prédio, recebem encomendas e são o primeiro ponto de contato de quem chega.</p>
        </div>
      </article>
      <article class="svc">
        <div class="photo">
          <img src="${svcLimpezaImg}" alt="Equipe de limpeza Gisa em frente a condomínio" loading="lazy" width="800" height="600" />
          <span class="ico"><svg class="i i-lg" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/></svg></span>
        </div>
        <div class="body">
          <h3>Limpeza</h3>
          <p>Conservação e higienização das áreas comuns com rotina adaptada a cada tipo de espaço. Procedimentos definidos por frequência, tipo de superfície e perfil de uso do ambiente.</p>
        </div>
      </article>
      <article class="svc">
        <div class="photo">
          <img src="${svcControleImg}" alt="Profissional Gisa em controle de acesso com rádio" loading="lazy" width="800" height="600" />
          <span class="ico"><svg class="i i-lg" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M7 12h10"/></svg></span>
        </div>
        <div class="body">
          <h3>Controle de acesso</h3>
          <p>Monitoramento e gestão dos pontos críticos de entrada: garagem, área de carga, serviços e perímetro externo. Cada acesso opera com procedimento próprio, por turno e perfil de entrada.</p>
        </div>
      </article>
      <article class="svc">
        <div class="photo">
          <img src="${svcVigiaImg}" alt="Vigia Gisa fazendo registro de ronda" loading="lazy" width="800" height="600" />
          <span class="ico"><svg class="i i-lg" viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg></span>
        </div>
        <div class="body">
          <h3>Vigia</h3>
          <p>Proteção patrimonial por meio de rondas programadas e presença ativa no perímetro. Profissionais treinados para observar, registrar e acionar quando necessário.</p>
        </div>
      </article>
    </div>
    <div class="section-cta">
      <a href="#form" class="btn btn-primary btn-lg">Solicitar proposta de serviços
        <svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
    </div>
  </div>
</section>

<section class="fund" id="fundador">
  <div class="container fund-grid">
    <div class="fund-photo">
      <div class="frame">
        <img src="${lawrenceImg}" alt="Lawrence Vale em frente a uma operação Gisa no Rio de Janeiro" loading="lazy" />
      </div>
    </div>
    <div class="fund-text">
      <span class="eyebrow">Quem está por trás</span>
      <h2>Conheça o Lawrence</h2>
      <p>Lawrence Vale começou no setor de facilities aos 15 anos, acompanhando o pai na empresa dele. Hoje soma mais de 30 anos de experiência operando prédios de todo tipo no Rio de Janeiro, à frente da sua própria empresa.</p>
      <p>A Gisa nasceu dessa trajetória consolidada e foi estruturada para tratar facilities como uma operação única, com cultura e supervisão consistentes.</p>
      
      <div class="cta-row">
        <a href="https://wa.me/5521964628256" target="_blank" rel="noopener" class="btn btn-primary">Conversar pelo WhatsApp
          <svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </div>
    </div>
  </div>
</section>

<section class="plano">
  <div class="container">
    <div class="head">
      <h2>Como funciona o <span class="hl">início da operação</span> com a Gisa</h2>
      <p class="lead sub">Três etapas, do diagnóstico inicial ao primeiro turno em funcionamento.</p>
    </div>
    <div class="steps">
      <div class="step">
        <div class="badge">01</div>
        <h3>Avaliação gratuita</h3>
        <p>Visitamos o seu prédio, conversamos com o responsável e observamos a operação no dia a dia. Você recebe um diagnóstico escrito com os pontos críticos identificados.</p>
      </div>
      <div class="step">
        <div class="badge">02</div>
        <h3>Proposta comercial</h3>
        <p>Com base no diagnóstico, montamos uma proposta com escopo, transição e custos detalhados. Você analisa, tira dúvidas e decide o que faz sentido para o seu prédio.</p>
      </div>
      <div class="step">
        <div class="badge">03</div>
        <h3>Início da operação</h3>
        <p>A Gisa assume o dia a dia com equipe alocada, supervisor designado e canal direto de comunicação. A partir desse ponto, a operação passa a ter um único responsável.</p>
      </div>
    </div>
    <div class="section-cta">
      <a href="#form" class="btn btn-primary btn-lg">Começar pela avaliação gratuita
        <svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
    </div>
  </div>
</section>

<section class="transf">
  <div class="container">
    <div class="head">
      <h2>O que <span class="hl">muda na sua rotina</span> quando a Gisa assume a operação</h2>
    </div>
    <div class="transf-grid">
      <div class="tcol antes">
        <span class="tag">Antes</span>
        <p>Você para de coordenar fornecedores diferentes, vencimentos cruzados, escopos que não se encaixam e supervisões que não conversam entre si.</p>
        <svg class="arrow i i-lg" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </div>
      <div class="tcol ponte">
        <span class="tag">Estrutura</span>
        <p>Passa a ter um único interlocutor responsável pela operação inteira. Um relatório consolidado, um protocolo, uma supervisão.</p>
        <svg class="arrow i i-lg" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </div>
      <div class="tcol depois">
        <span class="tag">Depois</span>
        <p>O dia a dia deixa de ser uma sucessão de incêndios a apagar e passa a operar dentro de um padrão definido. Você deixa de gerenciar fornecedores soltos e passa a administrar de fato, com tempo e clareza para decidir o que importa.</p>
      </div>
    </div>
    <div class="section-cta">
      <a href="#form" class="btn btn-primary btn-lg">Quero essa rotina no meu prédio
        <svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
    </div>
  </div>
</section>

<section id="form">
  <div class="container cta-grid">
    <div class="cta-text">
      <span class="eyebrow">Avaliação gratuita</span>
      <h2>Sua operação merece um <span class="hl-gold">padrão único</span>. Comece pela avaliação gratuita.</h2>
      <p class="sub">Preencha o formulário e a nossa equipe entrará em contato o quanto antes pelo WhatsApp para agendar a visita.</p>
      <ul class="cta-bullets">
        <li><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Visita ao local, sem custo</li>
        <li><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Diagnóstico escrito dos pontos críticos</li>
        <li><svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Sem compromisso de contratação</li>
      </ul>
    </div>
    <form class="form-card" id="leadForm" novalidate aria-label="Solicitar avaliação gratuita">
      <h3>Avaliação gratuita</h3>
      <div class="field" data-field="nome">
        <label for="f-nome">Nome</label>
        <input id="f-nome" name="nome" type="text" autocomplete="name" placeholder="Seu nome completo…" required maxlength="100" />
        <span class="err">Informe seu nome.</span>
      </div>
      <div class="field" data-field="whatsapp">
        <label for="f-zap">WhatsApp</label>
        <input id="f-zap" name="whatsapp" type="tel" autocomplete="tel" inputmode="tel" placeholder="(21) 99999-9999" required maxlength="16" />
        <span class="err">Informe um WhatsApp válido.</span>
      </div>
      <div class="field" data-field="tipo">
        <label for="f-tipo">Tipo de operação</label>
        <select id="f-tipo" name="tipo" required>
          <option value="" disabled selected>Selecione…</option>
          <option>Condomínio residencial</option>
          <option>Operação corporativa</option>
        </select>
        <span class="err">Selecione o tipo de operação.</span>
      </div>
      <div class="field" data-field="predio">
        <label for="f-predio">Nome do prédio ou empresa</label>
        <input id="f-predio" name="predio" type="text" placeholder="Ex: Edifício Vista Mar" required maxlength="120" />
        <span class="err">Informe o nome do prédio ou empresa.</span>
      </div>
      <div class="submit-row">
        <button type="submit" class="btn btn-primary btn-lg">Quero uma avaliação gratuita</button>
      </div>
      <p class="sr" aria-live="polite" id="formStatus" style="position:absolute;left:-9999px"></p>
    </form>
  </div>
</section>

<section class="faq" id="faq">
  <div class="container">
    <div class="head">
      <h2>Perguntas frequentes</h2>
    </div>
    <div class="faq-list">
      <details class="qa"><summary>A Gisa atende condomínio residencial e operação corporativa ao mesmo tempo?<span class="ic" aria-hidden="true"><svg class="i" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg></span></summary><div class="ans">Sim. A estrutura foi desenhada pra operar com cultura única em qualquer tipo de prédio. O que muda entre um condomínio e uma operação corporativa é o perfil da equipe e o protocolo.</div></details>
      <details class="qa"><summary>Vocês fazem vigilância armada ou monitoramento eletrônico?<span class="ic" aria-hidden="true"><svg class="i" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg></span></summary><div class="ans">Não. A Gisa é uma empresa de facilities com cultura de segurança, não de vigilância armada nem monitoramento eletrônico. Atuamos com portaria, limpeza, controle de acesso e vigia patrimonial e de rondas.</div></details>
      <details class="qa"><summary>Como funciona a transição quando já existem fornecedores no local?<span class="ic" aria-hidden="true"><svg class="i" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg></span></summary><div class="ans">A proposta inclui um plano de transição com cronograma definido. Em alguns casos a Gisa assume tudo de uma vez. Em outros, começa por uma frente crítica e expande. A decisão é caso a caso.</div></details>
      <details class="qa"><summary>Posso contratar só uma frente em vez das quatro?<span class="ic" aria-hidden="true"><svg class="i" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg></span></summary><div class="ans">Pode. A operação integrada é o que a Gisa entrega melhor, mas é comum começar por uma frente (portaria, em geral) e expandir conforme a relação amadurece.</div></details>
      <details class="qa"><summary>Vocês atendem qual região do Rio de Janeiro?<span class="ic" aria-hidden="true"><svg class="i" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg></span></summary><div class="ans">A Gisa atende todo o estado do Rio de Janeiro. Com sede em Campo Grande, operamos em condomínios e operações corporativas em diferentes regiões.</div></details>
      <details class="qa"><summary>O que está incluído na avaliação gratuita?<span class="ic" aria-hidden="true"><svg class="i" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg></span></summary><div class="ans">Visita ao local, conversa com o responsável e análise das frentes que fazem sentido pra você. Sem compromisso de contratação.</div></details>
    </div>
  </div>
</section>

<section class="close-sec">
  <div class="container">
    <div class="close-inner">
      <h3>Vamos conversar sobre a sua operação?</h3>
      <a href="#form" class="btn btn-primary btn-lg">Quero uma avaliação gratuita
        <svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </a>
    </div>
  </div>
</section>

<footer>
  <div class="container">
    <div class="foot-grid">
      <div class="col">
        <div class="logo">Gisa<span class="dot" style="color:var(--accent)">.</span></div>
        <div class="stack" style="margin-top:14px">
          <p>Gisa Segurança Eletrônica e Monitoramento LTDA</p>
          <p>CNPJ: 28.363.155/0001-01</p>
          <p>Campo Grande, Rio de Janeiro/RJ</p>
        </div>
      </div>
      <div class="col">
        <div class="eyebrow">Navegação</div>
        <div class="stack">
          <a href="#hero">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#fundador">Sobre</a>
          <a href="#faq">Perguntas frequentes</a>
        </div>
      </div>
      <div class="col">
        <div class="eyebrow">Contato</div>
        <div class="stack">
          <a href="https://wa.me/5521964628256" target="_blank" rel="noopener">
            <svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-1 4 8.5 8.5 0 0 1-7.5 4.5 8.4 8.4 0 0 1-4-1L3 21l2-5a8.5 8.5 0 1 1 16-4.5z"/></svg>
            WhatsApp: (21)&nbsp;96462-8256
          </a>
          <a href="https://www.instagram.com/gisagrupo/" target="_blank" rel="noopener">
            <svg class="i" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg>
            Instagram: @gisagrupo
          </a>
        </div>
      </div>
    </div>
    <p class="bottom-bar">© 2026 Gisa Segurança Eletrônica e Monitoramento LTDA. Todos os direitos reservados.</p>
  </div>
</footer>

<a class="zap-fab" href="https://wa.me/5521964628256" target="_blank" rel="noopener noreferrer" aria-label="Falar pelo WhatsApp">
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.61.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.18 2.095 3.195 5.076 4.485.711.3 1.26.495 1.692.63.711.225 1.36.195 1.871.121.571-.091 1.758-.721 2.006-1.413.255-.69.255-1.273.18-1.413-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.78 0-3.524-.48-5.045-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.86 9.86 0 0 1-1.516-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.95 11.95 0 0 0 5.71 1.447h.006c6.583 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"/></svg>
</a>
`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gisa — Portaria, limpeza, controle de acesso e vigia sob uma única cultura de segurança" },
      { name: "description", content: "Mais de 30 anos no setor de facilities, atendendo condomínios residenciais e operações corporativas no Rio de Janeiro." },
      { property: "og:title", content: "Gisa — Facilities no Rio de Janeiro" },
      { property: "og:description", content: "Portaria, limpeza, controle de acesso e vigia sob uma única cultura de segurança." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: GisaLanding,
});

function GisaLanding() {
  useEffect(() => {
    const root = document.querySelector(".gisa");
    if (!root) return;
    const $ = <T extends Element = HTMLElement>(sel: string) =>
      root.querySelector(sel) as T | null;
    const $$ = (sel: string) => Array.from(root.querySelectorAll(sel)) as HTMLElement[];

    const nav = $("#nav") as HTMLElement | null;
    const onScroll = () => {
      if (nav) nav.classList.toggle("scrolled", window.scrollY > 8);
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const menuBtn = $("#menuBtn") as HTMLButtonElement | null;
    const navLinks = $("#navLinks") as HTMLElement | null;
    const onMenu = () => {
      if (!navLinks || !menuBtn) return;
      const open = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    };
    const onNavClick = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.tagName === "A" && navLinks && menuBtn) {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    };
    menuBtn?.addEventListener("click", onMenu);
    navLinks?.addEventListener("click", onNavClick);

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const formatNum = (n: number) => n.toLocaleString("pt-BR");
    const animateCount = (el: HTMLElement) => {
      const to = parseInt(el.getAttribute("data-to") || "0", 10) || 0;
      if (prefersReduced) {
        el.textContent = formatNum(to);
        return;
      }
      const start = performance.now();
      const dur = 1200;
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - t, 4);
        el.textContent = formatNum(Math.round(to * eased));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              animateCount(e.target as HTMLElement);
              io?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.4 },
      );
      $$(".count").forEach((el) => io!.observe(el));
    } else {
      $$(".count").forEach(animateCount);
    }

    const zap = $("#f-zap") as HTMLInputElement | null;
    const onZap = () => {
      if (!zap) return;
      const d = zap.value.replace(/\D/g, "").slice(0, 11);
      let out = "";
      if (d.length === 0) out = "";
      else if (d.length < 3) out = "(" + d;
      else if (d.length <= 7) out = "(" + d.slice(0, 2) + ") " + d.slice(2);
      else if (d.length <= 10) out = "(" + d.slice(0, 2) + ") " + d.slice(2, 6) + "-" + d.slice(6);
      else out = "(" + d.slice(0, 2) + ") " + d.slice(2, 7) + "-" + d.slice(7);
      zap.value = out;
    };
    zap?.addEventListener("input", onZap);

    const form = $("#leadForm") as HTMLFormElement | null;
    const setInvalid = (name: string, invalid: boolean) => {
      const f = form?.querySelector('[data-field="' + name + '"]') as HTMLElement | null;
      if (f) f.classList.toggle("invalid", invalid);
    };
    const onSubmit = (e: Event) => {
      e.preventDefault();
      if (!form) return;
      const f = form as HTMLFormElement & Record<string, HTMLInputElement>;
      const nome = f.nome.value.trim();
      const whatsapp = f.whatsapp.value.trim();
      const tipo = (f.tipo as unknown as HTMLSelectElement).value.trim();
      const predio = f.predio.value.trim();
      const digits = whatsapp.replace(/\D/g, "");

      let ok = true;
      if (!nome) { setInvalid("nome", true); ok = false; } else setInvalid("nome", false);
      if (digits.length < 10) { setInvalid("whatsapp", true); ok = false; } else setInvalid("whatsapp", false);
      if (!tipo) { setInvalid("tipo", true); ok = false; } else setInvalid("tipo", false);
      if (!predio) { setInvalid("predio", true); ok = false; } else setInvalid("predio", false);

      if (!ok) {
        const first = form.querySelector(".invalid input, .invalid select") as HTMLElement | null;
        first?.focus();
        return;
      }
      const msg =
        "Olá! Vim pelo site solicitar uma avaliação gratuita.\n\n" +
        "Nome: " + nome + "\n" +
        "WhatsApp: " + whatsapp + "\n" +
        "Tipo de operação: " + tipo + "\n" +
        "Prédio/Empresa: " + predio;
      const url = "https://wa.me/5521964628256?text=" + encodeURIComponent(msg);
      const w = window.open(url, "_blank");
      if (!w) window.location.href = url;
    };
    form?.addEventListener("submit", onSubmit);

    const clearInvalid = (el: Element) => {
      const f = (el as HTMLElement).closest(".field");
      if (f) f.classList.remove("invalid");
    };
    const fieldEls = form ? Array.from(form.querySelectorAll("input, select")) : [];
    const onFieldChange = (e: Event) => clearInvalid(e.target as Element);
    fieldEls.forEach((el) => {
      el.addEventListener("input", onFieldChange);
      el.addEventListener("change", onFieldChange);
    });

    return () => {
      document.removeEventListener("scroll", onScroll);
      menuBtn?.removeEventListener("click", onMenu);
      navLinks?.removeEventListener("click", onNavClick);
      zap?.removeEventListener("input", onZap);
      form?.removeEventListener("submit", onSubmit);
      io?.disconnect();
      fieldEls.forEach((el) => {
        el.removeEventListener("input", onFieldChange);
        el.removeEventListener("change", onFieldChange);
      });
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="gisa" dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
    </>
  );
}
