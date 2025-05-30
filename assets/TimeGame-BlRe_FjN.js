import{r as f,j as d}from"./ui-components-BR_YTsY_.js";import{C as et,R as rt,a as nt,L as st,B as at}from"./index-BUyJmYRG.js";import"./react-vendor-CWc6w16D.js";import"./recharts-v1XxYoYy.js";function ht({onScoreChange:R,onStreakChange:F,onProgressChange:H,theme:L}){const[h,k]=f.useState("beginner"),[V,g]=f.useState(""),[q,p]=f.useState([]),[w,M]=f.useState(""),[A,T]=f.useState(null),[y,D]=f.useState(!1),[v,P]=f.useState(0),[C,I]=f.useState(0),[W,U]=f.useState(!1),[B,$]=f.useState(""),[E,j]=f.useState("");f.useEffect(()=>{const t=localStorage.getItem("timeGameDifficulty"),o=localStorage.getItem("timeGameScore"),e=localStorage.getItem("timeGameStreak");t&&k(t),o&&I(parseInt(o)),e&&P(parseInt(e)),N()},[]),f.useEffect(()=>{localStorage.setItem("timeGameDifficulty",h),localStorage.setItem("timeGameScore",C.toString()),localStorage.setItem("timeGameStreak",v.toString())},[h,C,v]);const u={second:1,minute:60,hour:3600,day:86400,week:604800,month:2592e3,year:31536e3},S={second:"seconds",minute:"minutes",hour:"hours",day:"days",week:"weeks",month:"months",year:"years"},N=()=>{D(!1),T(null),U(!1);let t;switch(h){case"beginner":t=Math.random()>.5?"unit-comparison":"am-pm";break;case"easy":const o=Math.random();o<.33?t="unit-comparison":o<.66?t="am-pm":t="duration-comparison";break;case"medium":const e=Math.random();e<.25?t="unit-comparison":e<.5?t="am-pm":e<.75?t="duration-comparison":t="clock-format";break;case"hard":case"expert":const r=Math.random();r<.2?t="unit-comparison":r<.4?t="am-pm":r<.6?t="duration-comparison":r<.8?t="clock-format":t="time-conversion";break;default:t="unit-comparison"}switch(t){case"unit-comparison":z();break;case"am-pm":J();break;case"duration-comparison":K();break;case"clock-format":X();break;case"time-conversion":Y();break}},z=()=>{const t=Object.keys(u);let o,e;if(h==="beginner"){const n=["second","minute","hour"];o=n[Math.floor(Math.random()*n.length)];do e=n[Math.floor(Math.random()*n.length)];while(o===e)}else if(h==="easy"){const n=["second","minute","hour","day"];o=n[Math.floor(Math.random()*n.length)];do e=n[Math.floor(Math.random()*n.length)];while(o===e)}else{o=t[Math.floor(Math.random()*t.length)];do e=t[Math.floor(Math.random()*t.length)];while(o===e)}const r=Math.random()>.5?"longer":"shorter";g(`Which is ${r}: 1 ${o} or 1 ${e}?`);const c=[`1 ${o}`,`1 ${e}`];p(c);const s=u[o],a=u[e];M(r==="longer"?s>a?`1 ${o}`:`1 ${e}`:s<a?`1 ${o}`:`1 ${e}`),$(`1 ${o} = ${s} seconds
1 ${e} = ${a} seconds

So 1 ${s>a?o:e} is longer than 1 ${s>a?e:o}.`)},J=()=>{const t=Math.floor(Math.random()*12)+1,o=Math.random()>.5,r=`${t}:00 ${o?"AM":"PM"}`;j(r);const c=Math.floor(Math.random()*3);if(c===0){g(`Is ${r} in the morning, afternoon, or evening?`),p(["Morning","Afternoon","Evening"]);let a;o?a="Morning":t<6?a="Afternoon":a="Evening",M(a),$(`${r} is in the ${a.toLowerCase()}.
AM times (midnight to noon) are morning.
PM times from 12:00 PM to 5:59 PM are afternoon.
PM times from 6:00 PM to 11:59 PM are evening.`)}else if(c===1){g(`What would ${r} be in 24-hour format?`);let s=t;!o&&t!==12&&(s=t+12),o&&t===12&&(s=0);const a=`${s.toString().padStart(2,"0")}:00`,n=[];for(;n.length<3;){let m;o?Math.random()>.5?m=(t+12)%24:(m=t,t===12&&(m=12)):Math.random()>.5?m=t:(m=t-12,m===0&&(m=12));const l=`${m.toString().padStart(2,"0")}:00`;l!==a&&!n.includes(l)&&n.push(l)}const i=[a,...n].sort(()=>Math.random()-.5);p(i),M(a),$(`${r} in 24-hour format is ${a}.

For AM times:
- 12 AM is 00:00
- 1 AM to 11 AM stay the same

For PM times:
- 12 PM is 12:00
- 1 PM to 11 PM: add 12 (1 PM = 13:00, etc.)`)}else{const s=Math.floor(Math.random()*24),a=s<12;let n=s%12;n===0&&(n=12),g(`Is ${s}:00 in 24-hour format AM or PM in 12-hour format?`),p(["AM","PM"]),M(a?"AM":"PM"),$(`${s}:00 in 12-hour format is ${n}:00 ${a?"AM":"PM"}.

24-hour to 12-hour conversion:
- 00:00 to 11:59 → AM (midnight to noon)
- 12:00 to 23:59 → PM (noon to midnight)`)}},K=()=>{const t=Object.keys(u);let o,e,r,c;if(h==="easy"){const l=["second","minute","hour"];o=l[Math.floor(Math.random()*l.length)],e=l[Math.floor(Math.random()*l.length)],r=Math.floor(Math.random()*10)+1,c=Math.floor(Math.random()*10)+1}else if(h==="medium"){const l=["second","minute","hour","day"];o=l[Math.floor(Math.random()*l.length)],e=l[Math.floor(Math.random()*l.length)],r=Math.floor(Math.random()*60)+1,c=Math.floor(Math.random()*60)+1}else o=t[Math.floor(Math.random()*t.length)],e=t[Math.floor(Math.random()*t.length)],r=Math.floor(Math.random()*100)+1,c=Math.floor(Math.random()*100)+1;const s=r===1?o:S[o],a=c===1?e:S[e],n=r*u[o],i=c*u[e];g(`Which is longer: ${r} ${s} or ${c} ${a}?`);const m=[`${r} ${s}`,`${c} ${a}`];p(m),M(n>i?`${r} ${s}`:`${c} ${a}`),$(`${r} ${s} = ${n} seconds
${c} ${a} = ${i} seconds

${n>i?r+" "+s:c+" "+a} is longer.`)},X=()=>{const t=Math.floor(Math.random()*24),o=Math.floor(Math.random()*4)*15,e=t<12;let r=t%12;r===0&&(r=12);const c=`${t.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`,s=`${r}:${o.toString().padStart(2,"0")} ${e?"AM":"PM"}`;if((Math.random()>.5?"12to24":"24to12")==="12to24"){g(`Convert ${s} to 24-hour format:`),j(s);const n=c,i=[];for(r===12&&e?i.push(`12:${o.toString().padStart(2,"0")}`):e?i.push(`${(r+12).toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`):r===12&&!e?i.push(`00:${o.toString().padStart(2,"0")}`):i.push(`${r.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`);i.length<3;){const b=`${Math.floor(Math.random()*24).toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`;b!==n&&!i.includes(b)&&i.push(b)}const m=[n,...i].sort(()=>Math.random()-.5);p(m),M(n),$(`To convert from 12-hour to 24-hour format:

- For AM times:
  * 12:00 AM becomes 00:00
  * Other AM times stay the same (just remove AM)

- For PM times:
  * 12:00 PM stays as 12:00
  * Other PM times: add 12 to the hour

So ${s} converts to ${c}`)}else{g(`Convert ${c} to 12-hour format:`),j(c);const n=s,i=[];for(t===0?i.push(`0:${o.toString().padStart(2,"0")} AM`):t===12?i.push(`12:${o.toString().padStart(2,"0")} AM`):t>12?i.push(`${t}:${o.toString().padStart(2,"0")} PM`):i.push(`${t}:${o.toString().padStart(2,"0")} PM`);i.length<3;){const l=Math.floor(Math.random()*12)+1,b=Math.random()>.5?"AM":"PM",x=`${l}:${o.toString().padStart(2,"0")} ${b}`;x!==n&&!i.includes(x)&&i.push(x)}const m=[n,...i].sort(()=>Math.random()-.5);p(m),M(n),$(`To convert from 24-hour to 12-hour format:

- For hours 0-11:
  * 00:00 becomes 12:00 AM
  * Other hours use AM

- For hours 12-23:
  * 12:00 becomes 12:00 PM
  * Other hours: subtract 12 and use PM

So ${c} converts to ${s}`)}},Y=()=>{const t=Object.keys(u);let o,e;do o=t[Math.floor(Math.random()*t.length)],e=t[Math.floor(Math.random()*t.length)];while(o===e);let r;h==="hard"?r=Math.floor(Math.random()*20)+1:r=Math.floor(Math.random()*100)+1;const c=r===1?o:S[o],s=r*u[o],a=s/u[e],n=a%1===0?a.toString():a.toFixed(2);g(`Convert ${r} ${c} to ${S[e]}:`);const i=n,m=[],l=s*u[e];m.push(l%1===0?l.toString():l.toFixed(2));const b=t.filter(Q=>Q!==o&&Q!==e)[Math.floor(Math.random()*(t.length-2))],x=r*u[o]/u[b];m.push(x%1===0?x.toString():x.toFixed(2));const O=a*(Math.random()>.5?.9:1.1);m.push(O%1===0?O.toString():O.toFixed(2));const ot=[i,...m].sort(()=>Math.random()-.5);p(ot),M(i),$(`To convert from ${c} to ${S[e]}:

1. Convert ${r} ${c} to seconds:
   ${r} × ${u[o]} = ${s} seconds

2. Convert seconds to ${S[e]}:
   ${s} ÷ ${u[e]} = ${n} ${S[e]}`)},Z=t=>{if(y)return;if(T(t),D(!0),t===w){const e=C+(h==="beginner"?1:h==="easy"?2:h==="medium"?5:h==="hard"?10:15),r=v+1;I(e),P(r),R(e-C),F(1),H(10),r%10===0&&_()}else P(0),F(-v);U(!0),setTimeout(()=>{N()},3e3)},_=()=>{switch(h){case"beginner":k("easy");break;case"easy":k("medium");break;case"medium":k("hard");break;case"hard":k("expert");break}},G=(()=>{switch(L){case"minecraft":return{backgroundColor:"#5c8d43",buttonColor:"#7e7e7e",textColor:"#ffffff",clockColor:"#f6b93b"};case"sonic":return{backgroundColor:"#0078c8",buttonColor:"#f7b400",textColor:"#ffffff",clockColor:"#f7b400"};case"marvel":return{backgroundColor:"#ed1d24",buttonColor:"#0282f9",textColor:"#ffffff",clockColor:"#0282f9"};default:return{backgroundColor:"#f0f0f0",buttonColor:"#4f46e5",textColor:"#333333",clockColor:"#4f46e5"}}})(),tt=()=>E?d.jsx("div",{className:"mb-6 p-4 bg-gray-100 rounded-md flex justify-center items-center",children:d.jsx("div",{className:"digital-clock",style:{fontFamily:"monospace",fontSize:"2.5rem",padding:"0.5rem 1rem",backgroundColor:"#000",color:G.clockColor,borderRadius:"0.5rem",boxShadow:"0 0 10px rgba(0,0,0,0.3)",display:"inline-block"},children:E})}):null;return d.jsx(et,{className:"p-4",children:d.jsxs("div",{className:"text-center mb-4",children:[d.jsxs("p",{className:"text-sm mb-2",children:["Level: ",h]}),d.jsx("div",{className:"mb-4 flex justify-center",children:d.jsx("div",{className:"text-5xl",style:{color:G.clockColor},children:"🕒"})}),d.jsx("h2",{className:"text-xl font-bold mb-4",children:V}),tt(),d.jsx("div",{className:"mb-6",children:d.jsx(rt,{className:"space-y-4",children:q.map((t,o)=>d.jsxs("div",{className:`
                  flex items-center space-x-2 p-3 rounded-md border-2
                  ${y?t===w?"border-green-500 bg-green-50":t===A?"border-red-500 bg-red-50":"border-gray-300":"border-gray-300 hover:border-gray-400"}
                  cursor-pointer transition-all
                `,onClick:()=>Z(t),children:[d.jsx(nt,{value:t,id:`option-${o}`,checked:A===t,disabled:y}),d.jsx(st,{htmlFor:`option-${o}`,className:"text-lg font-medium flex-grow cursor-pointer",children:t}),y&&t===w&&d.jsx("span",{className:"text-green-500 text-xl",children:"✓"}),y&&t===A&&t!==w&&d.jsx("span",{className:"text-red-500 text-xl",children:"✗"})]},o))})}),W&&d.jsxs("div",{className:"mt-4 p-4 bg-blue-50 rounded-md text-left",children:[d.jsx("h3",{className:"font-bold mb-2",children:"Explanation:"}),d.jsx("p",{className:"whitespace-pre-line",children:B})]}),y&&d.jsx(at,{className:"mt-4",onClick:N,children:"Next Question"})]})})}export{ht as TimeGame};
