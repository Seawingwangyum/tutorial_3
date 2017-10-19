var chatStr = "";
function replaceemojis(){
    chatStr = chatStr.replace(":)", "<img class = 'emoji' src = 'img/Sheev.gif' />")
    chatStr = chatStr.replace(":(", "<img class = 'emoji' src = 'img/sheev4.jpg' />")
    chatStr = chatStr.replace("sith lord", "the senate")
}

/*----------p1chat------*/
function changechatstr(){
    chatStr = document.getElementById("p1input").value;
    document.getElementById("p1input").value = "";
    
   /* if(chatStr == ":)"){
        chatStr = "<img class = 'emoji' src = 'img/Sheev.gif' />"
    }else if (chatStr == ":("){
        chatStr = "<img class = 'emoji' src = 'img/sheev4.jpg' />"
    }*/
    replaceemojis();
}
/*----------p2chat------*/
function changechatstr2(){
    chatStr = document.getElementById("p2input").value;
    document.getElementById("p2input").value = "";
    replaceemojis();
}
/*----------chatdisplay-----*/
function createChat(chatNum){
    var ndiv = document.createElement("div");
    ndiv.innerHTML = chatStr;
    if(chatNum == 1){
    ndiv.style.backgroundColor = "#AFA";
    } else if (chatNum == 2){
        ndiv.style.backgroundColor = "#AAF";
    }
    ndiv.style.padding = "10px";
    
    document.getElementById("chatdisplay").appendChild(ndiv);
}

/*--------interactions-------*/
document.getElementById("p1input").addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        changechatstr();
        createChat(1);
    }
});
document.getElementById("p2input").addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        changechatstr2();
        createChat(2);
    }
});
