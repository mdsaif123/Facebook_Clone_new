var settingmenu=document.querySelector('.menu-setting')
var darkbtn=document.getElementById("dark-btn")
var friendbtn=document.querySelector(".Friend-req")
var text=document.getElementById("demo")

function settingmenutoggle(){
    settingmenu.classList.toggle("menu-setting-height")
}
darkbtn.onclick=function(){
    darkbtn.classList.toggle("dark-btn-on")
    document.body.classList.toggle("dark-theme")
}


// friend request
let chacked=0

friendbtn.addEventListener('click',function(){
    if(chacked==0){
  
   friendbtn.innerHTML="Send Req"
   friendbtn.style.backgroundColor="red"
   text.innerHTML="Friend Request Sent"
   text.style.color="green"
    chacked=1
}
    else{
        friendbtn.innerHTML="Add Friend"
        friendbtn.style.backgroundColor="#ecf0f1"
        text.innerHTML="cancel friend request"
        text.style.color="red"
        chacked=0
    }

})