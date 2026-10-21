(function(){
window.S={d:1,done:{},box:{},qd:"",th:"auto",fs:1,hint:0,m:0};
try{Object.assign(S,JSON.parse(localStorage.getItem("v3")||"{}"))}catch(e){}
window.save=()=>{try{localStorage.setItem("v3",JSON.stringify(S))}catch(e){}};
window.M=window.MODS;
(window.EX||[]).forEach(([m,n,f])=>{const c=M[m].c.find(c=>c[0]==n);c?c[1].push(...f):M[m].c.push([n,f])});
window.day=()=>Math.floor(Date.now()/864e5);
window.fl=(m,d)=>{const o=[];M[m].c.forEach((c,ci)=>c[1].forEach((f,i)=>f[0]<=d&&o.push([m+"."+ci+"."+i,m,f])));return o};
window.due=id=>!S.box[id]||S.box[id].u<=day();
window.iv=b=>{const a=[0,1,3,7,14][Math.min(b,4)];if(!S.qd||!a)return a;return Math.max(1,Math.min(a,Math.floor((new Date(S.qd)/864e5-day())*.2)))};
window.ms=m=>{const a=fl(m,S.d);return{n:a.length,k:a.filter(x=>S.box[x[0]]&&S.box[x[0]].b>=3).length,d:S.done[m]?a.filter(x=>due(x[0])).length:0}};
window.pack=()=>JSON.stringify({done:S.done,box:S.box,qd:S.qd});
window.unpack=t=>{const o=JSON.parse(t);if(!o||typeof o.box!="object")throw 0;S.done=o.done||{};S.box=o.box;S.qd=o.qd||"";save()};
})();
