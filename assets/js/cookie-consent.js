(function(){
  const cc=document.getElementById('cc'), A=document.getElementById('cc-accept'), D=document.getElementById('cc-decline');
  function has(){ try{return !!localStorage.getItem('consent')}catch(e){return true} }
  function show(){ if(cc) cc.hidden=false } function hide(){ if(cc) cc.hidden=true }
  function save(o){ try{localStorage.setItem('consent',JSON.stringify(o))}catch(e){} }
  if(!has()) show();
  A&&A.addEventListener('click',()=>{save({necessary:true,analytics:true,marketing:true});hide()});
  D&&D.addEventListener('click',()=>{save({necessary:true,analytics:false,marketing:false});hide()});
})();
