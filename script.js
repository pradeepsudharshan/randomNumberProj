let body=document.getElementsByTagName("body");
var givenNum = document.getElementById("num");
var sr = document.getElementById("score");
var par = document.getElementById("para");
var randomNumber = Math.floor(Math.random()*10)+1;
var score=10;
givenNum.addEventListener("keyup",(e)=>{
  if(e.code=="Enter"){
    check()
  }
})
function check(){
    if(givenNum.value===""){
        alert("Please enter a number.");
    }
    else{
    var enteredNumber = givenNum.value;
    if(enteredNumber==randomNumber){
        par.textContent = "You are right !"
        alert("you won !");
        let timer=setTimeout(()=>{
            window.location.reload();
        },2000)
    }
    else if(score<0)
    {
        alert("Sorry, You Lost !")
            let timer=setTimeout(()=>{
            window.location.reload();
        },1000)
    }
    else {
        score--;
        sr.textContent = "Score : "+score;
        par.textContent = "You are Wrong !"
        givenNum.value="";
    }
}
}