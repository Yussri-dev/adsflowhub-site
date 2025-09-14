(function(){
  function params(){ const u=new URL(location.href),o={}; u.searchParams.forEach((v,k)=>o[k]=v); return o; }
  function decorate(href,p){
    try{ const url=new URL(href, location.origin);
      const sid=p.clickid||p.subid; if(sid&&!url.searchParams.get('subid')) url.searchParams.set('subid',sid);
      ['utm_source','utm_medium','utm_campaign','utm_content','utm_term'].forEach(k=>{ if(p[k]&&!url.searchParams.get(k)) url.searchParams.set(k,p[k]); });
      return url.toString();
    }catch(e){ return href; }
  }
  function wire(){
    const p=params();
    document.querySelectorAll('a.aff-link').forEach(a=>{
      const h=a.getAttribute('href'); if(!h) return;
      a.setAttribute('href', decorate(h,p));
    });
  }
  addEventListener('DOMContentLoaded', wire);
})();
