let gameseq=[];
let userseq=[];
let buttons=["orange","red","blue","green"];
let started=false;
let level=0;
let max=0;
let btn=document.querySelector("button");
let h2=document.querySelector("h2");



document.addEventListener("keypress",function(event){
   if(started==false){
     started=true;
    console.log("game started");
    levelup();
   }
});


function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100)
    


}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    

    // choosing random button
    let rand=Math.floor(Math.random()*3);
    let color=buttons[rand];
    let randombtn=document.querySelector(`.${color}`);

    gameseq.push(color);


    flash(randombtn);

}

function checkans(){
    let idx=userseq.length-1;
    if(userseq[idx]==gameseq[idx]){

        if(userseq.length==gameseq.length){
            setTimeout(() => {
                levelup();
            }, 1000);

        }

    }
    else{

        if(level-1 > max){
            max=level-1;
        }
        h2.innerHTML=`Game over! <br>Your score is ${level-1} <br> Your highest score is ${max} Press any key to start `;
        level=0;
        gameseq=[];
        userseq=[];

        started = false;
    }

}

function buttonpress(){
    if(started==true){
        let btn=this;
    flash(btn);

    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkans();
    }
    else{
        alert("Press any key!!!");
    }


}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",buttonpress); 
}
