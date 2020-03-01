let title = document.querySelector('.FCTitle');
let question = document.querySelector('.FCQuestion');
let answer = document.querySelector('.FCAnswer');
let note = document.querySelector('.FCNote');
var firstTimestamp = new Date().getTime();
load();
var SecondTimestamp = new Date().getTime();
var result = SecondTimestamp - firstTimestamp;
console.log("time left (environ)->" + result);
function load() {
var requestURL = 'js/json/cards.json';
 var request = new XMLHttpRequest();
 request.open('GET', requestURL);
 request.responseType = "json";
 request.send();
 request.onload =  () => {
	 var loved = request.response;
	 LoadCard(loved);
 };
 
 function LoadCard(jsonObj) {
   $(title).text(jsonObj[cardNumber]['title']);
   $(question).text(jsonObj[cardNumber]['question']);
   $(answer).text(jsonObj[cardNumber]['answer']);
   if(jsonObj[cardNumber]['isNote'] === false) {
     $(note).text("Aucune note n'a été rentrée pour cette FlashCard !")
   }else {
   $(note).text(jsonObj[cardNumber]['Note']);
   }
}
}