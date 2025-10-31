document.addEventListener('DOMContentLoaded',()=>{
  const year = new Date().getFullYear();
  document.querySelectorAll('#ano,#ano2,#ano3').forEach(el=>el.textContent=year);
});