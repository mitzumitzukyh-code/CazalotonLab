const FALLBACK=[
  ["00","ballena","BALLENA"],["0","delfin","DELFÍN"],["01","carnero","CARNERO"],["02","toro","TORO"],
  ["05","leon","LEÓN"],["06","rana","RANA"],["07","perico","PERICO"],["08","raton","RATÓN"],
  ["09","aguila","ÁGUILA"],["10","tigre","TIGRE"],["29","elefante","ELEFANTE"]
];
function fig(id,slug,name){return `<figure class="draw"><img src="animals/${id}-${slug}.svg" alt="${name}"><figcaption>${id} ${name}</figcaption></figure>`}
async function boot(){
  const zoo=document.getElementById("zoo");
  const tl=document.getElementById("timeline");
  let animals=FALLBACK.map(([id,slug,name])=>({id,slug,name,file:`animals/${id}-${slug}.svg`}));
  try{const r=await fetch("animals/manifest.json"); if(r.ok) animals=(await r.json()).animals;}catch(e){}
  if(zoo) zoo.innerHTML=animals.map(a=>fig(a.id,a.slug,a.name)).join("");
  if(tl) tl.innerHTML=animals.slice(0,11).map(a=>fig(a.id,a.slug,a.name)).join("");
}
boot();
