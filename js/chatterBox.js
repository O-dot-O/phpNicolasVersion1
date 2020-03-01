$('.content').hide(0);
const userInput = document.querySelector('.textCommand .form-control');
const submitBtn = document.querySelector('.textSubmit .btn');
const textContent = document.querySelector('.textContent');
botAnswer("Bonjour je me présente je suis Pipelette ton assistant de navigation. Si tu veux accéder aux multiples aides dont je dispose je t invite à taper !help");
submitBtn.addEventListener('click',() => {
    if(!userInput.value == '') {
    var msgIn = document.createElement('span');
        var msgInValue = userInput.value;
        msgIn.textContent = msgInValue;
        msgIn.style.backgroundColor = "#6c757d";// #17a2b8
        msgIn.style.float = "right" ;
        msgIn.style.display = "block" ;
        msgIn.style.right = "0" ;
        textContent.appendChild(msgIn);
    }
    if(userInput.value == '') {
        botAnswer("No content");
    }else if(userInput.value == '!help') {
        botAnswer("Do !s \n for do something ! ");
    }else if(userInput.value == '!clear') {
        $(textContent).text('');
        botAnswer("Consol cleared successfuly ! ");
    }else if(userInput.value == '!writeSomething') {
        botAnswer("Hello im van frozen freedent with another thing and i think you are btfly");
    }else if(userInput.value == '$FCNumber') {
        botAnswer("For the moment there are 5 flashCards ! ");
    }else if(userInput.value == '!Maxence') {
        botAnswer("The most beautifuul !");
    }else if(userInput.value == '!phone') {
        botAnswer("07 66 19 62 66");
    }else if(userInput.value == '!listExoMath'){
        var myMsg = document.createElement('span');
        var backLine = document.createElement('br');
        myMsg.textContent = "1.Nombres entier / 2.Nombres relatifs / 3.Fractions";
        myMsg.style.backgroundColor = "#6f7fff";//#17a2b8#6f7fff
        myMsg.style.float = "left" ;
        myMsg.style.left = "0" ;
        myMsg.style.display = "block" ;
        userInput.textContent = ''; 
        textContent.appendChild(myMsg);
        userInput.value = '';

    }else {
        botAnswer("Error : " + msgIn.textContent + " is undefined !");
    }
});

function botAnswer (botMsgContent) {
    var myMsg = document.createElement('span');
    myMsg.textContent = botMsgContent;
    myMsg.style.backgroundColor = "#6f7fff";//#17a2b8#6f7fff
    myMsg.style.float = "left" ;
    myMsg.style.left = "0" ;
    myMsg.style.display = "block" ;
    userInput.textContent = ''; 
    textContent.appendChild(myMsg);
    userInput.value = '';
}
const addZero = time  =>{
    if (time < 10) {
      time = '0' + time;
    }
    return time;
  }
  function showTime(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    $('.time').text(`${hours} : ${minutes} : ${seconds}`);
  }
  showTime();
  setInterval(showTime,1000);
