let chats = {}
let accs = {}


console.log(CryptoJS.MD5('Test').toString())

fetch('https://47.14.121.152:322/accs',{method:"GET"}).then(function(response) {
  return response.json();
}).then(function(data) {
  accs = data;
}).catch(function(err) {
  console.log('Fetch Error :-S', err);
});
// Constantly get chats
setInterval(function(){


fetch('https://47.14.121.152:322/msgs',{method:"GET"}).then(function(response) {
  return response.json();
}).then(function(data) {
  console.log(data)
  chats = data;
}).catch(function(err) {
  console.log('Fetch Error :-S', err);
});
},200)

setTimeout(function(){console.log(chats)},1000)


setInterval(function(){
  const chatbox = document.getElementById('msgs');
  chatbox.innerHTML = '';
for (let i = 0; i < chats.chats; i++){
  var chatmeta = chats[`chat${i}`];
  var un = chatmeta.un;
  var dat = chatmeta.dat;
  var date = chatmeta.date;
  
  // Get PFP
  var pfp = accs[un].pfp;

  var newChat = document.createElement('div');
  var newPFP = document.createElement('img');
  var footDate = document.createElement('div');
  var chatCon = document.createElement('div');
  var name = document.createElement('div');
  name.className = 'name';
  name.innerHTML = un;
  chatCon.className = 'chatm';
  chatCon.innerHTML = dat;
  footDate.innerHTML = date;
  footDate.className = 'date';
  newChat.appendChild(newPFP);
  newChat.appendChild(name);
  newPFP.src = pfp;
  newChat.appendChild(footDate);
  newChat.className = 'message';
  chatbox.appendChild(newChat);
  newChat.appendChild(chatCon);
  
  }
},100)

