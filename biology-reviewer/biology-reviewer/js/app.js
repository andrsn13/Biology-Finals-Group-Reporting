(function(){
const nav=v=>{const L=[["home","Home","#/"],["read","Read","#/read/"+S.m],["recall","Recall","#/recall"],["lookup","Look up","#/lookup"]];$("#nav").innerHTML=L.map(l=>`<a href="${l[2]}" ${l[0]==v?'aria-current="page"':""}>${l[1]}</a>`).join("")};
window.route=fm=>{const p=location.hash.slice(2).split("/"),v=["read","recall","lookup"].includes(p[0])?p[0]:"home";
$("#main").innerHTML=v=="read"?read(p[1]):v=="recall"?recall(p[1]):v=="lookup"?lookup():home();nav(v);
if(v=="recall")setTimeout(()=>{const e=$("#ans")||$(".card[tabindex]");e&&e.focus()});else if(v=="lookup"&&fm)$("#q").focus();else if(fm){$("#main").focus();scrollTo(0,0)}};
addEventListener("hashchange",()=>route(true));
addEventListener("keydown",e=>{const t=e.target,tx=t.matches&&t.matches("textarea"),ip=t.matches&&t.matches("input:not([type=checkbox]),select");if(ip)return;
if(R&&location.hash.startsWith("#/recall")){if(R.i<R.q.length){if(!R.f&&e.key=="Enter"&&(e.ctrlKey||e.metaKey)){e.preventDefault();flip()}else if(R.f&&!tx&&"123".includes(e.key)&&e.key.length==1)rate(+e.key-1);else if(e.key=="Escape"){R=null;route()}}}
else if(e.key=="/"&&!tx){e.preventDefault();location.hash="#/lookup"}});
applyPrefs();route(true);
})();
