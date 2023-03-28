
const offset_damp = 5;
let odx = 0;
let ody = 0;


setTimeout(function(){
  const logo = document.getElementById("logo-div");
  odx = logo.offsetLeft;
  ody = logo.offsetTop;
},1)


function offset(event){
  var logo = document.getElementById("logo-div");
  var cx = event.clientX;
  var cy = event.clientY;
  var dx = logo.offsetLeft;
  var dy = logo.offsetTop;
  logo.style.transition = '50ms ease-in-out';
  
  if (cx<odx){
    logo.style.left = `${(odx-((dx-cx)/offset_damp))}px`;
  }else if (cx>odx){
    logo.style.left = `${(odx-((dx-cx)/offset_damp))}px`;
  }
  if (cy<ody){
    logo.style.top = `${(ody-((dy-cy)/offset_damp))}px`;
  }else if (cy>ody){
    logo.style.top = `${(ody-((dy-cy)/offset_damp))}px`;
  }
}
function reset(){
  var logo = document.getElementById("logo-div");  
  logo.style.transition = '300ms ease-in-out';
  logo.style.left = `${odx}px`;
  logo.style.top = `${ody}px`;
}