import{r as d,j as e,L as c,b as U,H as Y}from"./app-C-5KBWG5.js";/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=a=>a==null?void 0:a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function X(a,t,n=[]){if(t==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:G(a),size:24,node:t,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=a=>{let t="",n=!1;for(const s of a){if(s==="-"||s==="_"||s<=" "){n=t.length>0;continue}t.length===0?t+=s.toLowerCase():t+=n?s.toUpperCase():s,n=!1}return t};/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=a=>{const t=Z(a);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=(...a)=>a.filter((t,n,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function v(a){return a!=null}function ee(a,t={}){var j,p;const n=t.attributeNames??{},s=r=>n[r]??r,l=a.size??a.width??x.width,i=a.size??a.height??x.height,u=((j=a.aliases)==null?void 0:j.filter(r=>typeof r=="string"&&r.trim()!=="").map(r=>`lucide-${r}`))??[],g=[...a.name?[`lucide-${a.name}`]:[],...u],h=((p=t.className)==null?void 0:p.split(" ").filter(Boolean))??[],k=t.includeDefaultClasses===!1?C(...h):C("lucide",...g,...h),N=t.absoluteStrokeWidth?Number(t.strokeWidth??x["stroke-width"])*Number(a.size??a.width??x.width)/Number(t.size??t.width??x.width):t.strokeWidth??x["stroke-width"];return["svg",{...Object.entries(x).reduce((r,[m,f])=>(r[s(m)]=f,r),{}),..."color"in t&&t.color&&{[s("stroke")]:t.color},..."size"in t&&v(t.size)&&{[s("width")]:t.size,[s("height")]:t.size},..."width"in t&&v(t.width)&&{[s("width")]:t.width},..."height"in t&&v(t.height)&&{[s("height")]:t.height},[s("stroke-width")]:N,...k&&{[s("class")]:k},[s("viewBox")]:`0 0 ${l} ${i}`,...t.hasA11yProp===!1?{[s("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},a.node.map(r=>{const[m,f,b]=r,y=t.nonScalingStroke?{[s("vector-effect")]:"non-scaling-stroke",...f}:f;return b?[m,y,b]:[m,y]})]}/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function te(a,t={}){return ee(a,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=a=>{for(const t in a)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},se=d.createContext({}),ne=()=>d.useContext(se),ie=d.forwardRef(({color:a,size:t,width:n,height:s,strokeWidth:l,absoluteStrokeWidth:i,nonScalingStroke:u,className:g="",children:h,iconNode:k=[],icon:N={node:k,aliases:[],size:24},...w},j)=>{const{size:p=24,strokeWidth:r=2,absoluteStrokeWidth:m=!1,nonScalingStroke:f=!1,color:b="currentColor",className:y=""}=ne()??{},F=!!h||ae(w),[R,q,J=[]]=te(N,{color:a??b,width:n??t??p,height:s??t??p,strokeWidth:l??r,absoluteStrokeWidth:i??m,nonScalingStroke:u??f,className:C(y,g),hasA11yProp:F,attributes:w});return d.createElement(R,{ref:j,...q},[...J.map(([O,V])=>d.createElement(O,V)),...Array.isArray(h)?h:[h]])});/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function o(a,t=[],n=[]){const s=typeof a=="string"?X(a,t,n):a,l=d.forwardRef(({className:i,...u},g)=>d.createElement(ie,{ref:g,icon:s,className:i,...u}));return s.name&&(l.displayName=Q(s.name)),l}/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z={name:"arrow-up-right",size:24,node:[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]};z.node;const _=o(z);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};S.node;const fe=o(S);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};A.node;const re=o(A);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K={name:"file-down",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]};K.node;const M=o(K);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};T.node;const oe=o(T);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};L.node;const le=o(L);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D={name:"map-pin",size:24,node:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]};D.node;const E=o(D);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};W.node;const ce=o(W);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $={name:"phone",size:24,node:[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};$.node;const P=o($);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};B.node;const H=o(B);/**
 * @license lucide-react v1.53.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};I.node;const de=o(I);function he({currentUrl:a=""}){const[t,n]=d.useState(!1),s=[{name:"Beranda",href:"/"},{name:"Portofolio Proyek",href:"/proyek"},{name:"Layanan Konstruksi",href:"/layanan"},{name:"Tentang Perusahaan",href:"/tentang-kami"},{name:"Kontak & Estimasi",href:"/kontak"}],l=i=>!!(i==="/"&&a==="/"||i!=="/"&&(a!=null&&a.startsWith(i)));return e.jsxs("header",{className:"sticky top-0 z-50 w-full bg-[#fffdf8]/95 backdrop-blur-md border-b border-[#e5e0d3]",children:[e.jsx("div",{className:"bg-[#0c253b] text-[#fffdf8] text-xs py-2 px-4 sm:px-8 border-b border-[#163e61]",children:e.jsxs("div",{className:"max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2",children:[e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"flex items-center gap-1.5 text-[#e5e0d3]",children:[e.jsx(E,{className:"w-3.5 h-3.5 text-[#97ad82]"}),e.jsx("span",{children:"Surabaya, Jawa Timur"})]}),e.jsxs("div",{className:"hidden md:flex items-center gap-1.5 text-[#e5e0d3]",children:[e.jsx(H,{className:"w-3.5 h-3.5 text-[#97ad82]"}),e.jsx("span",{children:"Standar K3 & Manajemen Mutu Konstruksi Sejak 2012"})]})]}),e.jsxs("div",{className:"flex items-center gap-4 text-xs",children:[e.jsx("span",{className:"text-[#97ad82] font-medium hidden sm:inline",children:"Hotline Proyek:"}),e.jsx("a",{href:"https://wa.me/6281231716286?text=Halo%20PT.%20Karyatim%20Mandiri%20Engineering,%20saya%20ingin%20konsultasi%20proyek.",target:"_blank",rel:"noreferrer",className:"font-medium text-[#fffdf8] hover:text-[#97ad82] transition-colors",children:"0812-3171-6286"}),e.jsx("span",{className:"text-[#5c6773]",children:"|"}),e.jsx("a",{href:"https://wa.me/6285111249501?text=Halo%20PT.%20Karyatim%20Mandiri%20Engineering,%20saya%20ingin%20konsultasi%20proyek.",target:"_blank",rel:"noreferrer",className:"font-medium text-[#fffdf8] hover:text-[#97ad82] transition-colors",children:"0851-1124-9501"})]})]})}),e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between",children:[e.jsxs(c,{href:"/",className:"flex items-center gap-3.5 group",children:[e.jsx("div",{className:"w-11 h-11 bg-[#0c253b] rounded flex items-center justify-center text-[#fffdf8] font-black text-xl tracking-tight shadow-sm group-hover:bg-[#163e61] transition-colors",children:"KT"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"font-bold text-lg text-[#0c253b] leading-tight tracking-tight",children:"KARYATIM"}),e.jsx("span",{className:"text-xs text-[#5c6773] tracking-normal font-medium",children:"Mandiri Engineering Contractors"})]})]}),e.jsx("nav",{className:"hidden lg:flex items-center gap-1",children:s.map(i=>e.jsx(c,{href:i.href,className:`px-3.5 py-2 text-sm font-medium transition-colors rounded ${l(i.href)?"text-[#0c253b] font-semibold bg-[#f1ede3]":"text-[#5c6773] hover:text-[#0c253b] hover:bg-[#f7f5ef]"}`,children:i.name},i.name))}),e.jsxs("div",{className:"hidden lg:flex items-center gap-3",children:[e.jsxs("a",{href:"/downloads/Portofolio-Karyatim-Mandiri-Engineering.pdf",download:!0,className:"inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#0c253b] bg-[#f1ede3] hover:bg-[#e5e0d3] rounded border border-[#e5e0d3] transition-colors",children:[e.jsx(M,{className:"w-4 h-4 text-[#0c253b]"}),e.jsx("span",{children:"Unduh Profil PDF"})]}),e.jsxs("a",{href:"https://wa.me/6281231716286?text=Halo%20Tim%20Teknis%20Karyatim,%20saya%20ingin%20konsultasi%20kebutuhan%20proyek%20konstruksi.",target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#fffdf8] bg-[#0c253b] hover:bg-[#163e61] rounded transition-colors shadow-sm",children:[e.jsx(P,{className:"w-3.5 h-3.5 text-[#97ad82]"}),e.jsx("span",{children:"Konsultasi Proyek"}),e.jsx(_,{className:"w-3.5 h-3.5 text-[#97ad82]"})]})]}),e.jsx("button",{type:"button",onClick:()=>n(!t),className:"lg:hidden p-2 text-[#0c253b] hover:bg-[#f1ede3] rounded","aria-label":"Toggle Navigation",children:t?e.jsx(de,{className:"w-6 h-6"}):e.jsx(ce,{className:"w-6 h-6"})})]}),t&&e.jsxs("div",{className:"lg:hidden border-t border-[#e5e0d3] bg-[#fffdf8] px-4 py-4 space-y-2",children:[s.map(i=>e.jsx(c,{href:i.href,onClick:()=>n(!1),className:`block px-3 py-2 text-sm font-medium rounded ${l(i.href)?"text-[#0c253b] font-semibold bg-[#f1ede3]":"text-[#5c6773] hover:text-[#0c253b]"}`,children:i.name},i.name)),e.jsxs("div",{className:"pt-3 border-t border-[#e5e0d3] space-y-2",children:[e.jsxs("a",{href:"/downloads/Portofolio-Karyatim-Mandiri-Engineering.pdf",download:!0,className:"w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#0c253b] bg-[#f1ede3] rounded border border-[#e5e0d3]",children:[e.jsx(M,{className:"w-4 h-4 text-[#0c253b]"}),e.jsx("span",{children:"Unduh Profil PDF Portofolio"})]}),e.jsxs("a",{href:"https://wa.me/6281231716286?text=Halo%20Tim%20Teknis%20Karyatim,%20saya%20ingin%20konsultasi%20kebutuhan%20proyek%20konstruksi.",target:"_blank",rel:"noreferrer",className:"w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#fffdf8] bg-[#0c253b] rounded",children:[e.jsx(P,{className:"w-4 h-4 text-[#97ad82]"}),e.jsx("span",{children:"Hubungi Tim Teknis via WhatsApp"})]})]})]})]})}function xe(){return e.jsx("footer",{className:"bg-[#0c253b] text-[#fffdf8] border-t border-[#163e61] pt-16 pb-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-8",children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-[#163e61]",children:[e.jsxs("div",{className:"lg:col-span-4 space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-[#fffdf8] text-[#0c253b] rounded flex items-center justify-center font-black text-lg",children:"KT"}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-lg text-[#fffdf8] tracking-tight",children:"PT. Karyatim Mandiri Engineering"}),e.jsx("p",{className:"text-xs text-[#97ad82] font-medium",children:"General Contractor & Civil Engineering Sejak 2012"})]})]}),e.jsx("p",{className:"text-sm text-[#e5e0d3] leading-relaxed",children:"Mitra konstruksi terpercaya untuk pembangunan gedung, struktur baja berat, pengaspalan, rigid pavement, ACP facade, interior korporat, dan proteksi industri di seluruh Indonesia."}),e.jsxs("div",{className:"flex items-center gap-2 text-xs text-[#97ad82] pt-2",children:[e.jsx(H,{className:"w-4 h-4 text-[#97ad82]"}),e.jsx("span",{children:"Kepatuhan K3 & Jaminan Mutu Struktural"})]})]}),e.jsxs("div",{className:"lg:col-span-2 space-y-3",children:[e.jsx("h4",{className:"text-sm font-semibold text-[#fffdf8] tracking-normal",children:"Navigasi"}),e.jsxs("ul",{className:"space-y-2 text-sm text-[#e5e0d3]",children:[e.jsx("li",{children:e.jsx(c,{href:"/",className:"hover:text-[#97ad82] transition-colors",children:"Beranda"})}),e.jsx("li",{children:e.jsx(c,{href:"/proyek",className:"hover:text-[#97ad82] transition-colors",children:"Portofolio Proyek"})}),e.jsx("li",{children:e.jsx(c,{href:"/layanan",className:"hover:text-[#97ad82] transition-colors",children:"Layanan Konstruksi"})}),e.jsx("li",{children:e.jsx(c,{href:"/tentang-kami",className:"hover:text-[#97ad82] transition-colors",children:"Tentang Perusahaan"})}),e.jsx("li",{children:e.jsx(c,{href:"/kontak",className:"hover:text-[#97ad82] transition-colors",children:"Kontak & Estimasi RAB"})})]})]}),e.jsxs("div",{className:"lg:col-span-3 space-y-3",children:[e.jsx("h4",{className:"text-sm font-semibold text-[#fffdf8] tracking-normal",children:"Spesialisasi Konstruksi"}),e.jsxs("ul",{className:"space-y-1.5 text-xs text-[#e5e0d3]",children:[e.jsx("li",{children:"Konstruksi Bangunan & Sipil"}),e.jsx("li",{children:"Struktur Rangka Baja Berat (WF/H-Beam)"}),e.jsx("li",{children:"Rigid Pavement & Pengecoran Beton"}),e.jsx("li",{children:"Pengaspalan Jalan Hotmix AC-WC"}),e.jsx("li",{children:"Aluminium Composite Panel (ACP) & Facade"}),e.jsx("li",{children:"Lantai Epoxy Industri & Waterproofing"}),e.jsx("li",{children:"Interior Office Fit-Out & Partisi"}),e.jsx("li",{children:"MEP, Panel Listrik & CCTV Industri"})]})]}),e.jsxs("div",{className:"lg:col-span-3 space-y-3",children:[e.jsx("h4",{className:"text-sm font-semibold text-[#fffdf8] tracking-normal",children:"Kantor & Kontak"}),e.jsxs("div",{className:"space-y-2.5 text-xs text-[#e5e0d3]",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx(E,{className:"w-4 h-4 text-[#97ad82] shrink-0 mt-0.5"}),e.jsx("span",{children:"Surabaya, Jawa Timur — Melayani Proyek Seluruh Indonesia"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(P,{className:"w-4 h-4 text-[#97ad82] shrink-0"}),e.jsx("a",{href:"tel:081231716286",className:"hover:text-[#97ad82]",children:"0812-3171-6286"})," / ",e.jsx("a",{href:"tel:085111249501",className:"hover:text-[#97ad82]",children:"0851-1124-9501"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(le,{className:"w-4 h-4 text-[#97ad82] shrink-0"}),e.jsx("a",{href:"mailto:infokaryatimsurabaya@gmail.com",className:"hover:text-[#97ad82]",children:"infokaryatimsurabaya@gmail.com"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(re,{className:"w-4 h-4 text-[#97ad82] shrink-0"}),e.jsx("span",{children:"Senin – Sabtu: 08:00 – 17:00 WIB"})]})]}),e.jsx("div",{className:"pt-2",children:e.jsxs("a",{href:"/downloads/Portofolio-Karyatim-Mandiri-Engineering.pdf",download:!0,className:"inline-flex items-center gap-2 text-xs text-[#97ad82] hover:text-[#fffdf8] font-medium",children:[e.jsx(oe,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Download Portofolio Resmi (.PDF)"}),e.jsx(_,{className:"w-3 h-3"})]})})]})]}),e.jsxs("div",{className:"pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#e5e0d3]",children:[e.jsxs("div",{children:["© ",new Date().getFullYear()," PT. Karyatim Mandiri Engineering. Hak Cipta Dilindungi Undang-Undang."]}),e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx("a",{href:"https://instagram.com/karyatimcontractor",target:"_blank",rel:"noreferrer",className:"hover:text-[#97ad82] transition-colors",children:"Instagram"}),e.jsx("a",{href:"https://www.tiktok.com/@kontraktorsurabayaraya",target:"_blank",rel:"noreferrer",className:"hover:text-[#97ad82] transition-colors",children:"TikTok"}),e.jsx("a",{href:"https://www.linkedin.com/company/karyatim",target:"_blank",rel:"noreferrer",className:"hover:text-[#97ad82] transition-colors",children:"LinkedIn"}),e.jsx("a",{href:"https://facebook.com/kontraktorkaryatim",target:"_blank",rel:"noreferrer",className:"hover:text-[#97ad82] transition-colors",children:"Facebook"})]})]})]})})}function ue({children:a,title:t}){const{url:n}=U();return e.jsxs("div",{className:"min-h-screen flex flex-col bg-[#fffdf8] text-[#081a2a]",children:[e.jsx(Y,{title:t}),e.jsx(he,{currentUrl:n}),e.jsx("main",{className:"flex-1",children:a}),e.jsx(xe,{})]})}export{ue as A,fe as C,M as F,le as M,P,H as S,de as X,E as a,_ as b,o as c,re as d};
