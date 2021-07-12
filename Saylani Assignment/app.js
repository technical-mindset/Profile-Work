let  miliSec = document.getElementById('sp3');
let  sSec = document.getElementById('sp2');
let  minSec = document.getElementById('sp1');
let stopWatchDisplayVariable = document.getElementById('jum');
let todoDisplayVariable = document.getElementById('todo-jum');
let firebaseDisplayVariable = document.getElementById('firebase-jum');
let stopWacthActive = document.getElementById('stop-watch-active');
let todoActive = document.getElementById('todo-active');
let firebaseActive = document.getElementById('firebase-active');
let  milisec = parseInt(miliSec.innerHTML);
let  ssec = parseInt(sSec.innerHTML);
let  minsec = parseInt(minSec.innerHTML);
var startFuncVar

function displayFunc(element){
     if(element == 0){
       stopWatchDisplayVariable.style.display = 'block';
       stopWacthActive.classList.add('active');
       todoDisplayVariable.style.display = 'none';
       todoActive.classList.remove('active');
       firebaseDisplayVariable.style.display = 'none';
       firebaseActive.classList.remove('active');

}
  else if(element == 1){
    todoDisplayVariable.style.display = 'block';
    todoActive.classList.add('active');
    stopWatchDisplayVariable.style.display = 'none';
    stopWacthActive.classList.remove('active');
    firebaseDisplayVariable.style.display = 'none' 
    firebaseActive.classList.remove('active');      
        } 
   else if(element == 2){
    firebaseDisplayVariable.style.display = 'block';
    firebaseActive.classList.add('active');
    stopWacthActive.classList.remove('active');
    stopWatchDisplayVariable.style.display = 'none';
    todoActive.classList.remove('active');
    todoDisplayVariable.style.display = 'none';
   }     
}

function startWatch(){
  startFuncVar = setInterval(()=>{
    milisec = parseInt(miliSec.innerHTML);
    milisec = milisec + 1;
     if(milisec < 10 || milisec == 0){
        milisec = '0' + milisec;
     
       }
   if(milisec == 60){
   changeOfSec();
     if(ssec == 60){
           changeOfMin();
               
            }
            minSec.innerHTML = minsec;
        sSec.innerHTML = ssec;  
    } 
    

 miliSec.innerHTML = milisec;

},1);
}

function stopWatch(){
    clearInterval(startFuncVar);
}
function resetValues(){
    miliSec.innerHTML = sSec.innerHTML = minSec.innerHTML = '00';
    stopWatch();
    
}
function changeOfSec(){
    ssec = parseInt(sSec.innerHTML);
    ssec = ssec + 1;
    milisec = 0;
    if(ssec < 10 || ssec == 0){
       ssec = '0' + ssec;
       } 
}
function changeOfMin(){

    minsec = parseInt(minSec.innerHTML);
    minsec = minsec + 1;
    ssec = 0;
     
    if(minsec < 10 || minsec == 0){
       minsec = '0' + minsec;
       }

}
