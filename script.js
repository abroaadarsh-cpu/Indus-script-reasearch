/* ===== Indus Civilization — script.js ===== */

/* ================= SETTINGS ================= */
const NS = "indus-civ-site-786";                  // change to something unique for your visitor counter
const API = "https://abacus.jasoncameron.dev";
const PASSWORD = "786786111";
const MAX_UPLOAD_MB = 25;                         // bigger files: use a link instead
const WM = f => "https://commons.wikimedia.org/wiki/Special:FilePath/" + f + "?width=1400";

const ICONS = {
  city:'<path d="M4 21V8l8-4 8 4v13M4 21h16M9 21v-5h6v5M8 11h2M14 11h2"/>',
  pot:'<path d="M9 3h6M10 3v2c-3 1-5 4-5 8 0 4 3 7 7 7s7-3 7-7c0-4-2-7-5-8V3M7 10h10"/>',
  ship:'<path d="M12 3v11M12 4l6 8h-6M12 6L7 12h5M3 16h18l-2 4H5z"/>',
  script:'<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 8h3M13 8h3M8 12h8M8 16h3M14 16h2"/>',
  leaf:'<circle cx="12" cy="12" r="9"/><path d="M12 18c-3-2-4-5-4-8 3 0 6 1 6 5M12 18V9"/>',
  cal:'<rect x="4" y="5" width="16" height="15" rx="1"/><path d="M4 10h16M8 3v4M16 3v4"/>',
  pin:'<path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  people:'<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-4 3-6 6-6s6 2 6 6M15 14c3 0 6 2 6 6"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>'
};

const DEFAULT = {
  site:{name:"INDUS CIVILIZATION",tag:"PEOPLE · CITIES · LEGACY",logo:""},
  hero:{kicker:"THE ANCIENT WONDER OF SOUTH ASIA",title:"Indus Civilization",dates:"c. 2600 – 1900 BCE",
    text:"A remarkable urban civilization known for its advanced cities, trade, and unique culture, which flourished in the Indus River Valley thousands of years ago.",
    btn:"Explore the Civilization →",bg:WM("Mohenjo-daro.jpg"),seal:""},
  cards:[
    {icon:"city",title:"Major Cities",text:"Explore Harappa, Mohenjo-daro and other great cities.",link:"#/cities"},
    {icon:"pot",title:"Daily Life",text:"Homes, food, clothing and culture of the people.",link:"#/life"},
    {icon:"ship",title:"Trade & Economy",text:"Long-distance trade and skilled craftsmanship.",link:"#/trade"},
    {icon:"script",title:"Indus Script",text:"The undeciphered script of a great civilization.",link:"#/script"},
    {icon:"leaf",title:"Achievements",text:"Town planning, drainage, weights and more.",link:"#/achievements"}],
  about:{title:"Advanced Cities, Lasting Legacy",
    text:"The Indus Civilization, also known as the Harappan Civilization, was one of the world's earliest urban cultures. With well-planned cities, sophisticated drainage systems, and a thriving trade network, it remains one of the most fascinating civilizations in human history."},
  slides:[{img:WM("Great_bath_view_Mohenjodaro.JPG"),caption:"Mohenjo-daro – The Great Bath"},
          {img:WM("Mohenjo-daro-2010.jpg"),caption:"Mohenjo-daro – Citadel Ruins"},
          {img:WM("Great_Bath,_Mohenjo-daro_20160806_JYN-03.jpg"),caption:"Great Bath – Tank and Stairs"}],
  facts:[{icon:"cal",label:"Time Period",value:"c. 2600 – 1900 BCE"},
    {icon:"pin",label:"Area",value:"Indus River Valley (modern Pakistan and northwest India)"},
    {icon:"city",label:"Major Cities",value:"Harappa, Mohenjo-daro, Dholavira, Rakhigarhi, Lothal"},
    {icon:"people",label:"Known For",value:"Urban planning, drainage, trade, craftsmanship, script"}],
  scriptSample:{title:"Indus Script Sample",glyph:"𑀓𑀺𑀢𑀺𑀓𑀺𑀢𑀺",note:"Indus Font is available for researchers and enthusiasts.",fontUrl:""},
  topics:{
    cities:{title:"Major Cities",intro:"Planned towns on a grid, with brick houses, wells and covered drains.",items:[
      {title:"Mohenjo-daro",text:"In Sindh, Pakistan. Known for the Great Bath and its street grid.",img:WM("Mohenjo-daro-2010.jpg")},
      {title:"Harappa",text:"In Punjab, Pakistan. The first site excavated, which gave the culture its name.",img:""},
      {title:"Dholavira",text:"In Gujarat, India. Famous for its water reservoirs and channels.",img:""},
      {title:"Rakhigarhi",text:"In Haryana, India. One of the largest known Indus sites.",img:""},
      {title:"Lothal",text:"In Gujarat, India. Known for its brick dock and bead workshops.",img:""}]},
    life:{title:"Daily Life",intro:"Homes, food, clothing and culture of the people.",items:[
      {title:"Homes",text:"Brick houses built around courtyards, many with their own bathing rooms.",img:""},
      {title:"Food",text:"Wheat, barley, peas, dairy and fish. Cattle were central to farming.",img:""},
      {title:"Crafts",text:"Painted pottery, bead jewellery and terracotta figures.",img:""}]},
    trade:{title:"Trade & Economy",intro:"Long-distance trade and skilled craftsmanship.",items:[
      {title:"Seals and weights",text:"Stone seals marked goods. Standard weights kept trade fair.",img:""},
      {title:"Beads and stone",text:"Carnelian and shell beads were made in workshops and traded far away.",img:""},
      {title:"Sea routes",text:"Goods moved by river and sea towards Mesopotamia.",img:""}]},
    achievements:{title:"Achievements",intro:"Town planning, drainage, weights and more.",items:[
      {title:"Town planning",text:"Streets laid out on a grid, with separate citadel and lower town.",img:""},
      {title:"Drainage",text:"Covered drains ran along streets and linked to houses.",img:""},
      {title:"Standard bricks and weights",text:"Bricks and weights followed fixed proportions across distant cities.",img:""}]},
    script:{title:"Indus Script",intro:"Short signs carved on seals and pottery. The script has not been deciphered.",items:[
      {title:"Seals",text:"Most inscriptions are short and appear with animal motifs.",img:""},
      {title:"Open questions",text:"Scholars still debate what language the signs record.",img:""}]}
  },
  articles:[{title:"Sample research article",date:"2026",summary:"Add your first article from the CMS page.",link:"",img:""}],
  videos:[{title:"Sample video",url:""}],
  library:[{title:"Sample book or PDF",author:"",kind:"PDF",file:"",cover:"",desc:"Upload a PDF or paste a link from the CMS."}],
  websites:[{title:"Sample website",url:"",desc:"Add useful websites from the CMS."}],
  gallery:[{img:"",title:"Harappa"},{img:WM("Great_bath_view_Mohenjodaro.JPG"),title:"Great Bath (Mohenjo-daro)"},{img:WM("Dancing_girl.jpg"),title:"Bronze Dancing Girl"},{img:"",title:"Indus Seal"},{img:"",title:"Pottery"},{img:"",title:"Dholavira"}],
  sindhu:{title:"Sindhu Prakrit",text:"Write about Sindhu Prakrit here: the language, its history, and your research.",points:[{title:"Language",text:"Add a short point here."},{title:"Research",text:"Add a short point here."}]},
  aboutPage:{title:"About",text:"Dedicated to reviving the voice of the Indus, reconnecting our civilizational roots through research and scholarship.",img:""},
  contact:{intro:"Questions, collaborations and feedback are welcome.",email:"your@email.com",phone:"",address:""},
  social:[{name:"WhatsApp",url:""},{name:"Facebook",url:""},{name:"YouTube",url:""},{name:"LinkedIn",url:""},{name:"Google Scholar",url:""},{name:"Academia",url:""},{name:"X",url:""},{name:"Instagram",url:""}],
  footer:{about:"Our Past · Our Heritage · Our Identity",tag:"Discover the Past. Understand the Present. Preserve the Future."}
};
let data = JSON.parse(JSON.stringify(DEFAULT));
const TOPICS = ["cities","life","trade","achievements","script"];

/* ================= HELPERS ================= */
const $ = id => document.getElementById(id);
const qa = (s,f) => document.querySelectorAll(s).forEach(f);
const esc = s => String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const safe = u => { u=String(u||"").trim(); return /^(https?:|mailto:|tel:|#|\/)/i.test(u)||/^[\w.\-\/]+$/.test(u) ? esc(u) : "#"; };
const ytId = u => (String(u).match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/)||[])[1];
const im = (src,alt) => src ? `<img src="${safe(src)}" alt="${esc(alt)}" loading="lazy" onerror="this.remove()">` : "";
const icon = n => ICONS[n] ? `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n]}</svg>` : esc(n);
const telHref = p => "tel:" + String(p).replace(/[^\d+]/g,"");

/* ================= RENDER ================= */
let slideI = 0, slideT;
function videoHTML(v){
  const id = ytId(v.url);
  if(id) return `<iframe src="https://www.youtube-nocookie.com/embed/${id}" title="${esc(v.title)}" loading="lazy" allowfullscreen></iframe>`;
  return `<video controls preload="metadata" src="${safe(v.url)}"></video>`;
}
const videoCard = v => `<div class="card"><div class="vid">${videoHTML(v)}</div><div class="bd"><h3>${esc(v.title)}</h3></div></div>`;
const artCard = a => `<article class="card"><div class="im">${im(a.img,a.title)}</div><div class="bd"><small>${esc(a.date)}</small><h3>${esc(a.title)}</h3><p>${esc(a.summary)}</p>${a.link?`<a class="more" href="${safe(a.link)}" target="_blank" rel="noopener">Read →</a>`:""}</div></article>`;
const libCard = b => `<article class="card"><div class="im">${im(b.cover,b.title)}</div><div class="bd"><span class="badge">${esc(b.kind||"PDF")}</span>${b.author?`<small>${esc(b.author)}</small>`:""}<h3>${esc(b.title)}</h3><p>${esc(b.desc)}</p>${b.file?`<a class="more" href="${safe(b.file)}" target="_blank" rel="noopener">Open / Download →</a>`:""}</div></article>`;
const webCard = w => `<article class="card"><div class="bd"><h3>${esc(w.title)}</h3><p>${esc(w.desc)}</p>${w.url?`<a class="more" href="${safe(w.url)}" target="_blank" rel="noopener">Visit website →</a>`:""}</div></article>`;
const figCard = g => `<figure>${im(g.img,g.title)}<figcaption>${esc(g.title)}</figcaption></figure>`;
const EMPTY = t => `<div class="empty">${t}</div>`;

function renderAll(){
  const s = data.site;
  $("siteName").textContent = s.name; $("siteTag").textContent = s.tag; $("fCopy").textContent = s.name.replace(/\b(\w)(\w*)/g,(m,a,b)=>a.toUpperCase()+b.toLowerCase());
  $("sBtn").innerHTML = icon("search");
  const mark = $("logoMark");
  if(s.logo){ mark.className="mark has-img"; mark.innerHTML=`<img src="${safe(s.logo)}" alt="Logo" onerror="this.parentNode.className='mark';this.parentNode.textContent='🐂'">`; $("favicon").href = s.logo; }
  else { mark.className="mark"; mark.textContent="🐂"; $("favicon").href="data:,"; }

  const h = data.hero, hero = document.querySelector(".hero");
  $("hKicker").textContent=h.kicker; $("hTitle").textContent=h.title; $("hDates").textContent=h.dates; $("hText").textContent=h.text; $("hBtn").textContent=h.btn;
  if(h.bg){ hero.style.backgroundImage=`url("${h.bg}")`; hero.classList.remove("noimg"); } else { hero.style.backgroundImage=""; hero.classList.add("noimg"); }
  $("seal").innerHTML = h.seal ? `<img src="${safe(h.seal)}" alt="Indus seal" onerror="this.remove()">` : "🐂";

  $("strip").innerHTML = data.cards.map(c=>`<a href="${safe(c.link)}"><span class="ic">${icon(c.icon)}</span><span><h3>${esc(c.title)}</h3><p>${esc(c.text)}</p><em>Learn more →</em></span></a>`).join("");
  $("aTitle").textContent=data.about.title; $("aText").textContent=data.about.text;
  $("facts").innerHTML = data.facts.map(f=>`<div class="fact"><span class="ic">${icon(f.icon)}</span><div><b>${esc(f.label)}</b><span>${esc(f.value)}</span></div></div>`).join("");
  slideI=0; showSlide(); clearInterval(slideT);
  slideT = setInterval(()=>{ slideI=(slideI+1)%Math.max(1,data.slides.length); showSlide(); },5000);

  $("homeGal").innerHTML = data.gallery.slice(0,6).map(figCard).join("");
  $("allGal").innerHTML = data.gallery.map(figCard).join("") || EMPTY("No gallery items yet.");

  const arts = data.articles.filter(a=>a.title);
  $("homeArticles").innerHTML = arts.slice(0,3).map(artCard).join("") || EMPTY("No articles yet.");
  $("allArticles").innerHTML = arts.map(artCard).join("") || EMPTY("No articles yet.");

  const vids = data.videos.filter(v=>v.url);
  $("homeVideos").innerHTML = vids.slice(0,3).map(videoCard).join("") || EMPTY("No videos yet.");
  $("allVideos").innerHTML = vids.map(videoCard).join("") || EMPTY("No videos yet.");

  const libs = data.library.filter(b=>b.title);
  $("homeLibrary").innerHTML = libs.slice(0,3).map(libCard).join("") || EMPTY("No books or PDFs yet.");
  $("allLibrary").innerHTML = libs.map(libCard).join("") || EMPTY("No books or PDFs yet.");
  $("allWebsites").innerHTML = data.websites.filter(w=>w.title).map(webCard).join("") || EMPTY("No websites yet.");

  const sc = data.scriptSample;
  qa(".scTitle",e=>e.textContent=sc.title); qa(".scGlyph",e=>e.textContent=sc.glyph); qa(".scNote",e=>e.textContent=sc.note);
  qa(".scBtn",e=>{ e.hidden=!sc.fontUrl; e.href=sc.fontUrl?safe(sc.fontUrl):"#"; e.setAttribute("download",""); });

  $("spTitle").textContent=data.sindhu.title; $("spText").textContent=data.sindhu.text;
  $("spPoints").innerHTML = data.sindhu.points.map(p=>`<div class="card"><div class="bd"><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p></div></div>`).join("");
  $("abTitle").textContent=data.aboutPage.title; $("abText").textContent=data.aboutPage.text; $("abImg").innerHTML = im(data.aboutPage.img,"");

  // contact: phone and email are public
  const c = data.contact;
  $("ctIntro").textContent = c.intro;
  $("ctInfo").innerHTML = [
    c.email && `<p><b>Email</b><br><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></p>`,
    c.phone && `<p><b>Phone</b><br><a href="${esc(telHref(c.phone))}">${esc(c.phone)}</a></p>`,
    c.address && `<p><b>Address</b><br>${esc(c.address)}</p>`
  ].filter(Boolean).join("") || "<p>Contact details coming soon.</p>";
  const plats = data.social.filter(x=>x.url);
  $("ctPlatforms").innerHTML = plats.map(x=>`<a href="${safe(x.url)}" target="_blank" rel="noopener">${esc(x.name)}</a>`).join("") || "<span class='note'>No links added yet.</span>";
  $("fContact").innerHTML = [c.email&&`<p><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></p>`, c.phone&&`<p><a href="${esc(telHref(c.phone))}">${esc(c.phone)}</a></p>`, c.address&&`<p>${esc(c.address)}</p>`].filter(Boolean).join("");
  $("fSocial").innerHTML = plats.map(x=>`<li><a href="${safe(x.url)}" target="_blank" rel="noopener">${esc(x.name)}</a></li>`).join("") || "<li>Coming soon.</li>";
  $("fAbout").textContent = data.footer.about; $("fTag").textContent = data.footer.tag; $("fName").textContent = "Indus Civilization";
}
function renderTopic(k){
  const t = data.topics[k];
  $("tTitle").textContent=t.title; $("tIntro").textContent=t.intro;
  $("tItems").innerHTML = t.items.map(i=>`<article class="card"><div class="im">${im(i.img,i.title)}</div><div class="bd"><h3>${esc(i.title)}</h3><p>${esc(i.text)}</p></div></article>`).join("") || EMPTY("Nothing here yet.");
  $("tScript").hidden = k!=="script";
}
function showSlide(){
  const s = data.slides[slideI] || {img:"",caption:""}, e = $("slideImg");
  e.style.visibility = "visible";
  e.src = s.img || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='3'%3E%3C/svg%3E"; e.alt = s.caption;
  $("slideCap").textContent = s.caption;
  $("dots").innerHTML = data.slides.map((_,i)=>`<button class="${i===slideI?'on':''}" data-i="${i}" aria-label="Slide ${i+1}"></button>`).join("");
}
$("dots").addEventListener("click",e=>{ const b=e.target.closest("button"); if(b){ slideI=+b.dataset.i; showSlide(); } });
$("mSend").onclick = () => { location.href = `mailto:${encodeURIComponent(data.contact.email)}?subject=${encodeURIComponent("Message from website: "+$("mName").value)}&body=${encodeURIComponent($("mBody").value)}`; };
$("menuBtn").onclick = () => $("nav").classList.toggle("open");
$("nav").addEventListener("click",e=>{ if(e.target.closest("a")) $("nav").classList.remove("open"); });

/* ================= SEARCH ================= */
$("sBtn").onclick = () => { $("sBar").hidden = !$("sBar").hidden; if(!$("sBar").hidden) $("sIn").focus(); };
$("sIn").oninput = () => {
  const q = $("sIn").value.trim().toLowerCase(), out = [];
  if(q.length<2){ $("sres").innerHTML=""; return; }
  const add = (t,p,l,x) => { if(t && (t+" "+x).toLowerCase().includes(q)) out.push(`<a href="#/${p}"><b>${esc(t)}</b><small>${esc(l)}</small></a>`); };
  data.articles.forEach(a=>add(a.title,"articles","Research Article",a.summary));
  data.videos.forEach(v=>add(v.title,"videos","Video",""));
  data.library.forEach(b=>add(b.title,"library",b.kind||"Book",(b.author||"")+" "+(b.desc||"")));
  data.websites.forEach(w=>add(w.title,"websites","Website",w.desc));
  data.gallery.forEach(g=>add(g.title,"gallery","Gallery",""));
  TOPICS.forEach(k=>{ const t=data.topics[k]; add(t.title,k,"Page",t.intro); t.items.forEach(i=>add(i.title,k,t.title,i.text)); });
  add(data.sindhu.title,"sindhu","Sindhu Prakrit",data.sindhu.text);
  add(data.aboutPage.title,"about","About",data.aboutPage.text);
  $("sres").innerHTML = out.slice(0,12).join("") || "<p style='color:#9fb0ba;padding:10px 0;font-size:14px'>Nothing found. Try another word.</p>";
};
$("sres").addEventListener("click",e=>{ if(e.target.closest("a")){ $("sBar").hidden=true; $("sIn").value=""; $("sres").innerHTML=""; } });

/* ================= ROUTER ================= */
const PAGES = ["home","about","gallery","articles","videos","library","websites","sindhu","contact","cms",...TOPICS];
function route(){
  const p = (location.hash.replace(/^#\/?/,"")||"home").split("?")[0], page = PAGES.includes(p)?p:"home";
  const isT = TOPICS.includes(page);
  qa(".page",s=>s.hidden = s.dataset.page !== (isT?"topic":page));
  qa("nav a[data-p]",a=>a.classList.toggle("on",a.dataset.p===page));
  $("ddResearch").classList.toggle("on",["articles","videos","library","websites","sindhu"].includes(page));
  if(isT) renderTopic(page);
  if(page==="cms") renderCms();
  window.scrollTo(0,0);
}
window.addEventListener("hashchange",route);

/* ================= LOAD ================= */
renderAll(); route();
fetch("content.json?v="+Date.now()).then(r=>r.ok?r.json():null).then(j=>{ if(j){ data=Object.assign(data,j); renderAll(); route(); } }).catch(()=>{});

/* ================= ANALYTICS ================= */
const pad = n => String(n).padStart(2,"0");
const ymd = d => d.getUTCFullYear()+"-"+pad(d.getUTCMonth()+1)+"-"+pad(d.getUTCDate());
const utc = (y,m,d) => new Date(Date.UTC(y,m,d));
const monday = d => { const x=utc(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()); x.setUTCDate(x.getUTCDate()-((x.getUTCDay()+6)%7)); return x; };
const kDay = d => "d-"+ymd(d), kWeek = d => "w-"+ymd(monday(d)), kMonth = d => "m-"+d.getUTCFullYear()+"-"+pad(d.getUTCMonth()+1), kYear = d => "y-"+d.getUTCFullYear();
function track(){
  if(localStorage.indus_admin==="1") return;       // your own visits are not counted
  const now = new Date(), day = ymd(now);
  if(localStorage.indus_hit===day) return;         // one count per browser per day
  localStorage.indus_hit = day;
  [kDay(now),kWeek(now),kMonth(now),kYear(now)].forEach(k=>fetch(`${API}/hit/${NS}/${k}`).catch(()=>{}));
}
track();
async function count(key){
  const r = await fetch(`${API}/get/${NS}/${key}`);
  if(r.status===404) return 0;
  if(!r.ok) throw new Error("bad status");
  return +(await r.json()).value || 0;
}
function periods(kind){
  const now = new Date(), out = [];
  if(kind==="daily")   for(let i=29;i>=0;i--){ const d=new Date(now); d.setUTCDate(d.getUTCDate()-i); out.push([kDay(d),pad(d.getUTCMonth()+1)+"/"+pad(d.getUTCDate())]); }
  if(kind==="weekly")  for(let i=11;i>=0;i--){ const d=monday(now); d.setUTCDate(d.getUTCDate()-7*i); out.push([kWeek(d),pad(d.getUTCMonth()+1)+"/"+pad(d.getUTCDate())]); }
  if(kind==="monthly") for(let i=11;i>=0;i--){ const d=utc(now.getUTCFullYear(),now.getUTCMonth()-i,1); out.push([kMonth(d),d.getUTCFullYear()+"-"+pad(d.getUTCMonth()+1)]); }
  if(kind==="yearly")  for(let i=3;i>=0;i--){ const d=utc(now.getUTCFullYear()-i,0,1); out.push([kYear(d),String(d.getUTCFullYear())]); }
  return out;
}

/* ================= CMS ================= */
const authed = () => sessionStorage.indus_auth==="1";
const store = k => localStorage.getItem("indus_"+k) || "";
let curTab = "stats", curTopic = "cities", pending = null;
const ACCEPT = {img:"image/*", video:"video/*", doc:".pdf,.epub,.doc,.docx,application/pdf", font:".ttf,.otf,.woff,.woff2,.zip"};

function el(tag,props={},...kids){ const e=document.createElement(tag); Object.assign(e,props); kids.flat().forEach(k=>e.append(k)); return e; }
// F(label, object, key, {ta, upload:"img"|"video"|"doc"|"font", sel:[options]})
function F(label,obj,key,o={}){
  const w = el("div");
  w.append(el("label",{textContent:label}));
  if(o.sel){
    const s = el("select"); o.sel.forEach(v=>s.append(el("option",{value:v,textContent:v})));
    s.value = obj[key] || o.sel[0]; obj[key] = s.value; s.onchange = () => { obj[key]=s.value; };
    w.append(s); return w;
  }
  const i = el(o.ta?"textarea":"input",{value:obj[key]??""});
  i.oninput = () => { obj[key]=i.value; };
  if(o.upload){
    const b = el("button",{className:"small",textContent:"Upload from device",type:"button"});
    b.onclick = () => { pending={obj,key,input:i,kind:o.upload}; $("filePick").accept=ACCEPT[o.upload]; $("filePick").click(); };
    w.append(el("div",{className:"irow"},el("div",{},i),b));
    if(o.upload==="img" && obj[key]) w.append(el("img",{src:obj[key],className:"preview",onerror(){this.remove()}}));
  } else w.append(i);
  return w;
}
function listEd(arr,fields,blank,rebuild){
  const box = el("div");
  arr.forEach((item,idx)=>{
    const row = el("div",{className:"row"});
    fields.forEach(([k,l,o])=>row.append(F(l,item,k,o)));
    const bar = el("div",{className:"bar"});
    if(idx>0) bar.append(el("button",{className:"small",textContent:"Move up",onclick:()=>{ [arr[idx-1],arr[idx]]=[arr[idx],arr[idx-1]]; rebuild(); }}));
    bar.append(el("button",{className:"small",textContent:"Remove",onclick:()=>{ arr.splice(idx,1); rebuild(); }}));
    row.append(bar); box.append(row);
  });
  box.append(el("button",{className:"small",style:"margin-top:10px",textContent:"Add new",onclick:()=>{ arr.push({...blank}); rebuild(); }}));
  return box;
}
function say(t,c){ const s=$("cmsStatus"); if(s){ s.textContent=t; s.className="status "+(c||""); } }

function renderCms(){
  const root = $("cmsRoot"); root.innerHTML = "";
  if(!authed()){
    const pw = el("input",{type:"password",autocomplete:"off"}), err = el("div",{className:"status bad"});
    const go = () => { if(pw.value.trim().replace(/\/+$/,"")===PASSWORD){ sessionStorage.indus_auth="1"; localStorage.indus_admin="1"; renderCms(); } else err.textContent="Wrong password. Try again."; };
    pw.onkeydown = e => { if(e.key==="Enter") go(); };
    root.append(el("div",{className:"gate"},el("h3",{textContent:"CMS sign-in",style:"margin-bottom:8px"}),el("label",{textContent:"Password",style:"display:block;font-size:13px;color:#6b6558;margin:10px 0 4px"}),pw,err,el("button",{className:"btn dark",textContent:"Continue",onclick:go})));
    return;
  }
  root.append(el("h1",{textContent:"CMS",style:"font-size:34px"}));
  const tabs = [["stats","Analytics"],["conn","GitHub"],["site","Logo & Site"],["home","Home"],["topics","Cities, Life, Trade…"],["articles","Articles"],["videos","Videos"],["gallery","Gallery"],["library","Books & PDFs"],["websites","Websites"],["sindhu","Sindhu Prakrit"],["about","About"],["contact","Contact"]];
  const tb = el("div",{className:"tabs"});
  tabs.forEach(([k,l])=>tb.append(el("button",{textContent:l,className:k===curTab?"on":"",onclick:()=>{ curTab=k; renderCms(); }})));
  root.append(tb);
  const body = el("div"); root.append(body);
  const rb = () => { renderAll(); renderCms(); };

  const T = {
    conn(){
      const r = el("input",{value:store("repo"),placeholder:"username/repo-name",oninput(){ localStorage.indus_repo=this.value.trim(); }});
      const b = el("input",{value:store("branch")||"main",oninput(){ localStorage.indus_branch=this.value.trim(); }});
      const t = el("input",{type:"password",value:store("token"),placeholder:"ghp_…",autocomplete:"off",oninput(){ localStorage.indus_token=this.value.trim(); }});
      body.append(el("h3",{textContent:"GitHub connection"}),el("label",{textContent:"Repository (owner/name)"}),r,el("label",{textContent:"Branch"}),b,el("label",{textContent:"Personal access token (classic, repo scope)"}),t,
        el("p",{className:"note",textContent:"The token stays in this browser only. Never share it."}),
        el("button",{className:"small",style:"margin-top:10px",textContent:"Test connection",onclick:testConn}));
    },
    site(){
      body.append(el("h3",{textContent:"Logo & name"}),F("Site name (shown next to the logo)",data.site,"name"),F("Small line under name",data.site,"tag"),
        F("Logo (upload or paste a link)",data.site,"logo",{upload:"img"}),
        el("p",{className:"note",textContent:"A square image with a transparent background works best. It is also used as the browser tab icon."}),
        el("h3",{textContent:"Footer"}),F("Footer text",data.footer,"about",{ta:1}),F("Closing line",data.footer,"tag"));
    },
    home(){
      body.append(el("h3",{textContent:"Hero"}),F("Small line",data.hero,"kicker"),F("Title",data.hero,"title"),F("Dates",data.hero,"dates"),F("Text",data.hero,"text",{ta:1}),F("Button text",data.hero,"btn"),
        F("Background image (upload or link)",data.hero,"bg",{upload:"img"}),F("Seal image (upload or link)",data.hero,"seal",{upload:"img"}),
        el("h3",{textContent:"About block"}),F("Heading",data.about,"title"),F("Text",data.about,"text",{ta:1}),
        el("h3",{textContent:"Feature cards"}),el("p",{className:"note",textContent:"Icon: city, pot, ship, script, leaf, cal, pin, people — or an emoji. Link example: #/cities"}),
        ...data.cards.map(c=>el("div",{className:"row"},F("Icon",c,"icon"),F("Title",c,"title"),F("Text",c,"text"),F("Link",c,"link"))),
        el("h3",{textContent:"Quick facts"}),listEd(data.facts,[["icon","Icon"],["label","Label"],["value","Value"]],{icon:"pin",label:"",value:""},rb),
        el("h3",{textContent:"Slider"}),listEd(data.slides,[["caption","Caption"],["img","Image (upload or link)",{upload:"img"}]],{img:"",caption:""},rb),
        el("h3",{textContent:"Indus script sample"}),F("Title",data.scriptSample,"title"),F("Script text",data.scriptSample,"glyph"),F("Note",data.scriptSample,"note"),F("Font file (upload or link)",data.scriptSample,"fontUrl",{upload:"font"}));
    },
    topics(){
      const sb = el("div",{className:"tabs"});
      TOPICS.forEach(k=>sb.append(el("button",{textContent:data.topics[k].title,className:k===curTopic?"on":"",onclick:()=>{ curTopic=k; renderCms(); }})));
      const t = data.topics[curTopic];
      body.append(sb,F("Page title",t,"title"),F("Intro",t,"intro",{ta:1}),el("h3",{textContent:"Items"}),listEd(t.items,[["title","Title"],["text","Text",{ta:1}],["img","Image (upload or link)",{upload:"img"}]],{title:"",text:"",img:""},rb));
    },
    articles(){ body.append(el("h3",{textContent:"Research articles"}),listEd(data.articles,[["title","Title"],["date","Date"],["summary","Summary",{ta:1}],["link","Link to read (optional)"],["img","Image (upload or link)",{upload:"img"}]],{title:"",date:"",summary:"",link:"",img:""},rb)); },
    videos(){ body.append(el("h3",{textContent:"Videos"}),el("p",{className:"note",textContent:`Paste a YouTube link or a direct video link, or upload from your device (up to ${MAX_UPLOAD_MB} MB). For longer videos use YouTube.`}),listEd(data.videos,[["title","Title"],["url","YouTube link, video link or upload",{upload:"video"}]],{title:"",url:""},rb)); },
    gallery(){ body.append(el("h3",{textContent:"Gallery images"}),listEd(data.gallery,[["title","Title"],["img","Image (upload or link)",{upload:"img"}]],{img:"",title:""},rb)); },
    library(){ body.append(el("h3",{textContent:"Books & PDFs"}),listEd(data.library,[["title","Title"],["author","Author"],["kind","Type",{sel:["PDF","Book","Paper","Other"]}],["desc","Description",{ta:1}],["file","File (upload PDF or paste link)",{upload:"doc"}],["cover","Cover image (upload or link)",{upload:"img"}]],{title:"",author:"",kind:"PDF",file:"",cover:"",desc:""},rb)); },
    websites(){ body.append(el("h3",{textContent:"Website links"}),listEd(data.websites,[["title","Title"],["url","Website link"],["desc","Short description",{ta:1}]],{title:"",url:"",desc:""},rb)); },
    sindhu(){ body.append(el("h3",{textContent:"Sindhu Prakrit page"}),F("Title",data.sindhu,"title"),F("Text",data.sindhu,"text",{ta:1}),el("h3",{textContent:"Points"}),listEd(data.sindhu.points,[["title","Title"],["text","Text",{ta:1}]],{title:"",text:""},rb)); },
    about(){ body.append(el("h3",{textContent:"About page"}),F("Title",data.aboutPage,"title"),F("Text",data.aboutPage,"text",{ta:1}),F("Photo (upload or link)",data.aboutPage,"img",{upload:"img"})); },
    contact(){
      body.append(el("h3",{textContent:"Public contact details"}),el("p",{className:"note",textContent:"Phone and email are shown to everyone on the Contact page and in the footer."}),
        F("Intro",data.contact,"intro"),F("Email",data.contact,"email"),F("Phone (with country code)",data.contact,"phone"),F("Address",data.contact,"address"),
        el("h3",{textContent:"Platform links"}),el("p",{className:"note",textContent:"Add any platform: WhatsApp, Facebook, YouTube, Telegram, Instagram… Links left empty are hidden. WhatsApp link looks like https://wa.me/923001234567"}),
        listEd(data.social,[["name","Platform name"],["url","Link"]],{name:"",url:""},rb));
    },
    stats(){
      body.append(el("h3",{textContent:"Visitors"}));
      const tiles = el("div",{className:"tiles"}), chart = el("div"), msg = el("div",{className:"status"});
      const now = new Date();
      const tl = [["Today",kDay(now)],["This week",kWeek(now)],["This month",kMonth(now)],["This year",kYear(now)]];
      const tv = tl.map(([l])=>{ const b=el("b",{textContent:"…"}); tiles.append(el("div",{className:"tile"},b,el("span",{textContent:l}))); return b; });
      Promise.all(tl.map(([,k])=>count(k))).then(v=>v.forEach((n,i)=>tv[i].textContent=n)).catch(()=>{ msg.textContent="Could not reach the counter service. Check your internet and try again."; msg.className="status bad"; tv.forEach(b=>b.textContent="–"); });
      const kinds = [["daily","Daily (30 days)"],["weekly","Weekly (12 weeks)"],["monthly","Monthly (12 months)"],["yearly","Yearly"]];
      const kb = el("div",{className:"tabs"}), show = async kind => {
        [...kb.children].forEach((b,i)=>b.className = kinds[i][0]===kind?"on":"");
        chart.innerHTML = ""; const ps = periods(kind);
        try{
          const vals = await Promise.all(ps.map(([k])=>count(k))), max = Math.max(1,...vals), step = Math.ceil(ps.length/8);
          const bars = el("div",{className:"bars"}), labs = el("div",{className:"labels"});
          ps.forEach(([,l],i)=>{ bars.append(el("div",{style:`height:${Math.max(2,vals[i]/max*100)}%`,title:`${l}: ${vals[i]}`})); labs.append(el("span",{textContent:i%step===0||i===ps.length-1?l:""})); });
          chart.append(bars,labs,el("p",{className:"note",textContent:`Total shown: ${vals.reduce((a,b)=>a+b,0)} visitors. Hover or tap a bar for its value.`}));
        }catch(e){ chart.append(el("div",{className:"status bad",textContent:"Could not load the chart. Try again."})); }
      };
      kinds.forEach(([k,l])=>kb.append(el("button",{textContent:l,onclick:()=>show(k)})));
      body.append(tiles,msg,kb,chart,el("p",{className:"note",textContent:"Counts one visit per browser per day, in UTC time. Your own visits are not counted while this browser is signed in to the CMS. Everyone sees the same numbers because they are stored on the counter service, not in the browser."}));
      show("daily");
    }
  };
  T[curTab]();
  if(curTab!=="stats" && curTab!=="conn"){
    body.append(el("div",{className:"pubbar"},
      el("button",{className:"btn dark",style:"margin:0",textContent:"Publish to GitHub",onclick:publish}),
      el("button",{className:"btn ghost",style:"margin:0",textContent:"Preview changes",onclick:()=>{ renderAll(); say("Preview updated. Not published yet.","ok"); }})));
  }
  body.append(el("div",{id:"cmsStatus",className:"status"}));
  root.append(el("button",{className:"small",style:"margin-top:24px",textContent:"Sign out",onclick:()=>{ sessionStorage.removeItem("indus_auth"); renderCms(); }}));
}

/* ================= GITHUB ================= */
function gh(path,opt={}){
  return fetch(`https://api.github.com/repos/${store("repo")}/${path}`,{...opt,headers:{Accept:"application/vnd.github+json",Authorization:"Bearer "+store("token"),...(opt.headers||{})}});
}
async function testConn(){
  say("Checking…");
  try{
    const r = await gh(""), j = await r.json();
    if(r.ok && j.permissions && j.permissions.push) say(`Connected to ${j.full_name}. You can publish.`,"ok");
    else if(r.ok) say("Connected, but this token cannot write. Use a classic token with repo scope.","bad");
    else say(`GitHub says: ${j.message}. Check the repository name and token.`,"bad");
  }catch(e){ say("Could not reach GitHub.","bad"); }
}
async function putFile(path,b64,msg){
  const br = store("branch")||"main"; let sha;
  const ex = await gh(`contents/${path}?ref=${encodeURIComponent(br)}`); if(ex.ok) sha=(await ex.json()).sha;
  const r = await gh(`contents/${path}`,{method:"PUT",body:JSON.stringify({message:msg,content:b64,branch:br,...(sha?{sha}:{})})});
  const j = await r.json(); if(!r.ok) throw new Error(j.message||"Upload failed"); return j;
}
async function publish(){
  if(!store("repo")||!store("token")){ say("Add your repository and token in the GitHub tab first.","bad"); return; }
  renderAll(); say("Publishing…");
  try{
    await putFile("content.json",btoa(unescape(encodeURIComponent(JSON.stringify(data,null,2)))),"Update site content");
    say("Published. It goes live on GitHub Pages in about a minute.","ok");
  }catch(e){ say("Publish failed: "+e.message,"bad"); }
}
$("filePick").onchange = async e => {
  const f = e.target.files[0]; e.target.value=""; if(!f||!pending) return;
  if(!store("repo")||!store("token")){ say("Add your repository and token in the GitHub tab first.","bad"); return; }
  if(f.size > MAX_UPLOAD_MB*1024*1024){ say(`That file is over ${MAX_UPLOAD_MB} MB. Upload it to YouTube or Google Drive and paste the link instead.`,"bad"); return; }
  say("Uploading… please wait.");
  try{
    const b64 = await new Promise((ok,no)=>{ const r=new FileReader(); r.onload=()=>ok(r.result.split(",")[1]); r.onerror=no; r.readAsDataURL(f); });
    const name = "uploads/"+Date.now()+"-"+f.name.replace(/[^\w.\-]/g,"_");
    await putFile(name,b64,"Add file "+name);
    pending.obj[pending.key] = name; pending.input.value = name; renderAll();
    say("Uploaded. Press Publish to save it to the page.","ok");
  }catch(err){ say("Upload failed: "+err.message,"bad"); }
};
