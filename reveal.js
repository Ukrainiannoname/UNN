// Intersection Observer: додає клас show, коли елемент видно >15%
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('show'); }
  });
},{threshold:0.15});

document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
