// Picks a random amount of nodes to display on page
const nodeCount = randnum(40,30);

let pageH = 0;
let pageW = 0;

for (let i = 0; i < nodeCount; i++){
  
  // Generates random node height and width.
  var square = randnum(20,10);
  
  // Divides square by 2 in order to get border radius
  var borderRad = square/2;
  
  // Generates random opacity for nodes
  var randOpac = randnum(5,7);

  pageH = window.screen.height;
  pageW = window.screen.width;
  
  var NrandTop = randnum(0,pageH);
  var NrandLeft = randnum(0,pageW);

  // Creates new div for node
  var newNode = document.createElement("div");
  newNode.id = `node${i}`;
  newNode.className = 'nodes';
  newNode.style.borderRadius = `${borderRad}px`;
  newNode.style.width = `${square}px`;
  newNode.style.height = `${square}px`;
  newNode.style.opacity = `0.${randOpac}`;
  newNode.style.left = `${NrandLeft}px`;
  newNode.style.top = `${NrandTop}px`;
  document.body.appendChild(newNode);
}
// Loop to animate nodes
/*setInterval(function(){
  let randTop = 0;
  let randLeft = 0;
  for (let i = 0; i < nodeCount; i++){
    var nodeCon = document.getElementById(`node${i}`);
    var nodeX = nodeCon.offsetLeft;
    var nodeY = nodeCon.offsetTop;

    randTop = randnum(20,-20);
    randLeft = randnum(20,-20);
    
    nodeCon.style.left = `${nodeX-randLeft}px`;
    nodeCon.style.top = `${nodeY-randTop}px`;
  }
},1000)*/