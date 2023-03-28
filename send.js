function sendFUNC(){
    var send = document.getElementById('send');
    var text = document.getElementById('msg');
    var content = text.value;
    var user = 'Server';
    var date = '0/0/0 | 00:00pm';
    let dat = {};
    dat['un'] = user;
    dat['dat'] = content;
    dat['date'] = date;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://47.14.121.152:322/msg', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(dat));
    text.value = '';
}